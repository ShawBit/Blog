/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Route {
  path: string;
  title: string;
}

export type BlogPost = {
  id?: string;
  slug?: string;
  title?: string;
  content: string;
  metadata: {
    [key: string]: any;
  };
};

export type PostsByMonth = {
  [key: string]: BlogPost[];
};
