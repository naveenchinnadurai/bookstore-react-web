interface ImageLinks {
  thumbnail?: string;
}

interface VolumeInfo {
  title: string;
  pageCount:number;
  infoLink:string;
  description:string;
  averageRating:number;
  publishedDate:string;
  authors?: string[];
  imageLinks?: ImageLinks;
  categories?: string[]
}

interface SaleInfo {
  listPrice?: {
    amount?: string;
  };
}

export interface Book {
  id: string | null ;
  volumeInfo: VolumeInfo;
  saleInfo?: SaleInfo;
}


export interface signupFormValues {
  fullName: string;
  email: string;
  mobileNumber?: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormValues{
  email:string,
  password:string
}


export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string | null;
  joined_on: Date;
}
