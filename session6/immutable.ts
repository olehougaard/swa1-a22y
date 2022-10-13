class Person {
    readonly name: string
    readonly age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    setAge(age: number): Person {
        return new Person(this.name, age)
    }
}

class Company {
    readonly name: string
    readonly address: string
    readonly employees: ReadonlyArray<Person>

    constructor(name: string, address: string, employees: Person[] = []) {
        this.name = name
        this.address = address
        this.employees = employees
    }

    addEmployee(employee: Person) { 
        return new Company(this.name, this.address, [...this.employees, employee])
    }

    removeEmployee(employee: Person) {
        return new Company(this.name, this.address, this.employees.filter(p => p.name !== employee.name))
    }
}
