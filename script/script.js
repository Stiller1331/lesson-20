const car = {
  model: 'bmw',
  year: 2015,
  color: 'grin',
  signal (){
    alert('fa fa');
  },
}
car.color = 'black';
car.type = 'electric';
car.signal();
console.log(car);

const salaries = {
  fronted: 12000,
  backend: 10000,
  designer: 8000,

  dayPay() {
      alert('We must pay salary on Tuesday!');
  },
  total () {
    let sum = 0;
    for(key in salaries )
      if (typeof salaries[key] === 'number') {
        sum += salaries[key];
        ;
      };
      console.log(sum);
    }
  }
salaries.total();
salaries.manager = 5000;
salaries.total();

function opSystem(brand, system, cost){
  this.brand = brand;
  this.system = system;
  this.cost = cost;
  this[Symbol.toPrimitive] = function (hint){
    switch(hint){
        case 'string':
            return this.brand
        case 'number':
            return this.cost
        case 'default':
            return this.brand + ' ' + this.system + ' ' + this.cost + ' // '
    }
};
}
const dell = new opSystem('Dell', 'windows', 800);
const apple = new opSystem('Apple', 'MAC OS', 1700);
let group = {};
group = dell + apple;
console.log(String(dell));
console.log(+apple);
console.log(group);
