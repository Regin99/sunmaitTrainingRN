export interface IError {
  message: string;
}
export interface IUserData {
  email: string;
  password: string;
  avatar?: string;
  number?: string;
}
export interface ISettings {
  touchId: boolean;
  theme: string;
  notifications: boolean;
}
