function calculateLove() {
      if (name1 === '' || name2 === '') {
        alert('გთხოვთ შეიყვანოთ ორივე სახელი.');
        return;
      }

      let percentage = Math.floor(Math.random() * 101); // 0-100%
      alert(`${name1} და ${name2}, თქვენი სიყვარულის პროცენტია ${percentage}%`);
    }
