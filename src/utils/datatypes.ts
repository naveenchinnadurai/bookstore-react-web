interface ImageLinks {
    thumbnail?: string;
  }
  
interface VolumeInfo {
    title: string;
    authors?: string[];
    imageLinks?: ImageLinks;
    categories?:string[]
  }
  
interface SaleInfo {
    listPrice?: {
      amount?: string;
    };
  }
  
export interface Book {
    id: string;
    volumeInfo: VolumeInfo;
    saleInfo?: SaleInfo;
  }