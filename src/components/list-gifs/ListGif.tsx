import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useFetchImages } from '../../hooks/useFetchImages';

export const ListGif = ({ search }: any) => {

  const { data: images, loading } = useFetchImages(search);

  return (
    <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-10 mt-2 shadow-md">
      <h3 className="text-center text-xl italic mb-4">Results for {_.capitalize(search)}</h3>
      {loading && (<button type="button"
                           className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:border-gray-700 active:bg-gray-700 transition ease-in-out duration-150 cursor-not-allowed"
                           disabled={loading}>
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
        Loading
      </button>)}
      <div className="grid grid-cols-4 gap-2 place-items-stretch">
        {
          images.map((img: any, index: number) => {
            return (
              <img key={index} className="rounded-xl shadow-md"
                   alt={img.title} src={img.url}/>
            );
          })
        }
      </div>
    </div>
  );
};

ListGif.propTypes = {
  search: PropTypes.string.isRequired,
};
