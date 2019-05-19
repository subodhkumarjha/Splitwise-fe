import React, { Component } from "react";
import ExpenseTable from "./expense/ExpenseTable";
import ExpenseForm from "./expense/ExpenseForm";
import SettleUp from "./SettleUp";

class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = { expenses: expenses, searchText: "" };
  }

  addNewExpense = expense => {
    console.log(expense.name,"--------------name");
    const addExpense = { expense: expense };
    if(expense.name !== '' && expense.amount !== '' && expense.personList !== ''){
    this.state.expenses.push(addExpense);
    this.setState({ expenses: this.state.expenses });
    }
  };

  settleUpExpense = expense => {
    const addExpense = { expense: expense };
   // if(expense.name !== '' && expense.amount !== '' && expense.personList !== ''){
    //this.state.expenses.push(addExpense);
    console.log(addExpense,"-----------add");
    console.log(expense,"--------expense")
    this.setState({ expenses: [] });
   // }
  };
  render() {
    const expensesList = this.state.expenses;
    return (
      <div>
        <ExpenseForm onAdd={this.addNewExpense} />
        {/* <FilterType onFilter={this.handleFilterType} /> */}
        <ExpenseTable expenses={expensesList} />
        <SettleUp expenses={expensesList} onSettle={this.settleUpExpense}/>
      </div>
    );
  }
}

const expenses = [
];
export default Expense;
