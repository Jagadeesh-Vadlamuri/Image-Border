let data = [
    {
        id:'200',
        firstname:'Jagadeesh',
        lastname:'Vadlamuri',
        email:'abc@gmail.com',
        age:24,
        profession:'Engineer',
        city:'KKD',
        Phonenumner:'1234'
    },
    {
        id:'201',
        firstname:'Murali',
        lastname:'Kasu',
        email:'xyz@gmail.com',
        age:24,
        profession:'Engineer 1',
        city:'RCPM',
        Phonenumner:'2345'
    },
    {
        id:'202',
        firstname:'Navya',
        lastname:'Vadlamuri',
        email:'wed@gmail.com',
        age:20,
        profession:'Engineer 3',
        city:'KKD',
        Phonenumner:'123456'
    },
    {
        id:'203',
        firstname:'Raghav',
        lastname:'sola',
        email:'pqr@gmail.com',
        age:24,
        profession:'Engineer 4',
        city:'HYD',
        Phonenumner:'3456'
    },
    {
        id:'204',
        firstname:'Myna',
        lastname:'kyna',
        email:'xcv@gmail.com',
        age:24,
        profession:'Engineer 5',
        city:'KOL',
        Phonenumner:'4566'
    },
    {
        id:'205',
        firstname:'Raju',
        lastname:'ninya',
        email:'kio@gmail.com',
        age:24,
        profession:'Engineer 6',
        city:'MUM',
        Phonenumner:'37982'
    },
    {
        id:'206',
        firstname:'Bheem',
        lastname:'Komuram',
        email:'asc@gmail.com',
        age:24,
        profession:'Engineer 7',
        city:'PUNE',
        Phonenumner:'23452'
    },
    {
        id:'207',
        firstname:'Ram',
        lastname:'alluri',
        email:'znh@gmail.com',
        age:24,
        profession:'Engineer 8',
        city:'TML',
        Phonenumner:'578'
    },
    {
        id:'208',
        firstname:'kaju',
        lastname:'bhau',
        email:'ecv@gmail.com',
        age:24,
        profession:'Engineer 9',
        city:'KKD',
        Phonenumner:'1234'
    },
    {
        id:'209',
        firstname:'lavada',
        lastname:'edvir',
        email:'xca@gmail.com',
        age:24,
        profession:'Engineer 10',
        city:'SLKM',
        Phonenumner:'4590'
    }
];
//forEach looping
data.forEach(function(a){
    console.log(a);
});

//for looping
for(var i=0; i<data.length; i++){
    console.log(data[i]);
}

//for in loop
for(var i in data){
    console.log(data[i]);
}

//for of loop
for(var i of data){
    console.log(i)
}