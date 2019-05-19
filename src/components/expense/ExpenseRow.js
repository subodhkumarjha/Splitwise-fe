import React, {Component} from 'react';

class ExpenseRow extends Component {

    render() {
        const {name = "", amount = "", personList = ""} = this.props.expenses.expense;
        return (
            <tr>
                <td>{name}</td>
                <td>{amount}</td>
                <td>{personList}</td>
            </tr>
        );
    }
}

export default ExpenseRow;
