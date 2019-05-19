import ExpenseModel from "../../../components/Expense/ExpenseModel";

describe("ExpenseModel", () => {
    it("should able to call expense api", async () => {
        const expenseModel = new ExpenseModel("John","21345","A");

        expect(expenseModel.name).toContain("John");
    });

    it("should able to call expense api and get the amount", async () => {
        const expenseModel = new ExpenseModel("John","21345","Home");

        expect(expenseModel.amount).toContain("21345");
    });

    it("should able to call expense api and get the person List", async () => {
        const expenseModel = new ExpenseModel("John","21345","A");

        expect(expenseModel.personList).toContain("A");
    });
});
