export interface AuthContextModel {
  auth: boolean;
  handleSetAuth: (value: boolean) => void;
  userId: string;
  handleSetUserId: (value: string) => void;
}
