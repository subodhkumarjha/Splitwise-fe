import ExpenseRow from "../../../components/expense/ExpenseRow";
import {shallow} from "enzyme";
import React from "react";

describe('ExpenseRow', () => {
    it('should render without crashing', () => {
        const expense = {expense :{}};
        const expenseRowElement = shallow(<ExpenseRow expenses ={expense}/>)

        expect(expenseRowElement.find('tr')).toHaveLength(1);
        expect(expenseRowElement.find('tr').childAt(0).text()).toContain("");
        expect(expenseRowElement.find('tr').childAt(1).text()).toContain("");
        expect(expenseRowElement.find('tr').childAt(2).text()).toContain("");
    });

    it('should display name as john when expense details given', () => {
        const expense = {expense :{name :"John"}};
        const expenseRowElement = shallow(<ExpenseRow expenses ={expense}/>)

        expect(expenseRowElement.find('tr').childAt(0).text()).toContain("John");
        expect(expenseRowElement.find('tr').childAt(1).text()).toContain("");
        expect(expenseRowElement.find('tr').childAt(2).text()).toContain("");
    });

    it('should display name as john phoneNumber and type as Home when expense details given', () => {
        const expense = {expense :{name :"John" , amount : "21237" , personList : "Home"}};
        const expenseRowElement = shallow(<ExpenseRow expenses ={expense}/>)

        console.log(expenseRowElement.find('tr'));
        expect(expenseRowElement.find('tr').childAt(0).text()).toContain("John");
        expect(expenseRowElement.find('tr').childAt(1).text()).toContain("21237");
        expect(expenseRowElement.find('tr').childAt(2).text()).toContain("Home");
    });
});
