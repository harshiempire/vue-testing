export interface Resource {
  id: string;
  title: string;
  type: "textbook" | "notes" | "video";
  url: string;
  uploadedAt: string;
}
