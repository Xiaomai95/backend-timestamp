# Timestamp Microservice

This project is a simple Node.js microservice that provides a timestamp API, built using the Express framework. The app supports both UNIX and UTC date formats and can respond with either format based on the provided date input. It also defaults to the current date if no input is given.
Key Features:

    CORS Enabled: Allows for remote testing and requests from other origins.
    API Endpoints:
        GET /api/hello: Returns a JSON greeting to test API connectivity.
        GET /api/:date?: Parses :date input (in UNIX or UTC format) and returns a JSON object with unix and utc values. If no date is provided, it defaults to the current date.
    Error Handling: Returns an error JSON if the date is invalid.

Example Responses:

    Valid Date Input:
        /api/1451001600000 → { "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }
        /api/2015-12-25 → { "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }
    No Date Input:
        /api → Returns current date in both UNIX and UTC.
    Invalid Date Input:
        /api/invalid-date → { "error": "Invalid Date" }

Installation & Usage

    Clone the repository.
    Run npm install to install dependencies.
    Start the server with npm start or node index.js.
    Access the API locally at http://localhost:3000/api or on the port specified in process.env.PORT.
