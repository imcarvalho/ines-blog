type Frontmatter = {
  date: string;
  title: string;
  tags: string;
};

export type PostExcerpt = {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: Frontmatter;
};

export type Post = {
  id: string;
  excerpt: string;
  body: string;
  frontmatter: Frontmatter;
};
