let now = new Date();
let year = now.getFullYear();
let month = String(now.getMonth()+1).padStart(2, '0');
let day = String(now.getDay()+1).padStart(2, '0');
let hour = String(now.getHours()+1).padStart(2, '0');
let minute = String(now.getMinutes()+1).padStart(2, '0');

console.log(`${year}-${month}-${day} ${hour}:${minute}`);