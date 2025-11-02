export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: "student" | "teacher" | "admin";
  status: "in-progress" | "active" | "blocked";
  isDeleted: boolean;
};
