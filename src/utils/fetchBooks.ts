import axios from 'axios';
import { Book } from './types';
import API_URL from './apiURL';

interface Props {
  search: string,
  count: number,
  startIndex: number
}

const fetchBooks = async ({ search, count, startIndex }: Props): Promise<Book[]> => {
  try {
    let allBooks: Book[] = [];
    let nextPageToken = '';

    do {
      const response = await axios.get(API_URL, {
        params: {
          q: search,
          maxResults: count,
          startIndex,
        },
      });

      if (response.data.items) {
        allBooks = [...allBooks, ...response.data.items];
      }
      nextPageToken = response.data.nextPageToken;
      console.log(nextPageToken)
    } while (nextPageToken);

    return allBooks;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchBooks;
