// export type Section = {
//   title: string;
// };

export type Doc = {
  title: string;
  slug: string;
  section: string;
  page: number;
  published: boolean;
};

export type Page = {
  name: string;
  slug: string;
};

export type Links = {
  section: string;
  pages: Page[];
};
