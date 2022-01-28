function getEmployee(id) {
  return {
    name: "Ahmed",
    age: 35,
    address: "123 St",
    country: "Nigeria",
  };
}

const { name: fullName, age } = getEmployee(12);
console.log("Employee ", fullName, age);

function getEmployeeWorkInfo(id) {
  return [id, "Office St", "United State"];
}

const [id, officeAddr] = getEmployeeWorkInfo(1);
console.log("employee work info", id, officeAddr);
