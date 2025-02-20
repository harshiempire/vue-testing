export interface MatrixOption {
  column1: string[];
  column2: string[];
}

export interface MatchingOption {
  column1: string;
  column2: string;
}

export type QuestionOptions = string[] | MatrixOption | MatchingOption[];

export interface Question {
  id: string;
  type:
    | "mcq"
    | "match_following"
    | "matrix_matching"
    | "true_false"
    | "fill_blanks";
  text: string;
  marks: number;
  options: QuestionOptions;
}
