class Employee {
  #id;
  #monthSalary;

  constructor(id, firstName, lastName, monthSalary) {
    this.#id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.monthSalary = monthSalary; // uses setter
  }

  // FullName getter/setter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const [first, last] = value.split(" ").filter(Boolean);
    if (first && last) {
      this.firstName = first;
      this.lastName = last;
    }
  }

  // Salary
  get monthSalary() {
    return this.#monthSalary;
  }

  set monthSalary(value) {
    if (value > 0) {
      this.#monthSalary = value;
    }
  }

  // Year salary
  get yearSalary() {
    return this.monthSalary * 12;
  }

  // ID getter only
  get id() {
    return this.#id;
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, monthSalary, department) {
    super(id, firstName, lastName, monthSalary);
    this.department = department;
  }

  // Change department and salary (validator)
  set changeDepartment([newDepartment, newSalary]) {
    if (
      typeof newDepartment === "string" &&
      typeof newSalary === "number" &&
      newSalary > this.monthSalary
    ) {
      this.department = newDepartment;
      this.monthSalary = newSalary;
    }
  }

  // Overridden yearSalary with bonus (20%)
  get yearSalary() {
    return this.monthSalary * 12 * 1.2;
  }

  // Info method
  info() {
    return `👔 ${this.fullName} | ID: ${this.id} | Dept: ${this.department} | Monthly: ${this.monthSalary} | Annual: ${this.yearSalary.toFixed(2)}`;
  }
}