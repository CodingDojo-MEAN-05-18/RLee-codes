
export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address1: string;
  address2: number;
  city: string;
  state: string;
  lucky: boolean;
  created_at: Date = new Date();
  updated_at: Date = new Date();
};
