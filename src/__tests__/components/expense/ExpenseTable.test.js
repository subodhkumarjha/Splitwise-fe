import {shallow} from "enzyme";
import React from "react";
import ExpenseTable from "../../../components/expense/ExpenseTable";
import ExpenseRow from "../../../components/expense/ExpenseRow";
import ExpenseModel from "../../../components/expense/ExpenseModel";

describe('ExpenseTable', () => {
    describe("render", () => {
        it("renders without crashing", () => {
            shallow(<ExpenseTable expenses={[]}/>);
        });
    });

    it("header test for expense", async () => {
        const expenseElement = shallow(<ExpenseTable expenses={[]}/>);
        const tableHeaderElement = expenseElement.find("th");

        expect(tableHeaderElement).toHaveLength(3);
    });

    it("should have one table body", () => {
        const expenses = shallow(<ExpenseTable expenses={[]}/>);
        const tableBody = expenses.find("tbody");

        expect(tableBody).toHaveLength(1);
    });

    it("should display one expense", async () => {
        const expenseElement = shallow(<ExpenseTable expenses={expenses}/>);
        const firstExpense = expenseElement.find(ExpenseRow).first().props().expenses.expense;

        expect(firstExpense.name).toContain("Emmanuel Raynor PhD");
        expect(firstExpense.amount).toContain("2323");
        expect(firstExpense.personList).toContain("A");
    });

    it("should display second expense", async () => {
        const expenseElement = shallow(<ExpenseTable expenses={expenses}/>);
        const firstExpense = expenseElement.find(ExpenseRow).at(1).props().expenses.expense;

        expect(firstExpense.name).toContain("Rickey Dietrich MD");
        expect(firstExpense.amount).toContain("100");
        expect(firstExpense.personList).toContain("B");
    });

});
const expenses = [{
    expense: new ExpenseModel("Emmanuel Raynor PhD", "2323", "A")
},
    {
        expense: new ExpenseModel("Rickey Dietrich MD", "100", "B")

    }];
