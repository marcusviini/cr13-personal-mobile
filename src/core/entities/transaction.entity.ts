export interface Transaction {
    title: string;
    date: Date;
    receive: boolean;
    value: number;
    concluded: boolean;
  }