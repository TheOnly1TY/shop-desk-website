import { SanityDocument } from "next-sanity";

export type Span = {
  _key: string;
  _type: "span";
  text: string;
  marks: string[];
};

export type MarkDef = {
  _key: string;
  _type: string;
  [key: string]: string;
};

export type Block = {
  _key: string;
  _type: "block";
  style: string;
  children: Span[];
  markDefs: MarkDef[];
};

export type PortableText = Block[];

export type ReviewListPropsType = {
  filter: string;
  searchWord: string;
};

export type ReviewData = {
  message: string;
  name: string;
  Business: string;
  avatar: string;
  rate: number;
};
export type ReviewCardProps = {
  Data: SanityDocument[];
  searchWord: string;
};

export type PageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};
