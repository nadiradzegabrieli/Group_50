let Myself = {
    intelligence: "მაღალი",
    creativity: "ინოვაციური",
    supportiveness: "ყურადღებიანი",
    charisma: "მიმზიდველი",
    adaptability: "მოქნილი",
    precision: "ზუსტი",
    
    introduce: function() {
        return `I am Gabriel, ${this.charisma} And ${this.intelligence} Person, Who ${this.creativity} and ${this.supportiveness}. My ${this.adaptability} Is Giving me  ${this.precision}`;
    }
};

// მეთოდის გამოძახება
console.log(Myself.introduce());

