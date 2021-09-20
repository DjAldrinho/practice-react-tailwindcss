import React from 'react';
import { SearchGif } from '../components/search-gif/SearchGif';
import { ListCategories } from '../components/list-categories/ListCategories';
import { ListGif } from '../components/list-gifs/ListGif';
import { GifService } from '../services/gif.service';

export class GifExpertApp extends React.Component<{}, any> {

  private _gifService: GifService;

  constructor(props: any) {
    super(props);
    this.state = {
      search: '',
      dataGif: [],
    };
    this._gifService = new GifService();
  }

  setSearch = async (value: string) => {
    const dataGif = await this._gifService.get(value);
    this.setState({ search: value, dataGif: dataGif });
  };

  render() {

    const search = this.state.search;

    return (
      <div className="container mx-auto p-7">
        <h1 className="text-gray-600 text-5xl text-center mb-4 font-sans">Gif Expert App</h1>
        <hr/>
        <div
          className="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-10 mt-2 shadow-md">
          <div className="h-70 grid grid-cols-2 grid-flow-col gap-4">
            <ListCategories setSearch={this.setSearch.bind(this)}/>
            <SearchGif showRecent={true}
                       setSearch={this.setSearch.bind(this)}/>
          </div>
        </div>
        <ListGif search={search} data={this.state.dataGif}/>
      </div>
    );
  }
}
