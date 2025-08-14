// 1 Homework

let university = {
  name: "Tbilisi State University",
  departments: 12,
  website: "www.tsu.ge",
  ratings: {
    student1: 4.5,
    student2: 4.0,
    student3: 4.8
  }
};


console.log(Object.entries(university));
console.log("scholarship" in university);

let updatedUniversity = { ...university, studentsCount: 18000 };

Object.freeze(updatedUniversity);
updatedUniversity.name = "Iliauni"; 

console.log(Object.isFrozen(updatedUniversity));

// 2 Homework

let sportsClub = {
  clubName: "Dinamo Tbilisi",
  sportType: "Football",
  foundedYear: 1925,
  achievements: {
    title1: "Georgian Cup 2020",
    title2: "National League 2021",
    title3: "Super Cup 2022"
  }
};

console.log(Object.keys(sportsClub));
console.log(Object.values(sportsClub));
console.log("sponsors" in sportsClub);

let updatedClub = { ...sportsClub, stadiumCapacity: 55000 };

Object.freeze(updatedClub);
updatedClub.foundedYear = 2000; 

console.log(Object.isFrozen(updatedClub));

// 3 Homework

let hotel = {
  hotelName: "Hotel Rustaveli",
  stars: 4,
  location: "Tbilisi",
  guestReviews: {
    guest1: "Amazing!",
    guest2: "Clean and cozy",
    guest3: "Would visit again"
  }
};

console.log(Object.entries(hotel));
console.log("spa" in hotel);

let updatedHotel = { ...hotel, roomsCount: 120 };

Object.freeze(updatedHotel);
updatedHotel.stars = 5; 

console.log(Object.isFrozen(updatedHotel));

// 4 Homework

const cinema = {
  cinemaName: "Amirani Cinema",
  moviesCount: 7,
  location: "Tbilisi",
  movieReviews: {
    user1: "Great sound quality",
    user2: "Comfortable seats",
    user3: "Nice atmosphere"
  }
};

console.log(Object.entries(cinema));
console.log("vipSeats" in cinema);

const updatedCinema = { ...cinema, ticketPrice: 12.5 };

Object.freeze(updatedCinema);
updatedCinema.moviesCount = 10; 

console.log(Object.isFrozen(updatedCinema));