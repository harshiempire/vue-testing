<script setup lang="ts">
import { ref, computed } from "vue";
import { useJourneyStore } from "@/stores/journey";
import type { Achievement } from "@/types/journey";

const props = defineProps<{
  studentId: string;
}>();
type AchievementType =
  | "academic"
  | "sports"
  | "arts"
  | "leadership"
  | "community";

const journeyStore = useJourneyStore();
const selectedType = ref<AchievementType>("academic");
const verificationComment = ref("");
const selectedAchievement = ref<Achievement | null>(null);
const showVerificationModal = ref(false);
const selectedBadge = ref("");

// Comprehensive badge list organized by category
const badges = {
  academic: [
    {
      emoji: "🎓",
      name: "Academic Excellence",
      description: "Outstanding academic performance",
    },
    {
      emoji: "📚",
      name: "Scholar",
      description: "Exceptional dedication to learning",
    },
    {
      emoji: "🔬",
      name: "Science Whiz",
      description: "Excellence in scientific pursuits",
    },
    {
      emoji: "📐",
      name: "Math Master",
      description: "Outstanding mathematical ability",
    },
    {
      emoji: "✍️",
      name: "Literary Star",
      description: "Excellence in language and literature",
    },
  ],
  sports: [
    {
      emoji: "🏆",
      name: "Sports Champion",
      description: "Outstanding athletic achievement",
    },
    {
      emoji: "⚽",
      name: "Team Player",
      description: "Exceptional sportsmanship",
    },
    { emoji: "🏃‍♂️", name: "Track Star", description: "Excellence in athletics" },
    {
      emoji: "🏸",
      name: "Sports Excellence",
      description: "Outstanding performance in sports",
    },
    {
      emoji: "🏅",
      name: "Athletic Achievement",
      description: "Recognition of athletic prowess",
    },
  ],
  arts: [
    {
      emoji: "🎨",
      name: "Creative Genius",
      description: "Excellence in visual arts",
    },
    {
      emoji: "🎭",
      name: "Drama Star",
      description: "Outstanding performance in theater",
    },
    {
      emoji: "🎵",
      name: "Music Maestro",
      description: "Excellence in musical performance",
    },
    {
      emoji: "🎪",
      name: "Performance Star",
      description: "Outstanding stage presence",
    },
    {
      emoji: "🖼️",
      name: "Artistic Excellence",
      description: "Recognition of artistic talent",
    },
  ],
  leadership: [
    {
      emoji: "👑",
      name: "Leadership Excellence",
      description: "Outstanding leadership qualities",
    },
    {
      emoji: "🤝",
      name: "Team Leader",
      description: "Exceptional team management",
    },
    {
      emoji: "📢",
      name: "Public Speaker",
      description: "Excellence in communication",
    },
    {
      emoji: "🎯",
      name: "Goal Achiever",
      description: "Outstanding goal-setting and achievement",
    },
    {
      emoji: "🌟",
      name: "Rising Star",
      description: "Emerging leadership potential",
    },
  ],
  community: [
    {
      emoji: "🌍",
      name: "Community Champion",
      description: "Outstanding community service",
    },
    {
      emoji: "🤲",
      name: "Helping Hand",
      description: "Exceptional volunteer work",
    },
    {
      emoji: "♻️",
      name: "Eco Warrior",
      description: "Environmental stewardship",
    },
    {
      emoji: "🌱",
      name: "Social Impact",
      description: "Making a difference in society",
    },
    {
      emoji: "💝",
      name: "Community Spirit",
      description: "Outstanding community involvement",
    },
  ],
};

const achievements = computed(() =>
  journeyStore.getAchievementsByType(selectedType.value)
);

const availableBadges = computed(() => badges[selectedType.value] || []);

const handleVerify = (
  achievementId: string,
  status: "verified" | "rejected"
) => {
  if (!selectedBadge && status === "verified") {
    alert("Please select a badge before verifying the achievement");
    return;
  }

  journeyStore.verifyAchievement(achievementId, status);
  showVerificationModal.value = false;
  selectedAchievement.value = null;
  verificationComment.value = "";
  selectedBadge.value = "";
};

const openVerificationModal = (achievement: Achievement) => {
  selectedAchievement.value = achievement;
  showVerificationModal.value = true;
};

const getStatusColor = (status: Achievement["verificationStatus"]) => {
  const colors = {
    pending: "yellow",
    verified: "green",
    rejected: "red",
  };
  return colors[status];
};
</script>

<template>
  <div class="space-y-6">
    <!-- Type Filter -->
    <div class="flex gap-4">
      <button
        v-for="type in [
          'academic',
          'sports',
          'arts',
          'leadership',
          'community',
        ]"
        :key="type"
        class="px-4 py-2 rounded-xl"
        :class="
          selectedType === type
            ? 'bg-[#0447A8] text-white'
            : 'bg-white text-gray-700'
        "
        @click="selectedType = type as AchievementType"
      >
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
      </button>
    </div>

    <!-- Achievements Grid -->
    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="achievement in achievements"
        :key="achievement.id"
        class="bg-white rounded-3xl border border-[#ECECEC] p-6"
      >
        <div class="flex justify-between items-start mb-4">
          <div class="text-4xl">{{ achievement.badge }}</div>
          <span
            class="px-3 py-1 text-sm rounded-lg"
            :class="`bg-${getStatusColor(achievement.verificationStatus)}-50 
              text-${getStatusColor(achievement.verificationStatus)}-700`"
          >
            {{
              achievement.verificationStatus.charAt(0).toUpperCase() +
              achievement.verificationStatus.slice(1)
            }}
          </span>
        </div>

        <h3 class="text-lg font-semibold mb-2">{{ achievement.name }}</h3>
        <p class="text-gray-600 mb-4">{{ achievement.description }}</p>

        <div class="text-sm text-gray-500 mb-4">
          {{ new Date(achievement.date).toLocaleDateString() }}
        </div>

        <div v-if="achievement.evidence.length" class="mb-4">
          <div class="text-sm font-medium mb-2">Evidence</div>
          <div class="flex flex-wrap gap-2">
            <a
              v-for="(file, index) in achievement.evidence"
              :key="index"
              :href="file.url"
              target="_blank"
              class="px-3 py-1 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 flex items-center gap-2"
            >
              <span>
                {{
                  file.type === "image"
                    ? "🖼️"
                    : file.type === "pdf"
                      ? "📄"
                      : "🔗"
                }}
              </span>
              <span>View {{ file.type }}</span>
            </a>
          </div>
        </div>

        <div
          v-if="achievement.verificationStatus === 'pending'"
          class="flex gap-2"
        >
          <button
            @click="openVerificationModal(achievement)"
            class="w-full px-3 py-2 bg-[#0447A8] text-white rounded-lg text-sm"
          >
            Verify Achievement
          </button>
        </div>
      </div>
    </div>

    <!-- Verification Modal -->
    <div
      v-if="showVerificationModal && selectedAchievement"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-3xl p-6 w-full max-w-lg">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">Verify Achievement</h2>
          <button
            @click="showVerificationModal = false"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <h3 class="font-medium">{{ selectedAchievement.name }}</h3>
            <p class="text-sm text-gray-600">
              {{ selectedAchievement.description }}
            </p>
          </div>

          <!-- Badge Selection -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Select Badge
            </label>
            <div class="grid grid-cols-2 gap-3">
              <button
                v-for="badge in availableBadges"
                :key="badge.name"
                class="flex items-center gap-2 p-3 rounded-xl border transition-colors"
                :class="
                  selectedBadge === badge.emoji
                    ? 'border-[#0447A8] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                "
                @click="selectedBadge = badge.emoji"
              >
                <span class="text-2xl">{{ badge.emoji }}</span>
                <div class="text-left">
                  <div class="font-medium text-sm">{{ badge.name }}</div>
                  <div class="text-xs text-gray-500">
                    {{ badge.description }}
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div>
            <div class="text-sm font-medium mb-2">Evidence Review</div>
            <div class="space-y-2">
              <div
                v-for="(file, index) in selectedAchievement.evidence"
                :key="index"
                class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div class="flex items-center gap-2">
                  <span>
                    {{
                      file.type === "image"
                        ? "🖼️"
                        : file.type === "pdf"
                          ? "📄"
                          : "🔗"
                    }}
                  </span>
                  <span class="text-sm">Evidence {{ index + 1 }}</span>
                </div>
                <a
                  :href="file.url"
                  target="_blank"
                  class="text-sm text-[#0447A8] hover:underline"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Verification Comment
            </label>
            <textarea
              v-model="verificationComment"
              rows="3"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              placeholder="Add a comment about your verification decision..."
            ></textarea>
          </div>

          <div class="flex justify-end gap-4">
            <button
              @click="handleVerify(selectedAchievement.id, 'rejected')"
              class="px-4 py-2 bg-red-600 text-white rounded-xl"
            >
              Reject
            </button>
            <button
              @click="handleVerify(selectedAchievement.id, 'verified')"
              class="px-4 py-2 bg-green-600 text-white rounded-xl"
              :disabled="!selectedBadge"
            >
              Verify & Award Badge
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
