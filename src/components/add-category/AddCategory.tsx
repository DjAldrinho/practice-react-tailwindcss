import React, {useState} from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";


export const AddCategory = ({setCategories}: any) => {

    const [inputCategory, setInputCategory] = useState('');

    const changeInputCategory = (event: any) => {
        setInputCategory(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        setCategories((categories: any) => {
            if (categories.includes(inputCategory)) {
                // @ts-ignore
                setInputCategory('');
                return categories;
            }
            return [...categories, _.capitalize(inputCategory)].sort();
        });
    }

    return (
        <div className="mx-auto p-2 flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <input type="text" name="inputCategory" value={inputCategory}
                       onChange={changeInputCategory} required={true}
                       className="shadow-md rounded-md mx-2 my-1 h-10 px-2 focus:outline-none "
                       placeholder="Write your category..."/>
                <button
                    className="py-2 px-5 bg-green-500 text-white font-semibold rounded-md shadow-md
                                 hover:bg-green-700 focus:outline-none focus:ring-2
                                 focus:ring-green-400 focus:ring-opacity-75">
                    Add
                </button>
            </form>
        </div>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
