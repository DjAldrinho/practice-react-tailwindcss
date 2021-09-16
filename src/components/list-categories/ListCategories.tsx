import React, {useState} from 'react';
import {AddCategory} from "../add-category/AddCategory";

export const ListCategories = () => {
    const initialCategories = ['Naruto', 'One Piece', 'Black Clover',
        'Dragon ball', 'Bleach', 'Pokemon', 'Digimon'
    ].sort();

    const [categories, setCategories] = useState(initialCategories);

    const handleRemove = (id: number) => {
        const newCategories = categories.filter((v, i) => i !== id);
        setCategories(newCategories);
    }

    return (
        <div
            className="bg-gray-100 rounded-md">
            <h2 className="px-4 py-2 mx-2 my-2 font-sans font-bold text-gray-800 bg-gray-200 shadow-sm rounded-md">Categories</h2>
            <div className="overflow-y-auto h-40">
                {
                    categories.map((category, i) => {
                        return (
                            <div key={i}
                                 className="flex items-center font-sans px-3 py-2 text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-gray-900">
                                <h3 className="flex-1 text-sm font-mono">{category}</h3>
                                <button className="px-2 py-1 text-xs text-white bg-gray-400
                                            rounded-full hover:bg-primary" onClick={() => handleRemove(i)}>
                                    X
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
            <AddCategory setCategories={setCategories}/>
        </div>
    );
}
