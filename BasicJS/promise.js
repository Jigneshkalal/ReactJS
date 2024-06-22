function test(){
    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            const e = true;
            if (e) {
                console.log("UpdateD");
                resolve();
            }
            else {
                console.log("No-Updated");
                reject();
            }
        },2000);
    }
)
}

test().then(function(){
    console.log("Updated has been made");
}).catch(function(){
    console.log("nothing has been changed ");
})
 