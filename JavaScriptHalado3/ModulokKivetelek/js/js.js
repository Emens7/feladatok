/*1. Tárold el az alábbi értéket egy token nevű, httpOnly cookie-ba, ami 15 perc után lejár:
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c*/

const cookieHandler= {
    setCookie(name, value, expirationMinutes, path='/') {
        const now = new Date();
        now.setTime(now.getTime() + (expirationMinutes * 60 * 1000))
        const expires = now.toUTCString();
        document.cookie = `${name}=${value};expires=${expires};path=${path}`
    },
}

cookieHandler.setCookie('token', ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 15)

/*2. Az alábbi cookie-k vannak a böngésződben tárolva (hozd létre őket):

viewed: 5
uid: 354774631237
ssid: Bx55OWbHJ0Vt_IGIFÍ

Írj egy olyan objectet, az alábbi három metódust megvalósítja:
 - kiolvassa a sütik nevét, és értékét - átmenti őket sessionStorage-be - törli a sütiket */

cookieHandler.setCookie('viewed', '5', 15);
cookieHandler.setCookie('uid', '354774631237', 15);
cookieHandler.setCookie('ssid', 'Bx55OWbHJ0Vt_IGIFÍ', 15);

const threeMethod = {
    getCookie() {
        const cookies = new Map();
        const keyValuesPairs = document.cookie.split('; ');
        keyValuesPairs.forEach((value) => {
            const keyValue = value.split('=');
            cookies.set(keyValue[0], keyValue[1]);
        })
        return cookies;
    },

    copyCookies() {
        const cookies = this.getCookie();
        cookies.forEach((value, key) => {
            localStorage.setItem(key, value);
        })
    },

    deleteCookies() {
        const cookies = this.getCookie();
        cookies.forEach((value, key) => {
            document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        })
    }
}

console.log(threeMethod.getCookie())
threeMethod.copyCookies();
threeMethod.deleteCookies();


 /*3. Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.
Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát, és a firstName, lastName párosokat egymás alá beleírja egy div-en belüli p-tagekbe,
 és létrehoz egy users nevű bejegyzés a localStorage-be, ahol a json tartalmát letárolja.
Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ba van users bejegyzés, úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.*/

const displayData = (obj) => {
    const div = document.querySelector('.users');
    obj.forEach(value => {
        div.innerHTML += `<p>${value.firstName} ${value.lastName}</p>`;
    })
}

const getData = () => {
    if(localStorage.getItem('users') === null) {
        fetch('/data.json').then(data => data.json()).then(json => {
            displayData(json);
            const jsonString = JSON.stringify(json);
            localStorage.setItem('users', jsonString);
        })
    } else {
       const jsonString =  localStorage.getItem('users');
       const data = JSON.parse(jsonString);
       displayData(data);
    }
    
}

getData()