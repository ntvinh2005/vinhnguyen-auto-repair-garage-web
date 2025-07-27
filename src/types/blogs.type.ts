import { Timestamp } from "firebase/firestore";
import { Author } from "./authors.type";

export interface Blog {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  createdAt: Timestamp;
  author: Author;
}
