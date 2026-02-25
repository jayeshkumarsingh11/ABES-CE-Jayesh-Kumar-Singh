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

// const fs = require('fs');

// fs.writeFileSync("./CE-A.txt", "Hello This is My First File");

// const r = fs.readFileSync("./CE-A.txt", "utf-8");
// console.log(r);

// const r = fs.readFileSync("./CSE-A.txt", "utf-8");
// console.log(r);

// fs.writeFile("./a.txt", "Hello this is a async file", () => { })
    
// fs.readFile("./CSE-A.txt", "utf-8", (err, result) => {
//     if (err){
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
//  });

// const r = fs.readFileSync("./CE-A.txt", "utf-8");

// fs.writeFileSync("./b.txt", r);

// fs.cpSync("e.txt", "CE-A.txt");

// fs.cp("CSE-A.txt", "d.txt", () => {});

// fs.cp("CE-A.txt", "c.txt" , (err, result) => {
//     if (err){
//         console.log("Error", err);
//     }
// }) 

// fs.appendFileSync("./e.txt", `and we are coder`);

// fs.appendFile("./d.txt", `we are Coder`, () => {});

// fs.appendFile("./c.txt", `we are Coder`, (err) => {
//     if (err) {
//         console.log("Error", err);
//     }
// })

// const r = fs.readFileSync("./CE-A.txt", "utf-8");
// fs.appendFileSync("./e.txt", r);

// fs.unlinkSync("./d.txt");

// fs.unlink("./d.txt", (err) => {
//     if (err){
//         console.log("Error", err);
//     }
// })

// fs.unlink("./c.txt", () => {})





// const os = require('os');

// console.log("platform", os.platform());

// console.log("user", os.userInfo());

// console.log("CPU", os.arch());

// console.log("Free Memory", os.freemem(), "bytes");

// console.log("Total Memory", os.totalmem(), "bytes");

// console.log("System update", os.uptime());

// console.log("host name", os.hostname());


// const http = require('http');
// const fs = require('fs');

// const home = fs.readFileSync("./a.html")
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.end(home);
//     // res.setHeader('Content-type', 'text/plain');
//     // res.end("Hello");
// })

// server.listen(8000, () => {
//     console.log("Sever is Running");
// })

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     /* -- readFile Method -- */
//     // fs.readFile('let.json', (err, data) => {
//     //     if (err) {
//     //         res.statusCode = 500;
//     //         res.end("Server Error");
//     //     } else {
//     //         res.statusCode = 200;
//     //         // res.setHeader('Content-Type', 'application/json');
//     //         res.end(data);
//     //     }

//     //     // if (err) throw err;
//     //     // const jsonData = JSON.parse(data);
//     //     // console.log(jsonData.Name);
//     // });
//     /* --Loading a Json File using the require function-- */  
//     // const config = require('./let.json');
//     // console.log(config);

//     /* --readFileSyscMethod-- */
//     // const {readFileSync} = require('fs');
//     // const data = readFileSync('./let.json');
//     // console.log(JSON.parse(data));


//     /* --------Write Operation------- */
//     /* --Using fs.writeFile Method-- */
//     const temp = 
//     {
//         Name: ",
//         Course: "B-Tech"
//     }
//     const data = JSON.stringify(temp);
//     fs.writeFile("let.json", data, (err) => {
//         if(err) throw err;
//         else console.log("Data Written Successfully");
//     })
// });

// server.listen(8000, () => {
//     console.log('Server is Running');
// });


/* ----------Update----------- */
// const {writeFile, readFile} = require('fs');
// const path = './let.json';

// readFile(path, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const jsonData = JSON.parse(data);
//     jsonData.createdAt = new Date().toISOString();
//     writeFile(path, JSON.stringify(jsonData), (err) => {
//         if (err) throw err;
//         console.log("Data Written Successfully");
//     })
// })


// const fs = require('fs');
// const path = './let.json';
// var data = fs.readFileSync(path);
// var t = JSON.parse(data);
// let temp = 
// {
//     Name: "abc",
//     Course: "xyz"
// }
// t.push(temp);
// fs.writeFile("let.json", JSON.stringify(t), (err) => {
//     if (err) throw err;
//     console.log("Done");
// })

const fs = require('fs');
const path  = './let.json';

