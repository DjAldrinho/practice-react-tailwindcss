import React, { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export const SearchGif = ({ showRecent, setSearch }: any) => {
  const [recentSearch, setRecentSearch] = useState([]);
  const [countSearch, setCountSearch] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  let htmlRecent;
  let buttonRecent;


  function changeSearch(event: any) {
    setInputSearch(event.target.value);
  };

  function handleRemove(name: string) {
    const newSearch = _.pull(recentSearch, name);
    // @ts-ignore
    setRecentSearch(newSearch);
    mapSearch(newSearch);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    updateRecentSearch();

    setSearch(inputSearch);

    cleanSearch();
  }

  function updateRecentSearch() {
    const finalSearch = [...recentSearch, inputSearch];
    // @ts-ignore
    setRecentSearch(finalSearch);
    mapSearch(finalSearch);
  }

  function cleanSearch() {
    setInputSearch('');
  }

  function mapSearch(finalSearch: any) {
    const newRecentSearch = _.values(_.groupBy(finalSearch)).map((d: any, i: number) => ({
      id: i,
      name: d[0],
      count: d.length,
    }));

    // @ts-ignore
    setCountSearch(newRecentSearch.slice(0, 18).reverse());
  }


  if (recentSearch) {

    buttonRecent = countSearch.map((item: any) => {
      return (
        <button
          key={item.id}
          onClick={() => handleRemove(item.name)}
          className="px-2 mx-1 py-1 text-xs font-semibold text-white bg-gray-400
                                rounded-md hover:bg-gray-700  focus:ring-gray-400 focus:ring-opacity-75"
        >
          {item.name} ({item.count})
        </button>
      );
    });
  }

  if (showRecent) {
    htmlRecent = (
      <div className="mt-4">
        <h3 className="text-center text-xl italic mb-4">Recent searches</h3>
        <div className="grid grid-cols-3 grid-flow-row gap-1">{buttonRecent}</div>
      </div>
    );
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="my-1 flex items-center">
          <input
            type="text"
            placeholder="Search gif by name"
            onChange={changeSearch}
            required={true}
            name="search"
            value={inputSearch}
            className="shadow-md rounded-md mx-2 my-1 h-10 px-2 focus:outline-none w-4/5"
          />
          <button
            className="py-2 px-5 bg-gray-500 text-white font-semibold rounded-md shadow-md
                                 hover:bg-gray-700 focus:outline-none focus:ring-2
                                 focus:ring-gray-400 focus:ring-opacity-75 h-10"
          >
            Search
          </button>
        </div>
      </form>

      {htmlRecent}
    </div>
  );
};

SearchGif.propTypes = {
  showRecent: PropTypes.bool.isRequired,
  setSearch: PropTypes.func.isRequired,
};
