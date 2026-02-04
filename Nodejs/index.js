// const http = require('http');

// const myServer = http.createServer((req, res) => {
//     // console.log("Server 1");
//     // res.end('Hello This is My First Server');
//     // if (req.url == '/'){
//     //     res.end('Home Page');
//     // } else if (req.url == '/about'){
//     //     res.end('About Page');
//     // } else {
//     //     res.end('Page Not Found');
//     // }
//     if(req.url =='/'){
//         res.end('<h1>ABES Engg College</h1><img src = "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepY1prqDZEoDMS2uA_ppIw1khkl6RjSoNVstFui--2ZeMqjU4OKJWv8LrCAhwc35dcPyPGEASRfxvpwle8W8OTF5rKBXs_EY6Cy9p7RuzKz50fIfoukusAHr17INdzaDWZ_yNZUZ8KQh_7L=s1360-w1360-h1020-rw" height = "500px" width = "500px" ></img>')
//     } else if (req.url == '/about'){
//         res.end('We Are Student');
//     } else if (req.url == '/Branch') {
//         res.end('CE');
//     } else {
//         res.end('Page Not Found');
//     }

// })

// myServer.listen(8000, () => console.log('Server Started'));

const fs = require('fs');

// fs.writeFileSync("./CE-A.txt", "Hello This is My First File");

// const r = fs.readFileSync("./CE-A.txt", "utf-8");
// console.log(r);

// const r = fs.readFileSync("./CSE-A.txt", "utf-8");
// console.log(r);

// fs.writeFile("./a.txt", "Hello this is a async file", () => { })
    
fs.readFile("./CSE-A.txt", "utf-8", (err, result) => {
    if (err){
        console.log("Error", err);
    } else {
        console.log(result);
    }
 });

