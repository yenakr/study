export interface Section {
  title: string;
  content: string;
}

export interface Part {
  title: string;
  sections: Section[];
}

export interface CareFile {
  title: string;
  parts: Part[];
}

import rawData from './parsedData.json';
export const careEducationData: CareFile[] = rawData as CareFile[];
