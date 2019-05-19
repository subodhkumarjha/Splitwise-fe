
class ExpenseModel {

    constructor(name="", amount="",personList="") {
        this._name = name;
        this._amount = amount;
        this._personList = personList;
    }

    get name() {
        return this._name;
    }

    get amount() {
        return this._amount;
    }

    get personList() {
        return this._personList;
    }
}

export default ExpenseModel;
