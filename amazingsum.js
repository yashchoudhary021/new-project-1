let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//---------------------------
let n = parseInt(readLine());
let sum = 0;
for (i=0;i<n;i++)
{
    let a = parseInt(readLine());
    sum = a[i]+a[i];
    if(sum>100)
    {
        console.log("true");
        
    }
    else{
        console.log("false");
       
    }
}