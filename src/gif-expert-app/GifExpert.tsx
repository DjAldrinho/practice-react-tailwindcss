import React, { useState } from 'react';
import { SearchGif } from '../components/search-gif/SearchGif';
import { ListCategories } from '../components/list-categories/ListCategories';
import { ListGif } from '../components/list-gifs/ListGif';


export const GifExpertApp = () => {

  const [search, setSearch] = useState('');

  return (
    <div className="container mx-auto p-7">
      <h1 className="text-gray-600 text-5xl text-center mb-4 font-sans">Gif Expert App</h1>
      <hr/>
      <div
        className="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-10 mt-2 shadow-md">
        <div className="h-70 grid grid-cols-2 grid-flow-col gap-4">
          <ListCategories setSearch={setSearch}/>
          <SearchGif showRecent={true}
                     setSearch={setSearch}/>
        </div>
      </div>
      <ListGif search={search}/>
    </div>
  );
};
