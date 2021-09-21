import { useEffect, useState } from 'react';
import { GifService } from '../services/gif.service';

export const useFetchImages = (search: string) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  const gifService = new GifService();

  useEffect(() => {

    if (search) {
      gifService.get(search).then((img) => {
        setState({
          data: img,
          loading: false,
        });
      });
    }

  }, [search]);

  return state;
};
