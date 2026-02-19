const http = require('http');
const fs = require('fs');
const home = fs.readFileSync("./home.html")
const course = fs.readFileSync("./course.html")
const login = fs.readFileSync("./login.html")
const server = http.createServer((req, res) => {
    if (req.url === '/' ){
        res.end(home);
    } else if (req.url === '/course'){
        res.end(course);
    } else if (req.url === '/login'){
        res.end(login);
    } else {
        res.end("Page Not Found");
    }
})

server.listen(3000, () => {
    console.log('Server is Running');
})