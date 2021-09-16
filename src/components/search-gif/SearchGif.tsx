import React, {useState} from 'react';


export const SearchGif = (props: any) => {

    const [recentSearch, setRecentSearch] = useState([]);
    const [search, setSearch] = useState();
    let htmlRecent;
    let buttonRecent;

    const changeSearch = (event: any) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // @ts-ignore
        setRecentSearch([...recentSearch, search]);
    }

    if (recentSearch) {
        buttonRecent = recentSearch.map(value => {
            return (
                <button key={value}
                        className="px-2 mx-1 py-1 text-xs font-semibold text-white bg-gray-400
                                rounded-md hover:bg-gray-700  focus:ring-gray-400 focus:ring-opacity-75">
                    {value}
                </button>
            )
        });
    }

    if (props.showRecent) {
        htmlRecent = (
            <div className="mt-4">
                <h3 className="text-center text-xl italic mb-4">Recent searches</h3>
                <div className="grid grid-cols-4 grid-flow-row gap-2">
                    {
                        buttonRecent
                    }

                </div>
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="my-1 flex items-center">
                    <input type="text" placeholder="Search gif by name"
                           onChange={changeSearch}
                           name="search" value={search}
                           className="shadow-md rounded-md mx-2 my-1 h-10 px-2 focus:outline-none w-4/5"/>
                    <button
                        className="py-2 px-5 bg-gray-500 text-white font-semibold rounded-md shadow-md
                                 hover:bg-gray-700 focus:outline-none focus:ring-2
                                 focus:ring-gray-400 focus:ring-opacity-75 h-10">
                        Search
                    </button>

                </div>
            </form>

            {
                htmlRecent
            }
        </div>
    );
}
