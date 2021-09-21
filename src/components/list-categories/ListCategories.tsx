import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from '../add-category/AddCategory';
import _ from 'lodash';

const initialCategories = ['One Piece'].sort();

export const ListCategories = ({ setSearch }: any) => {

  const [categories, setCategories] = useState(initialCategories);

  function findGifByCategory(category: string) {
    setSearch(category);
  }

  function handleRemove(id: number){
    const newCategories = categories.filter((v: any, i: number) => i !== id);
    setCategories(_.sortBy(newCategories));
  }

  return (
    <div
      className="bg-gray-100 rounded-md">
      <h2
        className="px-4 py-2 mx-2 my-2 font-sans font-bold text-gray-800 bg-gray-200 shadow-sm rounded-md">Favourite
        Categories</h2>
      <div className="overflow-y-auto h-40">
        {
          categories.map((category: any, i: number) => {
            return (
              <div key={i}
                   className="flex items-center font-sans px-3 py-2 text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-gray-900">
                <h3 className="flex-1 text-sm font-mono"
                    onClick={() => findGifByCategory(category)}>{category}</h3>
                <button className="px-2 py-1 text-xs text-white bg-gray-400
                                            rounded-full hover:bg-primary" onClick={() => handleRemove(i)}>
                  X
                </button>
              </div>
            );
          })
        }
      </div>
      <hr/>
      <AddCategory parentCategories={categories}
                   setCategories={setCategories}/>
    </div>
  );
};

ListCategories.propTypes = {
  setSearch: PropTypes.func.isRequired,
};
