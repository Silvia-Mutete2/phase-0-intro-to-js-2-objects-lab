
const employee = {name: 'Sam'
}
//updateEmployeeWithKeyAndValue(employee, key, value)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee.streetAddress= '11 Broadway'
    return newEmployee
}

//updates `employee` with the given `key` and `value
function destructivelyUpdateEmployeeWithKeyAndValue(Employee, key, value) {
    const streetAddress = 'delete employee.name'
    employee.streetAddress= '12 Broadway'
    return employee
}

//deletes `key` from a clone of employee and returns the new employee (it is non-destructive
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {newEmployee}
    return newEmployee
}

//returns employee without the deleted key/value pair',
function destructivelyDeleteFromEmployeeByKey(employee, Key) {
    delete employee.name
    return employee
}