var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, cpr, address, birthday) {
        this.name = name;
        this.cpr = cpr;
        this.address = address;
        this.birthday = birthday;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getCpr = function () {
        return this.cpr;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getBirthday = function () {
        return this.birthday;
    };
    Person.prototype.getCprGender = function () {
        var lastDigit = parseInt(this.cpr.charAt(this.cpr.length - 1));
        if (lastDigit % 2 == 0)
            return "Female";
        else
            return "Male";
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, cpr, address, birthday, salary) {
        var _this = _super.call(this, name, cpr, address, birthday) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.giveRaise = function (raise) {
        this.salary += raise;
    };
    return Employee;
}(Person));
var e = new Employee("", "", "", new Date(), 0);
function pay(receiver) {
}
pay(e);
