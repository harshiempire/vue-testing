import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type {
  Student,
  Chapter,
  ClassNotice,
  UpcomingActivity,
  Resource,
} from "@/types/subject";

export const useSubjectStore = defineStore("subject", () => {
  const students = ref<Student[]>([
    {
      id: "1",
      name: "Alice Johnson",
      rollNo: "6A01",
      scores: {
        FA1: 85,
        FA2: 78,
        SA1: 92,
        FA3: 88,
      },
    },
    {
      id: "2",
      name: "Bob Smith",
      rollNo: "6A02",
      scores: {
        FA1: 72,
        FA2: 65,
        SA1: 70,
        FA3: 68,
      },
    },
    {
      id: "3",
      name: "Charlie Brown",
      rollNo: "6A03",
      scores: {
        FA1: 45,
        FA2: 52,
        SA1: 48,
        FA3: 50,
      },
    },
  ]);

  const chapters = ref<Chapter[]>([
    {
      id: "1",
      title: "Chapter 1: Introduction to Algebra",
      description: "Introduction to basic algebraic concepts and operations",
      completed: true,
      resources: [
        {
          id: "1",
          title: "Algebra Basics Textbook",
          type: "textbook",
          url: "/resources/algebra-basics.pdf",
          uploadedAt: "2024-03-01",
        },
      ],
    },
    {
      id: "2",
      title: "Chapter 2: Linear Equations",
      description: "Understanding and solving linear equations",
      completed: false,
      resources: [],
    },
  ]);

  const notices = ref<ClassNotice[]>([
    {
      id: "1",
      title: "Upcoming Test on Linear Equations",
      content: "Please prepare for the test on Chapter 2 next week.",
      createdAt: "2024-03-10",
      class: "6A",
      subject: "Mathematics",
    },
  ]);

  const upcomingActivities = ref<UpcomingActivity[]>([
    {
      id: "1",
      title: "Linear Equations Quiz",
      dueDate: "2024-03-20",
      type: "test",
    },
    {
      id: "2",
      title: "Algebra Practice Problems",
      dueDate: "2024-03-15",
      type: "assignment",
    },
  ]);

  const averageClassScore = computed(() => {
    const allScores = students.value.flatMap((student) =>
      Object.values(student.scores).filter((score) => score !== undefined)
    );
    return allScores.reduce((sum, score) => sum + score, 0) / allScores.length;
  });

  const getStudentsByPerformance = () => {
    return {
      excellent: students.value.filter((student) => {
        const avgScore =
          Object.values(student.scores).reduce(
            (sum, score) => sum + (score || 0),
            0
          ) / Object.values(student.scores).length;
        return avgScore >= 75;
      }),
      needsImprovement: students.value.filter((student) => {
        const avgScore =
          Object.values(student.scores).reduce(
            (sum, score) => sum + (score || 0),
            0
          ) / Object.values(student.scores).length;
        return avgScore >= 50 && avgScore < 75;
      }),
      unacceptable: students.value.filter((student) => {
        const avgScore =
          Object.values(student.scores).reduce(
            (sum, score) => sum + (score || 0),
            0
          ) / Object.values(student.scores).length;
        return avgScore >= 30 && avgScore < 50;
      }),
    };
  };

  const addNotice = (notice: Omit<ClassNotice, "id" | "createdAt">) => {
    notices.value.push({
      ...notice,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });
  };

  const toggleChapterCompletion = (chapterId: string) => {
    const chapter = chapters.value.find((c) => c.id === chapterId);
    if (chapter) {
      chapter.completed = !chapter.completed;
    }
  };

  const addResource = (
    chapterId: string,
    resource: Omit<Resource, "id" | "uploadedAt">
  ) => {
    const chapter = chapters.value.find((c) => c.id === chapterId);
    if (chapter) {
      chapter.resources.push({
        ...resource,
        id: crypto.randomUUID(),
        uploadedAt: new Date().toISOString(),
      });
    }
  };

  return {
    students,
    chapters,
    notices,
    upcomingActivities,
    averageClassScore,
    getStudentsByPerformance,
    addNotice,
    toggleChapterCompletion,
    addResource,
  };
});
