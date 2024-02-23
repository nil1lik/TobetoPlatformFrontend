export interface AuthContextModel {
  auth: boolean;
  handleSetAuth: (value: boolean) => void;
  userId: string;
  handleSetUserId: (value: string) => void;
  isFirstLogin: boolean,
  handleSetIstFirstLogin: (value: boolean) => void,
}
