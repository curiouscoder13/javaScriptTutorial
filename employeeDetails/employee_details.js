const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000,
    specialization: "Javascript",
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 28,
    department: "HR",
    salary: 45000,
    specialization: "Python",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    department: "Finance",
    salary: 60000,
    specialization: "Java",
  },
  //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
  const totalEmployees = employees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`
    )
    .join("");

  document.getElementById("employeeDetails").innerHTML = totalEmployees;
}

// Function to calculate total salaries of all employees
function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display HR employees
function displayHREmployees() {
  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  );
  const hrEmployeeDisplay = hrEmployees.map(
    (employee, index) =>
      `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`
  );
  document.getElementById("employeeDetails").innerHTML = hrEmployeeDisplay;
}

// Function to find employee by ID
function findEmployeeByID(employeeID) {
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeID
  );
  if (foundEmployee) {
    document.getElementById(
      "employeeDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
  } else {
    document.getElementById("employeeDetails").innerHTML =
      "No employee has been found with this ID";
  }
}

// Function to find employee by specialization
function findEmployeeBySpecialization(employeeSpecialization) {
  const foundEmployee = employees.find(
    (employee) => employee.specialization === employeeSpecialization
  );
  if (foundEmployee) {
    document.getElementById(
      "employeeDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
  } else {
    document.getElementById("employeeDetails").innerHTML =
      "No employee has been found with this specialization";
  }
}
