import axios from 'axios';
import { Book } from './datatypes';

interface Props{
  API_URL:string,
  search:string,
  count:number
}

const fetchBooks = async ({API_URL,search,count}:Props): Promise<Book[]> => {
  try {
    let allBooks: Book[] = [];
    let nextPageToken = '';

    do {
      const response = await axios.get(API_URL, {
        params: {
          q: search,
          maxResults: count,
          startIndex: allBooks.length,
        },
      });

      if (response.data.items) {
        allBooks = [...allBooks, ...response.data.items];
      }
      nextPageToken = response.data.nextPageToken;

    } while (nextPageToken);

    return allBooks;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchBooks;
