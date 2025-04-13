//^^ PROJECT N01  
//! create a class Items for create items
class Items {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

//! create two instances from Items Class
let sword = new Items("sword", 1000);
let potion = new Items("potion", 700);

//! create box array like a store havve all items
let box = [sword, potion];

//! create a character class
class Character {
  //! create a static array
  static array = [];
  constructor(name, bag, money) {
    this.name = name;
    this.bag = bag;
    this.money = money;
    Character.array.push(this);
  }
  //! showAll method for check if the username exist or not
  static showAll(x) {
    let findIndex = Character.array.findIndex((e) => e.name == x.toLowerCase());
    if (findIndex != -1) {
      return true;
    } else {
      return false;
    }
  }
  //! take method for take item from the store (box)
  take(x) {
    //! for take the index of item(x)
    let existingItem = box.findIndex((e) => e.name == x.toLowerCase());
    //! if the item exist in the store(box)
    if (existingItem != -1) {
      alert(`the ${x} item existing in the store`);
      //! if the user have enough money
      if (this.money >= box[existingItem].price) {
        this.bag.push(box[existingItem]);
        this.money -= box[existingItem].price;
        box.splice(existingItem, 1);
        alert("Congratulation you take the item !");
      } else {
        alert("you don't enough money for take the item !");
      }
    } else {
      alert(`the ${x} item don't exist in the store`);
    }
  }
  //! buy method for buy item from another character
  buy(seller, x) {
    //! for take the item index
    let sellerItem = seller.bag.findIndex((e) => e.name == x.toLowerCase());
    //! if the item exist
    if (sellerItem != -1) {
      alert(`the seller have the item his store`);
      //! if the buyer have enough mony
      if (this.money >= seller.bag[sellerItem].price) {
        this.bag.push(seller.bag[sellerItem]);
        seller.money += seller.bag[sellerItem].price;
        this.money -= seller.bag[sellerItem].price;
        seller.bag.splice(sellerItem, 1);
        alert("Congratulation the transaction has been successfull !");
      } else {
        alert("you dont have enough money to take this item");
      }
    } else {
      alert("seller dont have this item in his store");
    }
  }
}

//! create two character
let hassan = new Character("hassan", [], 5000);
let yahya = new Character("yahya", [], 5000);

//! make yahya take item for test buy() method
yahya.take("sword");
console.log(yahya.money);

let ask = prompt("Enter your name : ");
while (!ask) {
  ask = prompt("Please Enter your name : ");
}

//! check if the username exist by using showAll() method
if (Character.showAll(ask) == true) {
  let askTakeOrBuy = prompt(
    'You want take from the store or buy from a seller , answer by "buy" Or "take" : '
  );
  // for take the index of the user
  let findIndex = Character.array.findIndex((e) => e.name == ask.toLowerCase());
  while (!askTakeOrBuy) {
    askTakeOrBuy = prompt('Please try again answer by "buy" Or "take" : ');
  }
  //! if the user want to take item from the store (box)
  if (askTakeOrBuy.toLowerCase() == "take") {
    let itemSelect = prompt("Enter the name of item you want to take : ");
    while (!itemSelect) {
      itemSelect = prompt("Please Enter the name of item you want to take : ");
    }
    Character.array[findIndex].take(itemSelect);
  }
  //! if the user want to buy from another user
  else if (askTakeOrBuy.toLowerCase() == "buy") {
    let sellerName = prompt(
      "Enter the name of seller you want to get the item form it : "
    );
    // if the seller name exist
    if (Character.showAll(sellerName) == true) {
      alert("this seller is exist !");
      let itemName = prompt("enter teh item name you want to buy : ");
      // for take the index of the seller in the array[]
      let findIndexSeller = Character.array.findIndex(
        (e) => e.name == sellerName.toLowerCase()
      );
      Character.array[findIndex].buy(
        Character.array[findIndexSeller],
        itemName.toLowerCase()
      );
    } else {
      alert("this seller is not exist !");
    }
  }
} else {
  alert("Sorry this username dont exist");
}

console.log(yahya.bag, hassan.bag, yahya.money, hassan.money);

// ! thank you for your time
