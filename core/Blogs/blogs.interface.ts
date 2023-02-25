export interface BlogList {
  id: number;
  listType: string;
  upload_time: string;
  blogs: Blog[];
}

export interface Blog {
  id: number;
  category: Category[];
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  image: string;
  author: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface PaginatedBlogs {
  next: any;
  itemsOnPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  previous: any;
  count: number;
  totalPages: number;
  currentPage: number;
  data: Blog[];
}
