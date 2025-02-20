<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQBStore } from '@/stores/qb';
import { useAcademicsStore } from '@/stores/academics';
import type { QuestionPaper, QuestionDistribution, Question, Section } from '@/types/qb';
import type { Task } from '@/types/academics';
import QuestionPaperCard from '@/components/qb/QuestionPaperCard.vue';
import QuestionPaperPreview from '@/components/qb/QuestionPaperPreview.vue';
import PublishPaperModal from '@/components/qb/PublishPaperModal.vue';

const qbStore = useQBStore();
const academicsStore = useAcademicsStore();
const showCreateModal = ref(false);
const showPreviewModal = ref(false);
const showPublishModal = ref(false);
const selectedChapters = ref<string[]>([]);
const selectedTemplate = ref(qbStore.paperTemplates[0].id);
const currentPaper = ref<QuestionPaper | null>(null);
const isAutomatic = ref(true);
const isEditing = ref(false);

const newPaper = ref<Partial<QuestionPaper>>({
  title: '',
  subject: '',
  class: '',
  duration: 180,
  instructions: ['Read all questions carefully', 'All questions are compulsory'],
  totalMarks: 0,
  sections: [
    {
      id: crypto.randomUUID(),
      title: 'Section A',
      instructions: ['All questions are compulsory'],
      marks: 0,
      questions: []
    }
  ] as Section[]
});

const distribution = ref<(QuestionDistribution & { marksPerQuestion: number })[]>([
  {
    type: 'mcq',
    count: 5,
    marksPerQuestion: 1,
    totalMarks: 5,
    cognitiveDistribution: {
      knowledge: 2,
      understanding: 1,
      application: 1,
      hots: 1
    }
  }
]);

const addDistribution = () => {
  distribution.value.push({
    type: 'mcq',
    count: 0,
    marksPerQuestion: 0,
    totalMarks: 0,
    cognitiveDistribution: {
      knowledge: 0,
      understanding: 0,
      application: 0,
      hots: 0
    }
  });
};

const addSection = () => {
  newPaper.value.sections?.push({
    id: crypto.randomUUID(),
    title: `Section ${String.fromCharCode(65 + (newPaper.value.sections?.length || 0))}`,
    instructions: [],
    marks: 0,
    questions: []
  });
};

const removeSection = (sectionId: string) => {
  if (!newPaper.value.sections) return;
  const index = newPaper.value.sections.findIndex(s => s.id === sectionId);
  if (index > -1) {
    newPaper.value.sections.splice(index, 1);
  }
};

const addQuestionToSection = (sectionId: string, question: Question) => {
  const section = newPaper.value.sections?.find(s => s.id === sectionId);
  if (section) {
    section.questions.push(question);
    section.marks = section.questions.reduce((total, q) => total + q.marks, 0);
  }
};

const removeQuestionFromSection = (sectionId: string, questionId: string) => {
  const section = newPaper.value.sections?.find(s => s.id === sectionId);
  if (section) {
    const index = section.questions.findIndex(q => q.id === questionId);
    if (index > -1) {
      section.questions.splice(index, 1);
      section.marks = section.questions.reduce((total, q) => total + q.marks, 0);
    }
  }
};

const availableQuestions = computed(() => {
  const selectedQuestions = new Set(
    newPaper.value.sections?.flatMap(s => s.questions.map(q => q.id)) || []
  );
  return qbStore.questions.filter(q => !selectedQuestions.has(q.id));
});

const totalMarks = computed(() => 
  newPaper.value.sections?.reduce((total, section) => total + section.marks, 0) || 0
);

const calculateTotalMarks = () => {
  return distribution.value.reduce((total, dist) => 
    total + (dist.count * dist.marksPerQuestion), 0
  );
};

const editPaper = (paper: QuestionPaper) => {
  isEditing.value = true;
  newPaper.value = { ...paper };
  selectedTemplate.value = paper.template.id;
  selectedChapters.value = paper.chapters;
  showCreateModal.value = true;
};

const createOrUpdatePaper = () => {
  let questions: Question[];
  
  if (isAutomatic.value) {
    questions = qbStore.autoGeneratePaper(
      selectedChapters.value,
      distribution.value,
      calculateTotalMarks()
    );
    
    newPaper.value.sections = [{
      id: crypto.randomUUID(),
      title: 'Section A',
      instructions: ['All questions are compulsory'],
      marks: calculateTotalMarks(),
      questions
    }];
  }

  const template = qbStore.paperTemplates.find(t => t.id === selectedTemplate.value)!;

  const paperData = {
    ...newPaper.value,
    totalMarks: totalMarks.value,
    chapters: selectedChapters.value,
    sections: newPaper.value.sections || [],
    template
  } as QuestionPaper;

  if (isEditing.value && paperData.id) {
    qbStore.updateQuestionPaper(paperData);
  } else {
    const paper = qbStore.createQuestionPaper(paperData);
    currentPaper.value = paper;
  }

  showCreateModal.value = false;
  showPreviewModal.value = true;
  isEditing.value = false;
};

const openPreview = (paper: QuestionPaper) => {
  currentPaper.value = paper;
  showPreviewModal.value = true;
};

const downloadPaper = (paper: QuestionPaper) => {
  console.log('Downloading paper:', paper);
};

const handlePublish = (paper: QuestionPaper) => {
  currentPaper.value = paper;
  showPublishModal.value = true;
};

const publishPaper = ({ dueDate, dueTime }: { dueDate: string; dueTime: string }) => {
  if (!currentPaper.value) return;

  // Create a new task from the question paper
  const task: Task = {
    id: crypto.randomUUID(),
    title: currentPaper.value.title,
    description: `Question Paper: ${currentPaper.value.title}`,
    type: 'mcq',
    category: 'scholastic',
    subject: currentPaper.value.subject,
    class: currentPaper.value.class,
    dueDate: `${dueDate}T${dueTime}:00`,
    maxMarks: currentPaper.value.totalMarks,
    status: 'assigned',
    createdAt: new Date().toISOString(),
    rubrics: []
  };

  // Add the task to academics store
  academicsStore.tasks.push(task);
  
  showPublishModal.value = false;
};
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Question Bank</h1>
        <button 
          @click="showCreateModal = true"
          class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
        >
          Create Question Paper
        </button>
      </div>

      <div class="grid gap-6">
        <QuestionPaperCard
          v-for="paper in qbStore.questionPapers"
          :key="paper.id"
          :paper="paper"
          @edit="editPaper(paper)"
          @preview="openPreview(paper)"
          @download="downloadPaper(paper)"
          @publish="handlePublish(paper)"
        />
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showCreateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ isEditing ? 'Edit' : 'Create' }} Question Paper</h2>
          <button 
            @click="showCreateModal = false"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                v-model="newPaper.title"
                type="text"
                class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
                placeholder="e.g., Mathematics Mid-Term Test"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                v-model="newPaper.subject"
                type="text"
                class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
                placeholder="Mathematics"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Class
              </label>
              <input
                v-model="newPaper.class"
                type="text"
                class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
                placeholder="6A"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Duration (minutes)
              </label>
              <input
                v-model="newPaper.duration"
                type="number"
                class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Instructions
            </label>
            <div class="space-y-2">
              <div 
                v-for="(instruction, index) in newPaper.instructions"
                :key="index"
                class="flex gap-2"
              >
                <input
                  v-model="newPaper.instructions[index]"
                  type="text"
                  class="flex-1 px-4 py-2 border border-[#ECECEC] rounded-xl"
                  :placeholder="`Instruction ${index + 1}`"
                />
                <button
                  @click="newPaper.instructions.splice(index, 1)"
                  class="text-red-500"
                >
                  ✕
                </button>
              </div>
              <button
                @click="newPaper.instructions.push('')"
                class="text-[#0447A8] text-sm"
              >
                + Add Instruction
              </button>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Select Chapters
            </label>
            <div class="space-y-2">
              <div 
                v-for="chapter in qbStore.chapters"
                :key="chapter.id"
                class="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  :id="chapter.id"
                  v-model="selectedChapters"
                  :value="chapter.id"
                  class="rounded text-[#0447A8]"
                />
                <label :for="chapter.id">{{ chapter.name }}</label>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <label class="flex items-center gap-2">
              <input
                type="radio"
                v-model="isAutomatic"
                :value="true"
                class="text-[#0447A8]"
              />
              <span>Automatic Generation</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                v-model="isAutomatic"
                :value="false"
                class="text-[#0447A8]"
              />
              <span>Manual Selection</span>
            </label>
          </div>

          <template v-if="isAutomatic">
            <div>
              <h3 class="text-lg font-medium mb-4">Question Distribution</h3>
              <div class="space-y-4">
                <div 
                  v-for="(dist, index) in distribution"
                  :key="index"
                  class="bg-gray-50 rounded-xl p-4"
                >
                  <div class="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Question Type
                      </label>
                      <select
                        v-model="dist.type"
                        class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
                      >
                        <option value="mcq">MCQ</option>
                        <option value="long_answer">Long Answer</option>
                        <option value="short_answer">Short Answer</option>
                        <option value="true_false">True/False</option>
                        <option value="match_following">Match the Following</option>
                        <option value="matrix_matching">Matrix Matching</option>
                        <option value="assertion_reasoning">Assertion & Reasoning</option>
                        <option value="case_based">Case Based</option>
                        <option value="fill_blanks">Fill in the Blanks</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Number of Questions
                      </label>
                      <input
                        v-model="dist.count"
                        type="number"
                        class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Marks per Question
                      </label>
                      <input
                        v-model="dist.marksPerQuestion"
                        type="number"
                        class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-4 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Knowledge
                      </label>
                      <input
                        v-model="dist.cognitiveDistribution.knowledge"
                        type="number"
                        class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Understanding
                      </label>
                      <input
                        v-model="dist.cognitiveDistribution.understanding"
                        type="number"
                        class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        Application
                      </label>
                      <input
                        v-model="dist.cognitiveDistribution.application"
                        type="number"
                        class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        HOTS
                      </label>
                      <input
                        v-model="dist.cognitiveDistribution.hots"
                        type="number"
                        class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
                      />
                    </div>
                  </div>
                </div>

                <button
                  @click="addDistribution"
                  class="text-[#0447A8] text-sm"
                >
                  + Add Question Type
                </button>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium">Sections</h3>
                <button
                  @click="addSection"
                  class="px-3 py-1 text-sm bg-[#0447A8] text-white rounded-lg"
                >
                  Add Section
                </button>
              </div>

              <div v-for="section in newPaper.sections" :key="section.id" class="bg-gray-50 rounded-xl p-4 space-y-4">
                <div class="flex justify-between items-start">
                  <div class="space-y-2">
                    <input
                      v-model="section.title"
                      type="text"
                      class="px-3 py-1 border border-[#ECECEC] rounded-lg"
                      :placeholder="section.title"
                    />
                    <div class="text-sm">
                      Total Marks: {{ section.marks }}
                    </div>
                  </div>
                  <button
                    v-if="newPaper.sections.length > 1"
                    @click="removeSection(section.id)"
                    class="text-red-500"
                  >
                    Remove Section
                  </button>
                </div>

                <div class="space-y-2">
                  <div 
                    v-for="(instruction, index) in section.instructions"
                    :key="index"
                    class="flex gap-2"
                  >
                    <input
                      v-model="section.instructions[index]"
                      type="text"
                      class="flex-1 px-3 py-1 border border-[#ECECEC] rounded-lg text-sm"
                      placeholder="Add instruction"
                    />
                    <button
                      @click="section.instructions.splice(index, 1)"
                      class="text-red-500 text-sm"
                    >
                      ✕
                    </button>
                  </div>
                  <button
                    @click="section.instructions.push('')"
                    class="text-[#0447A8] text-sm"
                  >
                    + Add Instruction
                  </button>
                </div>

                <div class="space-y-2">
                  <h4 class="font-medium">Selected Questions</h4>
                  <div class="space-y-2">
                    <div 
                      v-for="question in section.questions"
                      :key="question.id"
                      class="flex justify-between items-start bg-white p-3 rounded-lg"
                    >
                      <div>
                        <div class="font-medium">{{ question.text }}</div>
                        <div class="text-sm text-gray-600">
                          {{ question.type }} | {{ question.marks }} marks
                        </div>
                      </div>
                      <button
                        @click="removeQuestionFromSection(section.id, question.id)"
                        class="text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                <div class="space-y-2">
                  <h4 class="font-medium">Available Questions</h4>
                  <div class="space-y-2">
                    <div 
                      v-for="question in availableQuestions"
                      :key="question.id"
                      class="flex justify-between items-start bg-white p-3 rounded-lg"
                    >
                      <div>
                        <div class="font-medium">{{ question.text }}</div>
                        <div class="text-sm text-gray-600">
                          {{ question.type }} | {{ question.marks }} marks
                        </div>
                      </div>
                      <button
                        @click="addQuestionToSection(section.id, question)"
                        class="px-3 py-1 bg-[#0447A8] text-white rounded-lg text-sm"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <div>
            <h3 class="text-lg font-medium mb-4">Select Template</h3>
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="template in qbStore.paperTemplates"
                :key="template.id"
                class="border rounded-xl p-4 cursor-pointer"
                :class="selectedTemplate === template.id ? 'border-[#0447A8] bg-blue-50' : 'border-[#ECECEC]'"
                @click="selectedTemplate = template.id"
              >
                <h4 class="font-medium mb-2">{{ template.name }}</h4>
                <div class="text-sm text-gray-600 space-y-1">
                  <div>School Name: {{ template.hasSchoolName ? 'Yes' : 'No' }}</div>
                  <div>Logo: {{ template.hasLogo ? 'Yes' : 'No' }}</div>
                  <div>Options: {{ template.optionsLayout }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <div class="text-lg font-medium">
              Total Marks: {{ totalMarks }}
            </div>
            <div class="flex gap-4">
              <button
                @click="showCreateModal = false"
                class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
              >
                Cancel
              </button>
              <button
                @click="createOrUpdatePaper"
                class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
              >
                {{ isEditing ? 'Update' : 'Create' }} Paper
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <QuestionPaperPreview
      v-if="showPreviewModal && currentPaper"
      :paper="currentPaper"
      @close="showPreviewModal = false"
      @download="downloadPaper(currentPaper)"
    />

    <!-- Publish Modal -->
    <PublishPaperModal
      v-if="showPublishModal && currentPaper"
      :show="showPublishModal"
      :paper="currentPaper"
      @close="showPublishModal = false"
      @publish="publishPaper"
    />
  </div>
</template>