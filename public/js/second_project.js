//? Bus challenge
//! Create Class Places
class Places {
  static array = [];
  constructor(name, people) {
    this.name = name;
    this.people = people;
    //! push all places in this array
    Places.array.push(this);
  }
  //! Method for check if the place exist
  static showAll(place) {
    let findPlace = Places.array.findIndex((e) => e.name == place);
    if (findPlace != -1) {
      return true;
    } else {
      return false;
    }
  }
}

//! create instances of [Place]: LionsGeek, Snack, and Home.
let lionsgeek = new Places("lionsgeek", []);
let snack = new Places("snack", []);
let home = new Places("home", []);  
//! Create class Person
class Person {
  static array = [];
  constructor(name, firstName, money) {
    this.name = name;
    this.firstName = firstName;
    this.money = money;
    //! push al persons in this array
    Person.array.push(this);
  }
  //! check if the person is exist
  static showAll(person) {
    let findPerson = Person.array.findIndex((e) => e.firstName == person);
    if (findPerson != -1) {
      return true;
    } else {
      return false;
    }
  }
  //! move persons from place to another
  move(place1, places, bus) {
    if (bus != null) {
      //! check if the person have enough money
      if (bus.board(this) != false) {
        bus.board(this);
        places.people.push(this);
        place1.people.splice(this);
      } else {
        alert("you dont have enough money !");
      }
    }
    //! if we dont have bus in to this place
    else {
      places.people.push(this);
      place1.people.splice(this);
    }
  }
}

//! create an instance of Person.
let yahya = new Person("yahya Mws", "yahya", 1500);
let hassan = new Person("hassan morabit", "hassan", 0);
let zakaria = new Person("zakaria soussi", "zakaria", 0);

//! Create a class Bus
class Bus {
  constructor(people, money) {
    this.people = people;
    this.money = money;
  }
  //! Board method for check if the person have eenough money ,
  //! remember we use this method in move method of person class
  board(person) {
    if (person.money >= 2.8) {
      bus1.people.push(person);
      person.money -= 2.8;
      this.money += 2.8;
    } else {
      return false;
    }
  } 
}

//! Create an instance of the Bus.
let bus1 = new Bus([], 0);
//! Enter the name of Person
let personName = prompt("Enter you name : ").toLowerCase();
//! check if this person is exist
while (!personName || Person.showAll(personName) == false) {
  personName = prompt(
    "this user not exist Please Enter existing username : "
  ).toLowerCase();
}
//! find the index of that user in person class static array
let findPerson = Person.array.findIndex((e) => e.firstName == personName);

//! make the person enter her location
let nowPlace = prompt("Enter your place  : ").toLowerCase();
//! check if that location is exist
while (!nowPlace || Places.showAll(nowPlace) == false) {
  nowPlace = prompt("Place enter a exist place : ").toLowerCase();
}
//! find the index of that user location in place static array
let findNowPlaceIndex = Places.array.findIndex((e) => e.name == nowPlace);
//! push this person to the people array of this location
Places.array[findNowPlaceIndex].people.push(Person.array[findPerson]);

//! make the person enter the place he want to go
let leavePlace = prompt(
  "Enter the name of the place you want to go  : "
).toLowerCase();
//! check if that location is exist
while (!leavePlace || Places.showAll(leavePlace) == false) {
  leavePlace = prompt("Place enter a exist place : ").toLowerCase();
}
//! find the index of that Place in place static array
let findleavePlaceIndex = Places.array.findIndex((e) => e.name == leavePlace);

//! test all methods and tasks
Person.array[findPerson].move(
  Places.array[findNowPlaceIndex],
  Places.array[findleavePlaceIndex],
  bus1
);
//! log person money after moving her place
console.log(Person.array[findPerson].money);
//! log people array of place after moving the person moving her place
console.log(Places.array[findNowPlaceIndex].people);
//! log people array of place after moving the person moving her place
console.log(Places.array[findleavePlaceIndex].people);
//! log bus people array and bus meney
console.log(bus1.people, bus1.money);
