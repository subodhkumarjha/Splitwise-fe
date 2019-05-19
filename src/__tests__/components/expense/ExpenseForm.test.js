import {shallow} from "enzyme/build";
import React from "react";
import ExpenseForm from "../../../components/Expense/ExpenseForm";

describe('ExpenseForm', () => {
    describe("render", () => {
        it("renders without crashing", () => {
            shallow(<ExpenseForm/>);
        });
    });

    it("check the input type of the name", () => {
        const expenseElement = shallow(<ExpenseForm/>);
        const firstExpense = expenseElement.find('label');

        expect(firstExpense.find('#name-id').type()).toContain("input")
    });

    it("should check the type of input of phoneNumber", () => {
        const expenseElement = shallow(<ExpenseForm/>);
        const firstExpense = expenseElement.find('label');

        expect(firstExpense.find('#number-id').props().type).toContain("string")
    });

    it("should check the type of input of name", () => {
        const expenseElement = shallow(<ExpenseForm/>);
        const firstExpense = expenseElement.find('label');

        expect(firstExpense.find('#name-id').props().type).toContain("text")
    });

    it("should set the name John when nameChange Handler is mocked", async () => {
        ExpenseForm.nameChangeHandler = jest.fn();
        const expenseFormElement = shallow(<ExpenseForm/>);

        expenseFormElement.find('#name-id').simulate('change', {target: {value: 'John'}});
        expect(expenseFormElement.state().expenseModel.name).toEqual("John");
    });

    it("should set the amount 122345 when numberChange Handler is mocked", async () => {
        ExpenseForm.numberChangeHandler = jest.fn();
        const expenseFormElement = shallow(<ExpenseForm/>);

        expenseFormElement.find('#number-id').simulate('change', {target: {value: '122345'}});

        expect(expenseFormElement.state().expenseModel.amount).toEqual("122345");
    });

    it("should set the person list 'a' when typeChange Handler is mocked", async () => {
        ExpenseForm.typeChangeHandler = jest.fn();
        const expenseFormElement = shallow(<ExpenseForm/>);

        expenseFormElement.find('#type-id').simulate('change', {target: {value: 'a'}});

        expect(expenseFormElement.state().expenseModel.personList).toEqual("a");
    });

    it("should check the function call for submit", async () => {
        const onClickHandler = jest.fn();
        const expenseFormElement = shallow(<ExpenseForm onAdd={onClickHandler}/>);

        expenseFormElement.find('#submit-id').simulate('click');

        expect(onClickHandler).toHaveBeenCalled();
    });
});

