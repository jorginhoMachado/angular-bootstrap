export interface Auth {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
  roles?: string[];
}
