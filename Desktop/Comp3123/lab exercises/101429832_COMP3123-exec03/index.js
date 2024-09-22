var http = require("http");
var employees = require("./Employee"); // Use Employee Module
console.log(employees);


console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); // Set response content type as JSON

    if (req.method !== 'GET') {
        res.statusCode = 405;
        return res.end(JSON.stringify({ "error": http.STATUS_CODES[405] }));
    } else {
        if (req.url === '/') {
            // Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.setHeader('Content-Type', 'text/html'); // Set content type as HTML for this response
            return res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        if (req.url === '/employee') {
            // Display all details for employees in JSON format
            return res.end(JSON.stringify(employees));
        }

        if (req.url === '/employee/names') {
            // Display only all employees {first name + lastname} in Ascending order in JSON Array
            const employeeNames = employees
                .map(emp => `${emp.firstName} ${emp.lastName}`)
                .sort(); // Sort the names alphabetically
            return res.end(JSON.stringify(employeeNames));
        }

        if (req.url === '/employee/totalsalary') {
            // Display Sum of all employees' salary in JSON format
            const totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);
            return res.end(JSON.stringify({ "total_salary": totalSalary }));
        }

        // Handle any other URLs
        res.statusCode = 404;
        return res.end(JSON.stringify({ "error": http.STATUS_CODES[404] }));
    }
});

// Start the server and listen on the defined port
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
