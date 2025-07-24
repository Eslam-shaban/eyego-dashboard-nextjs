export type UserRole = "Admin" | "User" | "Editor";

export type UserProfile = {
  id: string;
  full_name: string;
  email: string;
  role: UserRole;
  amount: number;
};
