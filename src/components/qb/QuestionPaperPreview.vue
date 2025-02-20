<script setup lang="ts">
import type { QuestionPaper } from "@/types/qb";
import type {
  MatrixOption,
  MatchingOption,
  QuestionOptions,
} from "@/types/question";

defineProps<{
  paper: QuestionPaper;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "download"): void;
}>();

// Add type guard
const isMatrixOption = (options: QuestionOptions): options is MatrixOption => {
  return (
    typeof options === "object" &&
    !Array.isArray(options) &&
    "column1" in options &&
    "column2" in options
  );
};

const isMatchingOptions = (
  options: QuestionOptions
): options is MatchingOption[] => {
  return (
    Array.isArray(options) &&
    options.length > 0 &&
    typeof options[0] === "object" &&
    options[0] !== null &&
    "column1" in options[0]
  );
};
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-white rounded-3xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
    >
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Preview Question Paper</h2>
        <div class="flex gap-4">
          <button
            @click="emit('download')"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
          >
            Download PDF
          </button>
          <button
            @click="emit('close')"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      </div>

      <div class="bg-white p-8 shadow-lg max-w-[21cm] mx-auto">
        <div v-if="paper.template.hasSchoolName" class="text-center mb-6">
          <h1 class="text-2xl font-bold">Delhi Public School</h1>
          <p class="text-gray-600">Excellence in Education</p>
        </div>

        <div class="text-center space-y-2 mb-8">
          <h1 class="text-xl font-bold">{{ paper.title }}</h1>
          <div class="flex justify-between text-sm text-gray-600">
            <div>Class: {{ paper.class }}</div>
            <div>Subject: {{ paper.subject }}</div>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <div>Time: {{ paper.duration }} minutes</div>
            <div>Maximum Marks: {{ paper.totalMarks }}</div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="font-bold mb-2">General Instructions:</h3>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li v-for="(instruction, index) in paper.instructions" :key="index">
              {{ instruction }}
            </li>
          </ol>
        </div>

        <div class="space-y-8">
          <div
            v-for="(section, sectionIndex) in paper.sections"
            :key="section.id"
            class="space-y-4"
          >
            <h2 class="font-bold text-lg">{{ section.title }}</h2>

            <div v-if="section.instructions.length" class="mb-4">
              <div class="text-sm space-y-1">
                <div
                  v-for="(instruction, index) in section.instructions"
                  :key="index"
                >
                  {{ instruction }}
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div
                v-for="(question, questionIndex) in section.questions"
                :key="question.id"
                class="space-y-2"
              >
                <div class="flex gap-2">
                  <span class="font-medium">{{ questionIndex + 1 }}.</span>
                  <div class="flex-1">
                    <div class="font-medium whitespace-pre-line">
                      {{ question.text }}
                    </div>

                    <div
                      v-if="question.type === 'mcq'"
                      class="mt-2 space-y-1"
                      :class="
                        paper.template.optionsLayout === 'horizontal'
                          ? 'flex gap-8'
                          : ''
                      "
                    >
                      <div
                        v-for="(option, i) in question.options"
                        :key="i"
                        class="flex gap-2"
                      >
                        <span>{{ String.fromCharCode(65 + i) }})</span>
                        <span>{{ option }}</span>
                      </div>
                    </div>

                    <div
                      v-if="
                        question.type === 'match_following' &&
                        isMatchingOptions(question.options)
                      "
                      class="mt-4 grid grid-cols-2 gap-8"
                    >
                      <div class="space-y-2">
                        <div class="font-medium">Column A</div>
                        <div
                          v-for="(item, i) in question.options"
                          :key="i"
                          class="flex gap-2"
                        >
                          <span>{{ String.fromCharCode(65 + i) }}</span>
                          <span>{{ item.column1 }}</span>
                        </div>
                      </div>
                      <div class="space-y-2">
                        <div class="font-medium">Column B</div>
                        <div
                          v-for="(item, i) in question.options"
                          :key="i"
                          class="flex gap-2"
                        >
                          <span>{{ i + 1 }})</span>
                          <span>{{ item.column2 }}</span>
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="
                        question.type === 'matrix_matching' &&
                        isMatrixOption(question.options)
                      "
                      class="mt-4 grid grid-cols-2 gap-8"
                    >
                      <div class="space-y-2">
                        <div class="font-medium">Column I</div>
                        <div
                          v-for="(item, i) in question.options.column1"
                          :key="i"
                          class="flex gap-2"
                        >
                          <span>{{ String.fromCharCode(65 + i) }})</span>
                          <span>{{ item }}</span>
                        </div>
                      </div>
                      <div class="space-y-2">
                        <div class="font-medium">Column II</div>
                        <div
                          v-for="(item, i) in question.options.column2"
                          :key="i"
                          class="flex gap-2"
                        >
                          <span>{{ i + 1 }})</span>
                          <span>{{ item }}</span>
                        </div>
                      </div>
                    </div>

                    <div v-if="question.type === 'true_false'" class="mt-2">
                      <div class="flex gap-8">
                        <label class="flex items-center gap-2">
                          <span>True</span>
                        </label>
                        <label class="flex items-center gap-2">
                          <span>False</span>
                        </label>
                      </div>
                    </div>

                    <div v-if="question.type === 'fill_blanks'" class="mt-2">
                      <div
                        class="border-b border-black w-24 inline-block mx-2"
                      ></div>
                    </div>
                  </div>
                  <span class="text-sm text-gray-600 whitespace-nowrap"
                    >[{{ question.marks }} marks]</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center text-sm text-gray-600">
          --- End of Question Paper ---
        </div>
      </div>
    </div>
  </div>
</template>
