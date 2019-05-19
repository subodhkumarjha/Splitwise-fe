import React, {Component} from "react";
import ExpenseModel from "./ExpenseModel";
import { Button } from "react-bootstrap";
import '../../styles/Expense.css'


class ExpenseForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {expenseModel: new ExpenseModel()};
    }

    nameChangeHandler = event => {
        const name = event.target.value;
        this.setState({
            expenseModel: new ExpenseModel(
                name,
                this.state.expenseModel.amount,
                this.state.expenseModel.personList
            )
        });
    };

    numberChangeHandler = event => {
        const amount = event.target.value;
        this.setState({
            expenseModel: new ExpenseModel(
                this.state.expenseModel.name,
                amount,
                this.state.expenseModel.personList
            )
        });
    };

    typeChangeHandler = event => {
        const personList = event.target.value;
        this.setState({
            expenseModel: new ExpenseModel(
                this.state.expenseModel.name,
                this.state.expenseModel.amount,
                personList
            )
        });
    };

    handleAddExpense = () => {
        this.props.onAdd(this.state.expenseModel);
        this.setState({expenseModel: new ExpenseModel()});
    };

    render() {
        return (
            <div>
                <form className="form">
                <div className="div">
                    <label>
                        Name:
                        <input className="inputName" id="name-id" type="text" onChange={this.nameChangeHandler}
                               value={this.state.expenseModel.name} required/>
                    </label>
                </div>
                <div className="div">
                    <label>
                        Amount:
                        <input className="inputName" 
                            id="number-id"
                            type="string"
                            onChange={this.numberChangeHandler}
                            value={this.state.expenseModel.amount}
                        />
                    </label>
                </div>
                <div className="div">
                    <label>Group:
                        <input className="inputName" 
                            id="type-id"
                            type="string"
                            onChange={this.typeChangeHandler}
                            value={this.state.expenseModel.personList}
                        />
                    </label>
                </div>
                {/* <Button as="input" type="submit" value="Submit" /> */}
                <div className="div">
                <Button className="button" id="submit-id" type="submit" variant="primary" size="lg" value="Submit" onClick={this.handleAddExpense}>Submit</Button>
                </div>
                </form>
                </div>
        );
    }
}

export default ExpenseForm;
