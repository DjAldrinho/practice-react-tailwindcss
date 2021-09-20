import React from 'react';
import _ from 'lodash';

export class ListGif extends React.Component<{ search: string, data?: any }, any> {
  render() {
    return (
      <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-10 mt-2 shadow-md">
        <h3 className="text-center text-xl italic mb-4">Results for {_.capitalize(this.props.search)}</h3>
        <div className="grid grid-cols-4 gap-2 place-items-stretch">
          {
            this.props.data.map((img: any, index: number) => {
              return (
                <img key={index}  className="rounded-xl shadow-md"
                     alt={img.title} src={img.url}/>
              );
            })
          }
        </div>
      </div>

    );
  }
}
