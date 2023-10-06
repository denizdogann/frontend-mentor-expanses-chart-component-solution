const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
const spent= []
const days = document.getElementsByClassName("day");
console.log(days);
let total = 0;

for (let day of data){
    total = total + day["amount"];
    spent.push(day["amount"]);
    
}
const max = spent.reduce((a, b) => Math.max(a, b), -Infinity);
const i = spent.indexOf(max);


for (let i of data){
  let x = Math.floor((i["amount"] * 600 ) / total)
  document.getElementById(i["day"]).style.height= x +"px";
  document.getElementById(i["day"]).setAttribute("data-tooltip","$"+i["amount"] );
}

document.getElementById(data[i].day).style.background = "var(--cyan)"