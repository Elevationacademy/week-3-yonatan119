//  class animal {
//     constructor(name) {
//         this.name = name
//         this.isparaplegic = true
//     }
//     children = []
//     givebirth(name) {
//         this.children.push(name)
//     }
//  }
//  const dog = new animal("laki")
//  console.log(dog)

// class human {
//     constructor(name,age,isFriendly) {
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly
//     }
// }
// const patrick = new human("patrick", 18, true)
// console.log(patrick)

// class Vehicle {
//     constructor(x, y, speed, fuel) {
//         this.x = x
//         this.y = y
//         this.speed = speed;
//         this._fuel = fuel
//         Vehicle.carsSold++
//     };

//     static getInfo() {
//         console.log(Vehicle.carsSold)
//     }
//     static calculateMoney() {
//         console.log(30000 * Vehicle.carsSold)
//     }
//     get fuel() {
//         return this._fuel
//     }
//     set fuel(amount) {
//         if (amount < 0) {
//             console.log("fuel has to be between 0-150")
//         }else {
//         this._fuel = amount
//     }}
// }
// Vehicle.carsSold = 0
// const car = new Vehicle(5, 4, 100)
// const car1 = new Vehicle(5, 4, 100)
// const car2 = new Vehicle(1, 1, 1, -8)
// Vehicle.getInfo()
// Vehicle.calculateMoney()
// console.log(car2)