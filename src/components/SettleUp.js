import React, {Component} from "react";
import ExpenseModel from "./expense/ExpenseModel";
import { Button } from "react-bootstrap";
import '../styles/Expense.css'


class ExpenseForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {expenseModel: new ExpenseModel()};
    }

    handleSettleUp = () => {
        this.props.onSettle(this.state.expenseModel);
        this.setState({expenseModel: new ExpenseModel()});
    };

    render() {
        return (
            <div>
                <form className="form">
                {/* <Button as="input" type="submit" value="Submit" /> */}
                <div className="div">
                <Button className="button" id="settleup-id" type="submit" variant="primary" size="lg" value="SettleUp" onClick={this.handleSettleUp}>Settle Up</Button>
                </div>
                </form>
                </div>
        );
    }
}

export default ExpenseForm;
