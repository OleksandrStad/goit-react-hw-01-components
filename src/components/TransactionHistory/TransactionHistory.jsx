import PropTypes from 'prop-types';
import {
    TransactionHistoryTable,
    TableHeader,
    TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {

    return (

        <TransactionHistoryTable>
            <TableHeader>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHeader  >

            <TableBody >
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))
                }

            </TableBody >
        </TransactionHistoryTable>

    );
};



TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};