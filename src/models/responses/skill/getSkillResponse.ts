// Dizideki her bir eleman bir beceri öğesini temsil eder
export interface GetSkillItem {
        id: number;
        name: string;
}


export interface GetSkill {
    items: GetSkillItem[];
  }
