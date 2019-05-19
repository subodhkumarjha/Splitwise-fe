import React, {Component} from 'react';
import ExpenseRow from "./ExpenseRow";

class ExpenseTable extends Component {

    render() {
        return (
            <div>
                <table align="center" cellSpacing="20">
                    <thead>
                    <tr>
                        <th>Sponsor Name</th>
                        <th>Amount</th>
                        <th>Group Member</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.expenses.map((expense) => {
                        return <ExpenseRow expenses={expense} key={expense.amount}/>;
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ExpenseTable;
