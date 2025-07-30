export type UserRole = "Admin" | "User" | "Editor";

export type UserProfile = {
  full_name: string;
  email: string;
  role: UserRole;
  amount: number;
};
