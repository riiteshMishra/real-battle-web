export type DocumentParagraphSection = {
  id: string;
  title: string;
  type: "paragraphs";
  content: string[];
};

export type DocumentListSection = {
  id: string;
  title: string;
  type: "list";
  items: string[];
};

export type DocumentSubsection = {
  title: string;
  items: string[];
};

export type DocumentSubsectionsSection = {
  id: string;
  title: string;
  type: "subsections";
  subsections: DocumentSubsection[];
};

export type DocumentContactSection = {
  id: string;
  title: string;
  type: "contact";
  content: string[];
};

export type DocumentSection =
  | DocumentParagraphSection
  | DocumentListSection
  | DocumentSubsectionsSection
  | DocumentContactSection;
