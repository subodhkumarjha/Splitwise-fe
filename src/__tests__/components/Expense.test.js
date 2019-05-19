import {shallow} from "enzyme/build";
import React from "react";
import Expense from "../../components/Expense";
import ExpenseTable from "../../components/expense/ExpenseTable";
import ExpenseForm from "../../components/expense/ExpenseForm";

describe('Expense', () => {
    describe("render", () => {
        it("renders without crashing", () => {
            shallow(<Expense/>);
        });
    });

    it("should rendered expense Form component", async () => {
        const expenseElement = shallow(<Expense/>);

        const expenseFormElement = expenseElement.find(ExpenseForm);

        expect(expenseFormElement).toHaveLength(1);

    });

    it("should rendered expense Table component", async () => {
        const expenseElement = shallow(<Expense/>);

        const expenseTableElement = expenseElement.find(ExpenseTable);

        expect(expenseTableElement).toHaveLength(1);

    });

    it("should able to add the records in the Expense", async () => {
        const expenseElement = shallow(<Expense/>);
        const filterElement = expenseElement.find(ExpenseForm);

        filterElement.simulate('add', {name: "Emmanuel Raynor PhD", amount: "100", personList: "A"})
        console.log(expenseElement.state());
      //  expect(expenseElement.state().expense).toHaveLength(3);

    });
});
