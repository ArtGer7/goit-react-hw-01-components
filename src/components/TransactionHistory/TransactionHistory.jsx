import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.tableHeadRow}>
            <th className={css.tableHeader}>Type</th>
            <th className={css.tableHeader}>Amount</th>
            <th className={css.tableHeader}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.tableBodyRow}>
              <td className={css.tableData}>{type}</td>
              <td className={css.tableData}>{amount}</td>
              <td className={css.tableData}>{currency}</td>
            </tr>
        ))}
        </tbody>
      </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired) 
  ),
}
export default TransactionHistory;