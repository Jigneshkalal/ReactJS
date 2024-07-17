const Passgen =(n,capvalid=true,smallvalid=true,numvalid=true,specvalid=false)=>{

let cap='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let small='abcdefghijklmnopqrtuvwxyz'
let num='123456789'
let spec='!@#$%&*'
let str='';
str+=capvalid?cap:''
str+=smallvalid?small:''
str+=numvalid?num:''
str+=specvalid?spec:''

let pass='';
for (let i = 0; i < n; i++) {
     let num =Math.floor((Math.random()*str.length)) +1;
    let char= str.charAt(num);
    pass+=char;
}
 console.log(pass);
}

 Passgen(8,false,true,true,false)