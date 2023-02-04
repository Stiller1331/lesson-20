
let a = prompt('Введіть перше число',0);
let b = prompt('Введіть друге число',0);
function maxNumber(a,b){
  if (a > b){
    return a ;
  } else if (a === b){
    return "a = b";
  } else {
    return b;
  }
}
alert (maxNumber(a,b));

let number = prompt('Enter the number',0);
function revers(number) {
  if (number) {
  -number;
  return -number;}
  else{
    return -number;
  }
}
alert (revers(number));

let number1 = prompt('Enter the number',0);
let count = prompt('Enter the number of times',0);
function three(number1,count) {
if (number1){
  number1 = number1 + (3*count);
  return number1;}
  else{
    return number1;
  }
}
alert (three(+number1,+count));



let metric = prompt('Enter metric');
let km = prompt ('Enter how many km',0);
let m;
let cm;
function getMatric(metric, km, m, cm){
 let convert = metric === 'm' ? m(km) : cm(km);
 return convert;
}
alert(`${getMatric(metric, km, KmToM, KmToCm)} ${metric}`);
getMatric(metric, km, KmToM, KmToCm);

function KmToM (km) {
  m = km * 1000;
    return m;
}
function KmToCm (km) {
  cm = km * 100000;
    return cm;
  }
  


