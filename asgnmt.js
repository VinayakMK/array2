//Print all mobile names
let name = mobiles.map((mob) => mob[2]);
console.log(name);

//Print all mobile prices
let price = mobiles.map((mob) => mob[3]);
console.log(price);

//Print only mobiles with samsung brand
let brand = mobiles.filter((mob) => mob[1] == 'samsung');
console.log(brand);

//print all mobile phones below 25000
let name = mobiles.filter((mob) => mob[3]<25000);
console.log(name);

//Print mobile details of avaialable in price range of 25k to 30k
let details = mobiles.filter((mob) => 25000<=mob[3]&&mob[3]<=30000);
console.log(details);

//List all 5g mobile names
let details = mobiles.filter((mob) => mob[6] == '5g' );
console.log(details);

//List all 5g mobiles under 35000
let fiveg= mobiles.filter((mob)=> mob[6] =='5g' && mob[3]<=35000);
console.log(fiveg);

//List all samsung mobile whose band=4g and dispaly type is AMOLED
let smsg= mobiles.filter((mob)=> mob[6] =='4g' && mob[5] == 'AMOLED' && mob[1] == 'samsung');
console.log(smsg);