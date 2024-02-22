export interface EducationContextModel {
  educationData: any[];
  setEducationData: React.Dispatch<React.SetStateAction<any[]>>;
  childState: number;
  setChildState: React.Dispatch<React.SetStateAction<number>>;
  fetchEducation : (count: number) => Promise<void>;
  pageCount: any;
  setPageCount: React.Dispatch<React.SetStateAction<any>>;
}
