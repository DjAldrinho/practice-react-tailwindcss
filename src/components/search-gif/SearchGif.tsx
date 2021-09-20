import React from 'react';
import _ from 'lodash';

export class SearchGif extends React.Component<{ showRecent: boolean, setSearch: any }, any> {


  constructor(props: any) {
    super(props);
    this.state = {
      recentSearch: [],
      countSearch: [],
      search: '',
    };

    this.changeSearch = this.changeSearch.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeSearch = (event: any) => {
    this.setState({ search: event.target.value });
  };

  handleRemove = (name: string) => {
    const newSearch = _.pull(this.state.recentSearch, name);
    this.setState({ recentSearch: newSearch });
    this.mapSearch(newSearch);
  };

  handleSubmit = async (event: any) => {
    event.preventDefault();

    this.setRecentSearch();

    await this.props.setSearch(this.state.search);

    this.cleanSearch();
  };

  private setRecentSearch() {
    const recentSearch = this.state.recentSearch;
    const finalSearch = [...recentSearch, this.state.search];
    this.setState({ recentSearch: finalSearch });
    this.mapSearch(finalSearch);
  }

  private cleanSearch() {
    this.setState({ search: '' });
  }

  private mapSearch = (finalSearch: any) => {
    const newRecentSearch = _.values(_.groupBy(finalSearch)).map((d: any, i: number) => ({
      id: i,
      name: d[0],
      count: d.length,
    }));

    this.setState({ countSearch: newRecentSearch.slice(0, 18).reverse() });
  };

  render() {
    let htmlRecent;
    let buttonRecent;


    if (this.state.recentSearch) {

      buttonRecent = this.state.countSearch.map((item: any) => {
        return (
          <button
            key={item.id}
            onClick={() => this.handleRemove(item.name)}
            className="px-2 mx-1 py-1 text-xs font-semibold text-white bg-gray-400
                                rounded-md hover:bg-gray-700  focus:ring-gray-400 focus:ring-opacity-75"
          >
            {item.name} ({item.count})
          </button>
        );
      });
    }

    if (this.props.showRecent) {
      htmlRecent = (
        <div className="mt-4">
          <h3 className="text-center text-xl italic mb-4">Recent searches</h3>
          <div className="grid grid-cols-3 grid-flow-row gap-1">{buttonRecent}</div>
        </div>
      );
    }

    const search = this.state.search;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="my-1 flex items-center">
            <input
              type="text"
              placeholder="Search gif by name"
              onChange={this.changeSearch}
              required={true}
              name="search"
              value={search}
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
  }
}
