const musers = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true },
];
// Для каждого элемента коллекции (user) вернем значение поля name
const names = musers.map((muser) => muser.name);

console.log(names); // ["Mango", "Poly", "Ajax"]
