export type Link = {
  kind: "link";
  title: string;
  subtitle?: string;
  url: string;
};
export type Update = {
  kind: "update";
  title: string;
  subtitle?: string;
  extract?: string;
  content: string;
};
export type Event = {
  title: string;
  subtitle?: string;
  description: string;
  dateTime: string;
};
export type About = {
  title: string;
  subtitle?: string;
  shortDescription: string;
  imageUrl?: string;
  color?: string;
  url?: string;
};
export type Content = Link | Update;
export type JFFS = {
  about: About;
  updates: Content[];
  events: Event[];
};
