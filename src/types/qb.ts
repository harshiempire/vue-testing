export type QuestionType = 
  | 'mcq'
  | 'long_answer'
  | 'short_answer'
  | 'true_false'
  | 'match_following'
  | 'matrix_matching'
  | 'assertion_reasoning'
  | 'case_based'
  | 'fill_blanks';

export type CognitiveLevel = 'knowledge' | 'understanding' | 'application' | 'hots';

interface MatchingOption {
  column1: string;
  column2: string;
}

interface MatrixOption {
  column1: string[];
  column2: string[];
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  cognitiveLevel: CognitiveLevel;
  marks: number;
  chapterId: string;
  options?: string[] | MatchingOption[] | MatrixOption;
  correctAnswer?: string | string[];
  solution?: string;
}

export interface Chapter {
  id: string;
  name: string;
  subject: string;
  class: string;
}

export interface Section {
  id: string;
  title: string;
  instructions: string[];
  marks: number;
  questions: Question[];
}

export interface QuestionPaper {
  id: string;
  title: string;
  subject: string;
  class: string;
  totalMarks: number;
  duration: number;
  instructions: string[];
  chapters: string[];
  sections: Section[];
  template: PaperTemplate;
  createdAt: string;
}

export interface PaperTemplate {
  id: string;
  name: string;
  hasSchoolName: boolean;
  hasLogo: boolean;
  optionsLayout: 'horizontal' | 'vertical';
  showMarks: boolean;
  showTime: boolean;
  headerStyle: 'minimal' | 'standard' | 'detailed';
}

export interface QuestionDistribution {
  type: QuestionType;
  count: number;
  totalMarks: number;
  cognitiveDistribution: {
    [key in CognitiveLevel]: number;
  };
}

export interface MatchFollowingQuestion extends Question {
  type: 'match_following';
  options: MatchingOption[];
}

export interface MatrixMatchingQuestion extends Question {
  type: 'matrix_matching';
  options: MatrixOption;
}

export type MCQQuestion = Question & { type: 'mcq'; options: string[] };
export type TrueFalseQuestion = Question & { type: 'true_false' };
export type FillBlanksQuestion = Question & { type: 'fill_blanks' };
export type LongAnswerQuestion = Question & { type: 'long_answer' };
export type ShortAnswerQuestion = Question & { type: 'short_answer' };
export type CaseBasedQuestion = Question & { type: 'case_based' };
export type AssertionReasoningQuestion = Question & { 
  type: 'assertion_reasoning';
  options: string[];
};

export type QuestionUnion = 
  | MCQQuestion 
  | TrueFalseQuestion 
  | FillBlanksQuestion 
  | LongAnswerQuestion 
  | ShortAnswerQuestion 
  | CaseBasedQuestion 
  | AssertionReasoningQuestion 
  | MatchFollowingQuestion 
  | MatrixMatchingQuestion;