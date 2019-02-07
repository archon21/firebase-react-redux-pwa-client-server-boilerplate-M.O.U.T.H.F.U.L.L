import React from 'react';

const Table = props => {
  const { tableHead, tableDataArr } = props;
  return (

      <ul className="flex column wrap">
        <table className="flex column">
          <thead>
            <tr>
              {tableHead.map(head => {
                return <th key={head}>{head}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableDataArr.map(tableData => {
              return (
                <tr key={tableData[0]}>
                  {tableData.map(data => {
                    return <td key={data}>{data}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </ul>

  );
};

export default Table;
