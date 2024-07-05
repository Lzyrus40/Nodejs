const crypto = require('node:crypto');
// =====Code 1=====
// const start=Date.now();
// crypto.pbkdf2Sync("password","salt",10000,500,"sha512");
// crypto.pbkdf2Sync("password","salt",10000,500,"sha512");
// console.log("Hash",Date.now()-start);


// =====Code 2=====
const Max_Call=6;
//vscode defaults threadpool_size is 4 we can change this manually. So the max_call till 4 are executed in approximately same time after that it will take time to complete (bcz of parallel execution)

//manually changing the threadpool_size
process.env.UV_THREADPOOL_SIZE = 8;
const start = Date.now();
for(let i = 0; i <Max_Call;i++){
    crypto.pbkdf2("password","salt",10000,500,"sha512",()=>{
        console.log(`Hash: ${i+1}`,Date.now()-start);
    });
}


//some asynchronous calls does not use threadpool so there is no affect on the time taking for execution of such a operation http.request is an example of such a process it is a network input output operation