import React from 'react';
import _ from 'lodash';

export class AddCategory extends React.Component<{ setCategories: any, parentCategories: any }, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputCategory: '',
    };
    this.changeInputCategory = this.changeInputCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeInputCategory = (event: any) => {
    this.setState({ inputCategory: event.target.value });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();

    let newCategories;
    const parentCategories = this.props.parentCategories;

    if (!parentCategories.includes(this.state.inputCategory)) {
      newCategories = [...parentCategories, _.capitalize(this.state.inputCategory)].sort();
      this.props.setCategories(newCategories);
    }

    this.setState({ inputCategory: ''});
  };

  render() {
    return (
      <div className="mx-auto p-2 flex justify-center items-center">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="inputCategory" value={this.state.inputCategory}
                 onChange={this.changeInputCategory} required={true}
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
}
