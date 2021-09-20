import React from 'react';
import { AddCategory } from '../add-category/AddCategory';


export class ListCategories extends React.Component<{ setSearch: any}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      categories: ['One Piece', 'Black Clover',
        'Dragon ball', 'Bleach', 'Pokemon', 'Digimon',
      ].sort(),
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  findGifByCategory = async (category: string) => {
    await this.props.setSearch(category);
  };

  handleRemove = (id: number) => {
    const newCategories = this.state.categories.sort().filter((v: any, i: number) => i !== id);
    this.setState({ categories: newCategories });
  };

  setCategories = (categories: any) => {
    this.setState({ categories: categories });
  };

  render() {
    return (
      <div
        className="bg-gray-100 rounded-md">
        <h2
          className="px-4 py-2 mx-2 my-2 font-sans font-bold text-gray-800 bg-gray-200 shadow-sm rounded-md">Favourite
          Categories</h2>
        <div className="overflow-y-auto h-40">
          {
            this.state.categories.map((category: any, i: number) => {
              return (
                <div key={i}
                     className="flex items-center font-sans px-3 py-2 text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-gray-900">
                  <h3 className="flex-1 text-sm font-mono"
                      onClick={() => this.findGifByCategory(category)}>{category}</h3>
                  <button className="px-2 py-1 text-xs text-white bg-gray-400
                                            rounded-full hover:bg-primary" onClick={() => this.handleRemove(i)}>
                    X
                  </button>
                </div>
              );
            })
          }
        </div>
        <hr/>
        <AddCategory parentCategories={this.state.categories}
                     setCategories={this.setCategories.bind(this)}/>
      </div>
    );
  }
}
