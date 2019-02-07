import React from 'react';

const List = props => {
  const { list } = props;
  return (

      <ul className="flex column wrap">
        {list.map(item => {
          return <li key="item">{item}</li>;
        })}
      </ul>

  );
};

export default List;
