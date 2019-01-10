export type Link = {
  kind: "link";
  title: string;
  subtitle: string;
  url: string;
};

export type Update = {
  kind: "update";
  title: string;
  subtitle: string;
  content: string;
};

export type Event = {
  title: string;
  dateTime: string;
};

export type Content = Link | Update;

export type JFFS = {
  about: {};
  updates: Content[];
  events: Event[];
};
