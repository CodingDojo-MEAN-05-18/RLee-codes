export class Quote {
  author: string;
  content: string;
  votes: number = 0;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}
