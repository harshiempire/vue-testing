import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { TimelineEvent, Portfolio, Achievement } from '@/types/journey';

export const useJourneyStore = defineStore('journey', () => {
  // Mock timeline events
  const events = ref<TimelineEvent[]>([
    {
      id: '1',
      date: '2024-03-01',
      type: 'test',
      category: 'scholastic',
      title: 'Mathematics FA-1',
      description: 'First Formative Assessment in Mathematics',
      subject: 'Mathematics',
      score: 45,
      maxScore: 50,
      status: 'completed'
    },
    {
      id: '2',
      date: '2024-03-05',
      type: 'activity',
      category: 'co-scholastic',
      title: 'Classical Dance Performance',
      description: 'Annual cultural fest performance',
      status: 'completed',
      evidence: [
        {
          type: 'image',
          url: 'https://example.com/dance.jpg'
        }
      ]
    },
    {
      id: '3',
      date: '2024-03-10',
      type: 'achievement',
      category: 'scholastic',
      title: 'Science Olympiad Winner',
      description: 'First place in regional Science Olympiad',
      subject: 'Science',
      status: 'completed',
      evidence: [
        {
          type: 'image',
          url: 'https://example.com/certificate.jpg'
        }
      ]
    },

     {
      id: '4',
      date: '2024-03-09',
      type: 'test',
      category: 'scholastic',
      title: 'Mathematics FA-1',
      description: 'First Formative Assessment in Mathematics',
      subject: 'Mathematics',
      score: 45,
      maxScore: 50,
      status: 'completed'
    },     {
      id: '8',
      date: '2024-03-05',
      type: 'activity',
      category: 'co-scholastic',
      title: 'Classical Dance Performance',
      description: 'Annual cultural fest performance',
      status: 'completed',
      evidence: [
        {
          type: 'image',
          url: 'https://example.com/dance.jpg'
        }
      ]
    },
    {
      id: '5',
      date: '2024-04-09',
      type: 'test',
      category: 'scholastic',
      title: 'Mathematics FA-1',
      description: 'First Formative Assessment in Mathematics',
      subject: 'Mathematics',
      score: 45,
      maxScore: 50,
      status: 'completed'
    }, {
      id: '6',
      date: '2024-05-09',
      type: 'test',
      category: 'scholastic',
      title: 'Mathematics FA-1',
      description: 'First Formative Assessment in Mathematics',
      subject: 'Mathematics',
      score: 45,
      maxScore: 50,
      status: 'completed'
    }, {
      id: '7',
      date: '2024-05-15',
      type: 'test',
      category: 'scholastic',
      title: 'Mathematics FA-1',
      description: 'First Formative Assessment in Mathematics',
      subject: 'Mathematics',
      score: 45,
      maxScore: 50,
      status: 'completed'
    },
        {
      id: '9',
      date: '2024-03-05',
      type: 'activity',
      category: 'co-scholastic',
      title: 'Classical Dance Performance',
      description: 'Annual cultural fest performance',
      status: 'completed',
      evidence: [
        {
          type: 'image',
          url: 'https://example.com/dance.jpg'
        }
      ]
    },
  
    
  ]);

  // Mock portfolio items
  const portfolios = ref<Portfolio[]>([
    {
      id: '1',
      studentId: 'student1',
      type: 'scholastic',
      category: 'Mathematics',
      items: [
        {
          id: '1',
          title: 'Geometry Project',
          description: 'A study of 3D shapes in architecture',
          date: '2024-03-01',
          files: [
            {
              name: 'project.pdf',
              type: 'pdf',
              url: 'https://example.com/project.pdf'
            }
          ]
        }
      ]
    },
    {
      id: '2',
      studentId: 'student1',
      type: 'co-scholastic',
      category: 'Dance',
      items: [
        {
          id: '1',
          title: 'Annual Day Performance',
          description: 'Bharatanatyam performance',
          date: '2024-03-05',
          files: [
            {
              name: 'performance.mp4',
              type: 'video',
              url: 'https://example.com/performance.mp4'
            }
          ]
        }
      ]
    }
  ]);

  // Mock achievements
  const achievements = ref<Achievement[]>([
    {
      id: '1',
      name: 'Science Champion',
      description: 'Won first place in the Regional Science Olympiad',
      date: '2024-03-10',
      badge: '🏆',
      type: 'academic',
      verificationStatus: 'verified',
      evidence: [
        {
          type: 'image',
          url: 'https://example.com/certificate.jpg'
        }
      ]
    },
    {
      id: '2',
      name: 'Dance Excellence',
      description: 'Outstanding performance in Annual Cultural Fest',
      date: '2024-03-05',
      badge: '🎭',
      type: 'arts',
      verificationStatus: 'pending',
      evidence: [
        {
          type: 'image',
          url: 'https://example.com/performance.jpg'
        }
      ]
    }
  ]);

  // Getters
  const getTimelineByDateRange = (startDate: string, endDate: string) => {
    return events.value.filter(event => 
      event.date >= startDate && event.date <= endDate
    ).sort((a, b) => b.date.localeCompare(a.date));
  };

  const getPortfolioByType = (studentId: string, type: 'scholastic' | 'co-scholastic') => {
    return portfolios.value.filter(p => 
      p.studentId === studentId && p.type === type
    );
  };

  const getAchievementsByType = (type: Achievement['type']) => {
    return achievements.value.filter(a => a.type === type);
  };

  // Actions
  const addPortfolioItem = (
    portfolioId: string, 
    item: Omit<Portfolio['items'][0], 'id'>
  ) => {
    const portfolio = portfolios.value.find(p => p.id === portfolioId);
    if (portfolio) {
      portfolio.items.push({
        ...item,
        id: crypto.randomUUID()
      });
    }
  };

  const verifyAchievement = (achievementId: string, status: 'verified' | 'rejected') => {
    const achievement = achievements.value.find(a => a.id === achievementId);
    if (achievement) {
      achievement.verificationStatus = status;
    }
  };

  return {
    events,
    portfolios,
    achievements,
    getTimelineByDateRange,
    getPortfolioByType,
    getAchievementsByType,
    addPortfolioItem,
    verifyAchievement
  };
});