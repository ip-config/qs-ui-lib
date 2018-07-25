import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ data, tableTitle, direction }) => (
  <div className='Table'>
    <div className='table-wrapper'>
      <div className='table-title'>{tableTitle}</div>
      {
        direction === 'horizontal'
        ? (
          <table>
            {
              Object.keys(data).map((key) => {
                return (
                  <tr className='horizontal-row' key={data[key]}>
                    <th>{key}</th>
                    <td>{data[key]}</td>
                  </tr>
                )
              })
            }
          </table>
        )
        : (
          <table>
            <thead>
              <tr>
                {
                  Object.keys(data).map((key) => {
                    return (
                      <th>{key}</th>
                    )
                  })
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(data).map((key) => {
                    return (
                      <td>{data[key]}</td>
                    )
                  })
                }
              </tr>
            </tbody>
          </table>
        )
      }
    </div>

    <style jsx>{`
      .Table {
        * { text-align: left; }
      }
      .table-title {
        background: #e6e9f4;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #052892;
        padding: 10px 20px;
      }
      .table-wrapper {
        display: flex;
        flex-direction: column;
        table { border-collapse: collapse; }
        th,td { border: solid 1px #eeeeee; padding: 20px;}
        th {
          width: 194px;
          background-color: #f9f9f9;
          font-size: 18px;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          line-height: 1;
          letter-spacing: normal;
          color: #1e2837;
        }
        td {
          font-size: 16px;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.38;
          letter-spacing: normal;
          color: #1e2837;
        }
        ${ direction === 'horizontal'}
      }
    `}</style>
  </div>
)

Table.propTypes = {
  /**
   * Child Elements
   */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

Table.defaultProps = {}

export default Table
