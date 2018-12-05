const personOne = {
  name: "Rey",
  age: 30,
  hungry: true,
  greet: function() {
    console.log("Hi! I am " + this.name);
  },
  eatFood: function(food) {
    console.log(`I am hungry, ${food} time`);
  }
};

//personOne.greet();
//personOne.eatFood("apple");

/*==================== Practice 1 =================*/

const trip = {
  location: "New York City",
  travelPartners: ["Mum", "Dad", "Sis"],
  numDays: 14,
  places: ["Time Square", "Brooklyn Botanical Gardens", "Central Park"]
};

function showTrip(data) {
  document.getElementById("places").innerHTML = `<p>My Dream Trip: ${
    data.location
  } <br/>with my ${data.travelPartners}.</p>`;
  document.getElementById("visit").innerHTML = `<p>${
    data.places.length
  } Places to Visit: <br/> ${data.places}</p>`;
}

showTrip(trip);

/*==================== Practice 2 =================*/

let library = [
  {
    title: "Harry Potter",
    author: "Justin Bieber",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "JK Rowling",
    alreadyRead: false
  },
  {
    title: "The Beast",
    author: "Edward Brian",
    alreadyRead: true
  }
];

for (let i = 0; i < library.length; i++) {
  console.log(`${library[i].title} by ${library[i].author}`);
  if (library[i].alreadyRead == true) {
    console.log(`You have read ${library[i].title} by ${library[i].author}`);
  } else {
    console.log(
      `You still need read ${library[i].title} by ${library[i].author}`
    );
  }
}
