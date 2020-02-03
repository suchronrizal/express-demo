# express-demo

- A middleware function is a function that takes a request object and either
terminates the request/response cycle or passes control to another middleware
function.
- Express has a few built-in middleware functions:
- json(): to parse the body of requests with a JSON payload
- urlencoded(): to parse the body of requests with URL-encoded payload
- static(): to serve static files
- You can create custom middleware for cross-cutting concerns, such as logging,
authentication, etc. 
