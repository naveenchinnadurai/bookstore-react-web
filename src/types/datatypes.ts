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
