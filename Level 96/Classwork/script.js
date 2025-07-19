function Person(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }

    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault();


      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const email = document.getElementById("email").value;


      const newPerson = new Person(name, age, email);


      const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();

      const nameCell = newRow.insertCell(0);
      const ageCell = newRow.insertCell(1);
      const emailCell = newRow.insertCell(2);

      nameCell.textContent = newPerson.name;
      ageCell.textContent = newPerson.age;
      emailCell.textContent = newPerson.email;
      document.getElementById("registrationForm").reset();
    });