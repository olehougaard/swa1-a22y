type Person = {
  readonly name: string
  readonly age: number
}

const createPerson = (name: string, age: number) => ({name, age})
const setAge = (p: Person, age: number): Person => createPerson(p.name, age)

type Company = {
  readonly name: string
  readonly address: string
  readonly employees: ReadonlyArray<Person>
}

const createCompany = (name: string, address: string, employees: Person[] = []) => ({name, address, employees})
const addEmployee = (company: Company, employee: Person) => createCompany(company.name, company.address, [...company.employees, employee])
