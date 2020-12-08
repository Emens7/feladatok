/* 1. Írj egy függvényt, ami a paraméterként kapott tetszőleges darabszámú, tetszőlegesen méretű egész számot összead, és visszatér az összeadás végeredményével!
 A paraméterként kapott értékek egyszerű number típusúak legyenek! Amennyiben bármelyik paraméter értéke, vagy a részeredmény meghaladja a biztonságos tartomány,
 automatikusan konvertáljad BigIntbe, és így számoljunk tovább, és természetesen a visszatérési érték is BigInt legyen! */

 const sum = (...z) => {
     let allSum= 0;
       for (let i = 0; i < z.length; i += 1) {
            allSum += z[i];
       }

       return allSum;
 }

 console.log(sum(2, 3, 8))

 /* 2. Módosítsd úgy a függvényed, hogy paraméterként mind number, mind BigInt típusú adatokat is elfogadjon!
  Amennyiben valamelyik paraméter BigInt, úgy a number-eket is automatikusan konvertálja BigInt-é! */

  const sum2 = (...z) => {
      const bigInt = z.some((value) => typeof value === 'bigint')
      if (bigInt) {
          let sumBigInt = 0n;
          for (let i = 0; i < z.length; i +=1) {
              sumBigInt += BigInt(z[i]);
          }
          return sumBigInt
      }else {
        let allSum= 0;
        for (let i = 0; i < z.length; i += 1) {
             allSum += z[i];
        }
        return allSum;
      }
  }
  console.log(sum2(42n, 66));

  /* 3. Írj egy függvényt, ami a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas, és tizenhatos számrendszerbe is!
   Ezeket az értékeket pedig egy objectbe adja vissza! A property-k neve legyen: binary, octal, hexa. */

   const string = (a) => {
     const strings  = {
           binary: a.toString(2),
           octal: a.toString(8),
           hexa: a.toString(16),
       }
       return strings;

   }

   console.log(string(23));