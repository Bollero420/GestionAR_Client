export type GenderProcessedData = {
  female: number;
  male: number;
  total: number;
};

export type MonthlyReport = {
  previousMonth: GenderProcessedData;
  newThisMonth: GenderProcessedData;
  goneThisMonth: GenderProcessedData;
  leftThisMonth: GenderProcessedData;
  attendancesThisMonth: GenderProcessedData;
  unAttendancesThisMonth: GenderProcessedData;
  attendancesAverage: GenderProcessedData;
  gradeAndSection: string;
  shift: string;
};

export type StudentBiMonthlyReport = {
  _id: string;
  fullName: string;
  integrated: boolean;
  available_days: number;
  unAttendances: number;
  description: string;
  worry_and_effort: string;
  respect_rules: string;
  solidarity_and_collaboration: string;
  group_responsibility: string;
  lengua: string;
  observaciones: string;
  formacion_etica_y_ciudadana: string;
  educacion_fisica: string;
  tecnologia: string;
  ciencias_sociales: string;
  ciencias_naturales: string;
  matematica: string;
  plasitca: string;
  musica: string;
};

export type BiMonthlyReport = StudentBiMonthlyReport[];
