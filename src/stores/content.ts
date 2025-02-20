import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'image';
  url: string;
  subject: string;
  chapter?: string;
  uploadedAt: string;
  source: 'global' | 'teacher';
  thumbnail?: string;
  description?: string;
  skillType?: 'core' | 'soft' | 'technical';
  category?: 'academic' | 'co-scholastic';
  subCategory?: 'visual-arts' | 'performance-arts';
  views: number;
  likes: number;
  likedBy: string[];
  uploadedBy: {
    name: string;
    school: string;
  };
}

export const useContentStore = defineStore('content', () => {
  // Mock global resources
  const resources = ref<Resource[]>([
    {
      id: '1',
      title: 'Introduction to Algebra',
      type: 'video',
      url: 'https://example.com/algebra-intro.mp4',
      subject: 'Mathematics',
      uploadedAt: '2024-03-01',
      source: 'global',
      thumbnail: 'https://placehold.co/400x225',
      description: 'A comprehensive introduction to algebraic concepts',
      category: 'academic',
      views: 245,
      likes: 56,
      likedBy: [],
      uploadedBy: {
        name: 'John Smith',
        school: 'Delhi Public School, RK Puram'
      }
    },
    {
      id: '2',
      title: 'Cell Structure Diagram',
      type: 'image',
      url: 'https://example.com/cell-structure.jpg',
      subject: 'Science',
      uploadedAt: '2024-03-02',
      source: 'global',
      thumbnail: 'https://placehold.co/400x400',
      category: 'academic',
      views: 189,
      likes: 42,
      likedBy: [],
      uploadedBy: {
        name: 'Sarah Wilson',
        school: 'Delhi Public School, Vasant Kunj'
      }
    },
    {
      id: '3',
      title: 'Critical Thinking Skills',
      type: 'pdf',
      url: 'https://example.com/critical-thinking.pdf',
      subject: 'General',
      uploadedAt: '2024-03-03',
      source: 'global',
      skillType: 'core',
      description: 'Develop essential critical thinking skills',
      category: 'academic',
      views: 312,
      likes: 89,
      likedBy: [],
      uploadedBy: {
        name: 'Michael Brown',
        school: 'Delhi Public School, Dwarka'
      }
    },
    // Co-scholastic Resources
    {
      id: '4',
      title: 'Basic Drawing Techniques',
      type: 'video',
      url: 'https://example.com/drawing-basics.mp4',
      subject: 'Art',
      uploadedAt: '2024-03-04',
      source: 'global',
      thumbnail: 'https://placehold.co/400x225',
      description: 'Learn fundamental drawing techniques',
      category: 'co-scholastic',
      subCategory: 'visual-arts',
      views: 156,
      likes: 45,
      likedBy: [],
      uploadedBy: {
        name: 'Emily Chen',
        school: 'Delhi Public School, Noida'
      }
    },
    {
      id: '5',
      title: 'Classical Dance Movements',
      type: 'video',
      url: 'https://example.com/classical-dance.mp4',
      subject: 'Dance',
      uploadedAt: '2024-03-05',
      source: 'global',
      thumbnail: 'https://placehold.co/400x225',
      description: 'Introduction to classical dance forms',
      category: 'co-scholastic',
      subCategory: 'performance-arts',
      views: 203,
      likes: 67,
      likedBy: [],
      uploadedBy: {
        name: 'Priya Sharma',
        school: 'Delhi Public School, Gurgaon'
      }
    }
  ]);

  const subjects = computed(() => {
    const subjectSet = new Set(resources.value.map(r => r.subject));
    return Array.from(subjectSet);
  });

  const categories = computed(() => {
    const categorySet = new Set(resources.value.map(r => r.category));
    return Array.from(categorySet);
  });

  const filterResources = (params: {
    subject?: string;
    type?: 'video' | 'pdf' | 'image';
    source?: 'global' | 'teacher';
    skillType?: 'core' | 'soft' | 'technical';
    chapter?: string;
    category?: 'academic' | 'co-scholastic';
    subCategory?: 'visual-arts' | 'performance-arts';
  }) => {
    return resources.value.filter(resource => {
      if (params.subject && resource.subject !== params.subject) return false;
      if (params.type && resource.type !== params.type) return false;
      if (params.source && resource.source !== params.source) return false;
      if (params.skillType && resource.skillType !== params.skillType) return false;
      if (params.chapter && resource.chapter !== params.chapter) return false;
      if (params.category && resource.category !== params.category) return false;
      if (params.subCategory && resource.subCategory !== params.subCategory) return false;
      return true;
    });
  };

  const addResource = (resource: Omit<Resource, 'id' | 'uploadedAt' | 'views' | 'likes' | 'likedBy' | 'uploadedBy'>) => {
    const newResource: Resource = {
      ...resource,
      id: crypto.randomUUID(),
      uploadedAt: new Date().toISOString(),
      views: 0,
      likes: 0,
      likedBy: [],
      uploadedBy: {
        name: 'Current Teacher', // This would come from auth context
        school: 'Delhi Public School, RK Puram' // This would come from auth context
      }
    };
    resources.value.push(newResource);
    return newResource;
  };

  const incrementViews = (resourceId: string) => {
    const resource = resources.value.find(r => r.id === resourceId);
    if (resource) {
      resource.views++;
    }
  };

  const toggleLike = (resourceId: string, userId: string) => {
    const resource = resources.value.find(r => r.id === resourceId);
    if (resource) {
      const likedIndex = resource.likedBy.indexOf(userId);
      if (likedIndex === -1) {
        resource.likedBy.push(userId);
        resource.likes++;
      } else {
        resource.likedBy.splice(likedIndex, 1);
        resource.likes--;
      }
    }
  };

  const getMostViewed = (limit = 5) => {
    return [...resources.value]
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  };

  const getMostLiked = (limit = 5) => {
    return [...resources.value]
      .sort((a, b) => b.likes - a.likes)
      .slice(0, limit);
  };

  return {
    resources,
    subjects,
    categories,
    filterResources,
    addResource,
    incrementViews,
    toggleLike,
    getMostViewed,
    getMostLiked
  };
});