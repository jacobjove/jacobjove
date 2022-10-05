export interface BlogPost {
  title: string;
  content: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  published: boolean;
}
