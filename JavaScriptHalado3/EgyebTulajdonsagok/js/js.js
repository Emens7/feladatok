/*1. Írj egy függvény kifejezést, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket!
 A függvény visszatérési értéke a duplikált elemektől mentes új tömb! */

 const array1 = ['Ede', 'Géza', 'Feri', 'Ede', 'Vuki'];

 let mySet = [...new Set(array1)];

 console.log(mySet);



 /*2. Készíts egy HU nevű objektumot, aminek az alábbi propertijei vannak:

date(): Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
currency(): Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt
list(): A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval) */

const HU = {
    date(time) {
        const huTime = new Intl.DateTimeFormat('hu-HU').format(time);
        return huTime;
    }, 
    currency(amount) {
        const huCurrency = new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        })
        return huCurrency.format(amount);
    },
    list(array) {
        const arrayList = `${array.slice(0, -1).join(', ')} és ${array[array.length-1]}`
        return arrayList
    },
}

console.log(HU.currency(10));
console.log(HU.date(new Date()));
console.log(HU.list(['1', '2', 'Banana', 'Alma']))

/*Készíts egy objectConverter nevű objektumot, ami az alábbi metódusokkal rendelkezik:
arrayToMap(array)
arrayToSet(array)
setToMap(set)
setToArray(set)
mapToArray(map)
mapToSet(map)
A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból konvertálják át az adatokat egy másikba.
 Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object. */
 const array = ['Siófok', 'Budapest', 'Győr', 'Debrecen'];

 const set = new Set();
set.add('12');
set.add('20');
set.add('77');
set.add('124');


const map = new Map();
map.set('Géza', 83);
map.set('Ede', 45);
map.set('Béla', 51);
map.set('Lali', 46);


 const objectConverter = {
   
    arrayToMap(array) {
        const map = new Map();
        array.forEach((value, index) => {map.set(index, value)});
        return map;
    },

    arrayToSet(array) {
        const set = new Set(array);
        return set;
    },

    setToMap(set) {
        const map = new Map();
        set.forEach((value, index) => {map.set(index, value)});
        return map;
    },

    setToArray(set) {
        const array = [];
        set.forEach((value) => {array.push(value)});
        return array;
    },

    mapToArray(map) {
        const array = [];
        map.forEach((value) => {array.push(value)});
        return array;
    },

    mapToSet(map) {
        const set = new Set();
        map.forEach((value) => {set.add(value)});
        return set;
    }

 }

 console.log(objectConverter.arrayToMap(array));
 console.log(objectConverter.arrayToSet(array));
 console.log(objectConverter.setToMap(set));
 console.log(objectConverter.setToArray(set));
 console.log(objectConverter.mapToArray(map));
 console.log(objectConverter.mapToSet(map));