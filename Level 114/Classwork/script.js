class PersianGuineaPig {
  constructor(color, size, birthYear, birthMonth, birthDay) {
    this.color = color;
    this.size = size;
    this.birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  }

  getAge() {
    const today = new Date();
    let years = today.getFullYear() - this.birthDate.getFullYear();
    let months = today.getMonth() - this.birthDate.getMonth();
    let days = today.getDate() - this.birthDate.getDate();


    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    return `${years} წლის, ${months} თვის და ${days} დღის`;
  }
}


const myGuineaPig = new PersianGuineaPig("თეთრი", "პატარა", 2020, 4, 15);
console.log(myGuineaPig.getAge());