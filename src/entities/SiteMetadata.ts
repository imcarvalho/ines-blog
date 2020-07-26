export type Social = {
  label: string;
  isExternal: boolean;
  url: string;
};

export type SiteMetadata = {
  author: string;
  siteUrl: string;
  title: string;
  social: Social[];
};
