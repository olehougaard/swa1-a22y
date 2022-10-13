class Person {
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }
    get getName() { return this._name }

    get getAge() { return this._age }

    set setName(name: string) {
        this._name = name
    }
}

class Company {
    private _name: string
    private _address: string
    private employees: Person[]

    constructor(name: string, address: string) {
        this._name = name
        this._address = address
        this.employees = []
    }

    get getName() { return this._name}

    get getAddress() { return this._address}

    addEmployee(employee: Person) { this.employees.push(employee) }

    removeEmployee(employee: Person) {
        const index = this.employees.indexOf(employee)
        this.employees.splice(index, 1)
    }

    getEmployees() { return [...this.employees] }
}
