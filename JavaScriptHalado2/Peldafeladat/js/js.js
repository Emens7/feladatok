'use strict';

const isSuspened = (suspendTimeInHours, whenSuspened) => {
    if(!whenSuspened) {
        return false;
    }

    const now = new Date();
    const elapsedTimeInHours = (now.getTime() - whenSuspened.getTime()) / 1000 / 60 /60;

    return !(elapsedTimeInHours > suspendTimeInHours);
}

console.log(isSuspened(12));

console.log(isSuspened(12, new Date('2020-11-29T14:15:15')));

console.log(isSuspened(12, new Date('2020-11-22T14:15:15')));


/*1.Írj egy függvényt, aminek a visszatérési értéke az adott év 01.01. óta eltelt másodperceinek s száma!

const date = (year) => {
    const data1 = Date.UTC(year, 0, 1);
    return data1;
}

console.log(date(2009));

/*2. Írj egy függvényt, aminek a visszatérési értéke az adott évben eddig eltelt munkanapok (hétfő-péntek) száma! */




const daysPassed = (dt) => {
    let current = new Date(dt.getTime());
    let previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((((current - previous + 1) / 86400000) / 7 ) * 5);
  }
  console.log(daysPassed(new Date(2020, 0, 1)));
  console.log(`Hétköznapok száma: ${daysPassed(new Date())} nap`);

  document.querySelector('.workday').innerHTML = daysPassed(new Date())


/*3. Írj egy függvényt, ami paraméterként egy Date objektumot kap, a visszatérési értéke pedig egy objektum két tulajdonsággal, 
ami a következő formátumban tartalmazza a paraméterként kapott dátumot:

short: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
long: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő) */

//const date= new Date(2020, 0, 11, 14, 20, 10);



const dataTime = (date) => {

     const short = `${date.getFullYear()} ${date.toLocaleDateString('hu-hu', {month: 'short'})} ${date.toLocaleTimeString('hu-hu')}`;

     const long = `${date.getFullYear()} ${date.toLocaleDateString('hu-hu', {month: 'long'})} ${date.toLocaleTimeString('hu-hu')}`;

     const dateobj =  {
         short: short,
         long: long
     };

     return dateobj;
   
}

console.log(dataTime(new Date(2020, 0, 11, 14, 20, 10)));