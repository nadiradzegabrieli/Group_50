function validateInputs() {
    const val1 = document.getElementById("input1").value.trim();
    const val2 = document.getElementById("input2").value.trim();

    if (val1 === "" || val2 === "" || val1 !== val2) {
      console.log("The values should be equal and not blank");
    } else {
      console.log("The operation was successful");
    }
  }