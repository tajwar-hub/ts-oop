"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentName = "Rafi";
const studentAge = 16;
const studentEmail = "rafi@gmail.com";
const studentName2 = "Sadia";
const studentAge2 = 17;
const studentEmail2 = "sadia@gmail.com";
const createStudent = (name, age, email, marks) => {
    const obj = {
        name,
        age,
        email,
        marks,
        forgatePass() {
            ///100 line
        },
    };
    return obj;
};
const rafi = createStudent("Rafi", 16, "rafi@gmail.com", 100);
const sadia = createStudent("Sadia", 17, "sadia@gmail.com", 200);
rafi.marks = 0;
console.log(rafi, sadia);
// const rafi = {
//     name: "Rafi",
//     age: 16,
//     email: "rafi@gmail.com",
// }
//# sourceMappingURL=object.js.map