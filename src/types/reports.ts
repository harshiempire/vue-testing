export interface PerformanceChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

export interface ExamScores {
  FA1: number;
  FA2: number;
  SA1: number;
  FA3: number;
  FA4: number;
  SA2: number;
}
