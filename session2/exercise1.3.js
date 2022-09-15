function createPerson(name, age) {
    const getName = () => name
    const setName = (_name) => {
        name = _name
    }
    const getAge = () => age
    const setAge = (_age) => {
        age = _age
    }
    const toString = () => `name: ${name}, age: ${age}`
    const equals = (p) => p.getName() === name && p.getAge() === age
    return { getName, setName, getAge, setAge, toString, equals }
}

function createEmployee(name, age, salary) {
    const person = createPerson(name, age)
    const getSalary = () => salary
    const setSalary = (_salary) => {
        salary = _salary
    }
    const toString = () => person.toString() + `, salary: ${salary}`
    const equals = (e) => person.equals(e) && salary === e.getSalary()
    return { ...person, getSalary, setSalary, toString, equals }
}
