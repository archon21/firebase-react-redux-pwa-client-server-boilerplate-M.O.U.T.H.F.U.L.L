import React from 'react';

const Table = props => {
  const { tableHead, tableDataArr } = props;

  {
    return (
      <table className="flex column">
        <thead>
          <tr>
            {tableHead &&
              tableHead.map(head => {
                return <th className="body-1" key={head}>{head}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {tableDataArr.map(tableData => {
            return (
              <tr
                key={tableData[0]}
              >
                {tableData.map((data, index) => {
                  return (
                    <td key={data}>
                      <span className="body-2">{data}</span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
};

export default Table;
