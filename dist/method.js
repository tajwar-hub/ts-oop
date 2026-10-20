"use strict";
/**
 * name
 * email
 * age
 * marks
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    email;
    age;
    marks;
    //constructor ---> special method
    constructor(name, email, age, marks) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.marks = marks;
    }
    getInfo() {
        const info = `Name: ${this.name}\nEmail: ${this.email}`;
        return info;
    }
}
//instantiate
//instance
// const rafi = new Student("Rafi", "rafi@gmail.com", 16, 100)
// const sadia = new Student("Sadia", "sadia@gmail.com", 17, 200)
// console.log(sadia)
/**
 * title
 * soldItems
 */
class ChaShop {
    title;
    soldItems = [];
    constructor(title) {
        this.title = title;
    }
    buy(name, price) {
        this.soldItems.push({ name, price });
    }
    totalSold() {
        const total = this.soldItems.reduce((acc, item) => acc + item.price, 0);
        return total;
    }
}
const shop1 = new ChaShop("Tea Shop");
shop1.buy("Tea", 10);
shop1.buy("Cake", 15);
console.log(shop1.totalSold());
//# sourceMappingURL=method.js.map