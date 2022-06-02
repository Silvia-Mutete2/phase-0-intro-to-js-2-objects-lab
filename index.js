// Write your solution in this file!


const employee = {
    name: 'Sam'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee['streetAddress'] = '11 Broadway'

    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(Employee, key, value) {
    const streetAddress = 'delete employee.name'
    employee['streetAddress'] = '12 Broadway'

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {newEmployee}
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, Key) {
    delete employee.name
    return employee
}