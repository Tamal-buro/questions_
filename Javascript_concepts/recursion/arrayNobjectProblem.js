// Example 4: Recursive traversal from Array or Objects 

let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSalary(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0)
    } else {
        let sum = 0
        for (let subDep of Object.values(department)) {
            sum += sumSalary(subDep)
        }
        return sum
    }
}
// console.log(sumSalary(company))
