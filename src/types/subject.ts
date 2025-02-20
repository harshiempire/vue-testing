export interface Student {
  id: string;
  name: string;
  rollNo: string;
  scores: {
    FA1?: number;
    FA2?: number;
    SA1?: number;
    SA2?: number;
    FA3?: number;
    FA4?: number;
  };
}

export interface Resource {
  id: string;
  title: string;
  type: "textbook" | "notes" | "video";
  url: string;
  uploadedAt: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  resources: Resource[];
}

export interface ClassNotice {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  class: string;
  subject: string;
}

export interface UpcomingActivity {
  id: string;
  title: string;
  dueDate: string;
  type: "activity" | "test" | "assignment";
}
