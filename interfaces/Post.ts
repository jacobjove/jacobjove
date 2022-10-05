export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  publishedAt: string;
  updatedAt?: string;
  published: boolean;
}
