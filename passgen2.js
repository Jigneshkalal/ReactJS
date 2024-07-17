const Passgen = (n, capvalid=true, smallvalid=true, numvalid=true, specvalid=false) => {
    let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let small = 'abcdefghijklmnopqrtuvwxyz';
    let num = '123456789';
    let spec = '!@#$%&*';
    let str = '';
    str += capvalid ? cap : '';
    str += smallvalid ? small : '';
    str += numvalid ? num : '';
    str += specvalid ? spec : '';

    let pass = '';
    if (capvalid) {
         
        let firstChar = cap.charAt(Math.floor(Math.random() * cap.length));
        pass += firstChar;
        n -= 1;  
    }

    for (let i = 0; i < n; i++) {
        let num = Math.floor(Math.random() * str.length);
        let char = str.charAt(num);
        pass += char;
    }
    console.log(pass);
}

Passgen(8, true, true, true, true);