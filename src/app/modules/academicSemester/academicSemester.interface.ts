export type TMonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type TAcademicSemester = {
  name: "Autumn" | "Fall" | "Summar";
  code: "01" | "02" | "03";
  year: string;
  startMonths: TMonths;
  endMonths: TMonths;
};

export type TAcademicSemesterNameCodeMapper = {
  [key: string]: string;
};
