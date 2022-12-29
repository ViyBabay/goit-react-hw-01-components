import PropTypes from 'prop-types';
import style from './Transaction.module.css';

export const Transaction = ({ items }) => {
    return (
        <table className={style.transactions}>
            <thead>
                <tr className={style.tr}>
                    <th className={style.head}>Type</th>
                    <th className={style.head}>Amount</th>
                    <th className={style.head}>Currency</th>
                </tr>
            </thead>
            {items.map(({ id, type, amount, currency }) => (
                <tbody key={id}>
                    <tr>
                        <td className={style.td}>{type}</td>
                        <td className={style.td}>{amount}</td>
                        <td className={style.td}>{currency}</td>
                    </tr>
                </tbody>
            ))}
        </table>
    );
};



Transaction.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        })
    ),
}
