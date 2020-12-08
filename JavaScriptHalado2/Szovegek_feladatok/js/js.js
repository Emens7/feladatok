//1. Írj egy függvényt, ami paraméterként tetszőleges darabszámú objektumot merge-öl össze, majd visszatér ezzel az objektummal! Az összefűzést úgy hajtsa végre,
// hogy az új objektum property-jei egyszerű indexek legyenek (0, 1, 2, stb.) amik tartalmazzák a részobjektumokat!

const obj1 = 
                {
                    firstName: 'Jonh',
                    lastName: 'Doe',
                    age: '30',

                };
const obj2 = 
                {
                    firstName: 'Jane',
                    lastName: 'Doe',
                    age: '23',
                };
            

const probeArr = (...z) =>  { return{...z}};



console.log(probeArr(obj1, obj2));



//2. Írj egy olyan függvényt (tagged template) ami a paraméterként kapott texts, values értékeket úgy adja vissza egy strigben, hogy a text értékek dőltek,
// a value-k félkövérek legyenek, ha beillesztjük a html-be, tehát a megfelelő tagekkel kiegészített stinget adjon vissza!

const taggedTemplate = (texts, ...values) => 
    texts.map((text, index) =>
                `<i>${text}</i>${values[index] ? `<strong>${values[index]}</strong>` : '' } `
).join('');

const temp = taggedTemplate`Neve: ${obj1.firstName} ${obj1.lastName} éltekora: ${obj1.age} éves.`;

document.body.innerHTML = temp;

/*3. Írj egy függvényt, ami első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amik stringeket tartalmaznak!
A függvény:

összefűz egy tömbbe az összes elemet,
eltávolítja az ismétlődő elemeket,
eltávolítja az összes olyan stringet, ami tartalmazza az első paraméterként megadott karaktert,
eltávolítja a stringek végén lévő white space karaktert
visszaadja ezt az új tömböt.*/

const removeDuplicates = (array) => {
    return array.filter((a, b) => array.indexOf(a) === b)
};

const firstStringParamDel = (char, array) => {
    return array.filter(word => !word.includes(char))
}

const probeArr3 = (arr) => {
    return arr.map(value => value.trimEnd())   
}

const probeArr2 = (character, ...value) => {
    const allparamArray = [character, ...value]; 
    const removeD = removeDuplicates(allparamArray);
    const textSlice = firstStringParamDel(character, allparamArray);
    const trimE = probeArr3(textSlice);
    return trimE;
}

console.log(probeArr2('c', 'Hello!     ', 'Helloc!', 'World'))


/*4. Alakítsd át úgy az előző feladatot, hogy ne egy függvényed legyen, hanem minden egyes részfeladat legyen külön függvénybe szervezve, tehát:

függvény: első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amik stringeket tartalmaznak! A függvény összefűzi egy tömbbe az összes elemet és visszaadja ezt az új tömböt
függvény: egy paraméterként kapott tömbből eltávolítja az ismétlődő elemeket és visszaadja az új tömböt
függvény: egy paraméterként kapott tömb összes elem elejéről és végéről levágja a space karaktereket, visszaad egy új tömböt
Egyik függvénynél se módosítsd a paraméterként kapott tömböt. Mindig újat hozz létre! 
Tartsd szem előtt, hogy egy függvény, csak egy dolgot csináljon!*/