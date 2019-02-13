import React from 'react';

const assignClass = index => {
  const assignee = index % 2 === 0 ? 'body-1 list-none underline' : 'body-2 list-none py-10px';
  return assignee;
};

const List = props => {
  const { list, small, color, alternating } = props;
  return (
    <ul
      style={{ padding: '15px 0' }}
      className="flex column align-start color-secondary w-90"
    >
      {list.map((item, index) => {
        return (
          <li
            className={`${
              alternating ? assignClass(index) : 'body-1'
            } ${small ? 'body-2' : 'body-1'} ${color && color}`}
            key={item}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
