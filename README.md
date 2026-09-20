# API, HTTP, AJAX & Asynchronous JavaScript

> Front-End Development Notes covering APIs, HTTP, AJAX, Promises, Fetch API, async/await, and error handling.

---

## 📚 Table of Contents

- [What is an API?](#what-is-an-api)
- [Web APIs](#web-apis)
- [What is HTTP?](#what-is-http)
- [HTTP Request & Response](#http-request--response)
- [TCP, IP & HTTP](#tcp-ip--http)
- [HTTP Methods](#http-methods)
- [HTTP Status Codes](#http-status-codes)
- [HTTP vs HTTPS](#http-vs-https)
- [Types of APIs](#types-of-apis)
- [AJAX](#ajax)
- [Synchronous vs Asynchronous](#synchronous-vs-asynchronous)
- [Callback](#callback)
- [Promise](#promise)
- [Promise Methods](#promise-methods)
- [Promise Chaining](#promise-chaining)
- [Fetch API](#fetch-api)
- [Fetch & HTTP Errors](#fetch--http-errors)
- [Sending Data with Fetch](#sending-data-with-fetch)
- [async / await](#async--await)
- [try / catch](#try--catch)
- [The Big Picture](#the-big-picture)

---

# 1. What is an API?

**API** stands for **Application Programming Interface**.

An API is an interface that allows different software systems to communicate with each other.

For example:

```text
Frontend
   ↓
API
   ↓
Backend / Server
   ↓
Database

The frontend does not usually communicate directly with the database.

Instead, it sends requests to the backend through an API.

2. Web APIs

A Web API is an API that communicates over the web, commonly using HTTP.

Example:

Website
   ↓
HTTP Request
   ↓
Web API
   ↓
HTTP Response
   ↓
Website

APIs commonly exchange data using JSON.
```
Example:

{
  "id": 1,
  "name": "Mohamed",
  "age": 20
}

Note: REST is an architectural style, while JSON is a data format.

3. What is HTTP?

HTTP stands for:

HyperText Transfer Protocol

HTTP is an application-layer protocol used for communication between clients and servers.

Example:

Browser → HTTP Request → Server
Browser ← HTTP Response ← Server

HTTP defines how requests and responses are structured and exchanged.

4. HTTP Request & Response
HTTP Request

A request is sent from the client to the server.

It can contain:

HTTP Method
URL
Headers
Body

Example:

GET /users/1 HTTP/1.1
Host: example.com
Accept: application/json
HTTP Response

The server sends a response back to the client.

It contains:

Status Code
Headers
Body

Example:

HTTP/1.1 200 OK
Content-Type: application/json
{
  "id": 1,
  "name": "Mohamed"
}
5. TCP, IP & HTTP

These protocols work at different layers.

Application
    ↓
   HTTP
    ↓
   TCP
    ↓
    IP
    ↓
Network
HTTP → Application-layer communication
TCP → Reliable transport
IP → Addressing and routing
Important

HTTP/1.1 and HTTP/2 commonly run over TCP.

HTTP/3 uses QUIC, which runs over UDP.

6. HTTP Methods

HTTP methods describe the intended action of a request.

Method	Purpose
GET	Retrieve data
POST	Submit data / Create a resource
PUT	Replace a resource
PATCH	Partially modify a resource
DELETE	Delete a resource

Example:

GET /users

means:

Give me the users.

7. HTTP Status Codes

HTTP status codes tell us the result of a request.

Range	Meaning
1xx	Informational
2xx	Success
3xx	Redirection
4xx	Client Error
5xx	Server Error
Common Status Codes
Code	Meaning
200	OK
201	Created
204	No Content
301	Moved Permanently
302	Found
400	Bad Request
401	Unauthorized
403	Forbidden
404	Not Found
422	Unprocessable Content
500	Internal Server Error
503	Service Unavailable
401 vs 403

401

Usually means authentication is required or the authentication credentials are invalid.

403

The server understood the request but refuses to authorize it.

8. HTTP vs HTTPS

HTTPS means:

HTTP Secure

HTTPS is HTTP used over TLS.

TLS provides:

Encryption
Integrity
Server authentication
HTTP
↓
Data can travel without TLS protection

HTTPS
↓
HTTP + TLS
↓
Encrypted communication
9. Types of APIs

There are different API architectural approaches and technologies.

Some common examples:

REST
SOAP
GraphQL
WebSocket APIs
REST

REST is an architectural style commonly used with HTTP.

Example:

GET /users
GET /users/10
POST /users
PATCH /users/10
DELETE /users/10
10. AJAX

AJAX stands for:

Asynchronous JavaScript and XML

AJAX is a technique for communicating with a server without requiring a full page reload.

Despite the name, AJAX does not require XML.

Modern applications commonly use JSON and the Fetch API.

Example:

User Action
    ↓
JavaScript
    ↓
Fetch / XMLHttpRequest
    ↓
Server
    ↓
Response
    ↓
Update DOM
11. Synchronous vs Asynchronous
Synchronous

Tasks are executed one after another.

Task 1
  ↓
Task 2
  ↓
Task 3

The next operation waits for the previous one.

Asynchronous

An operation can start and finish later while JavaScript continues executing other work.

Start Task
    ↓
Continue JavaScript
    ↓
Task finishes later
    ↓
Handle result

This is especially useful for:

Network requests
Timers
File operations
Other operations that complete later
12. Callback

A callback is a function passed to another function to be executed later.

Example:

setTimeout(function () {
    console.log("Done");
}, 1000);

The function passed to setTimeout() is a callback.

Callbacks were widely used for asynchronous JavaScript operations.

However, deeply nested callbacks can become difficult to maintain.

13. Promise

A Promise represents the eventual result of an asynchronous operation.

A Promise has three states:

Pending
   ↓
 ┌───────┐
 ↓       ↓
Fulfilled  Rejected
Pending

The operation is still running.

Fulfilled

The operation completed successfully.

Rejected

The operation failed.

Example:

const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }

});
14. Promise Methods
then()

Runs when the Promise is fulfilled.

promise.then((result) => {
    console.log(result);
});
catch()

Handles rejection.

promise.catch((error) => {
    console.log(error);
});
finally()

Runs after the Promise settles, whether fulfilled or rejected.

promise.finally(() => {
    console.log("Finished");
});
15. Promise Chaining

.then() returns a new Promise, which allows chaining.

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

The result returned from one .then() becomes the input of the next .then().

16. Fetch API

The Fetch API provides a modern interface for making HTTP requests.

It is Promise-based.

Example:

fetch("https://example.com/data")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

The default HTTP method is:

GET
17. Fetch & HTTP Errors

One of the most important things to understand about fetch():

fetch() does not automatically reject the Promise when the server returns an HTTP error such as 404 or 500.

You should check:

response.ok

Example:

fetch(url)
    .then((response) => {

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
18. Sending Data with Fetch

Example using POST:

fetch("https://example.com/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "Mohamed",
        age: 20
    })

});
Important

JSON.stringify() converts a JavaScript value into a JSON string.

19. async / await

async / await provides another way to work with Promises.

Instead of:

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });

We can write:

async function getData() {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);
}
20. async / await Example

A more complete example:

async function getUsers() {

    const response = await fetch(
        "https://example.com/users"
    );

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();

    console.log(users);
}

getUsers();
21. Important await Point

await does not freeze the entire browser or application.

It pauses the execution of the current async function until the Promise settles.

Other JavaScript work can continue.

Example:

async function test() {

    console.log("A");

    await somePromise();

    console.log("B");
}

console.log("C");

test();

console.log("D");

The await only affects the continuation of test().

22. try / catch

try / catch is used to handle errors.

try {

    // Code that may throw an error

} catch (error) {

    // Handle the error

}

Example:

try {

    const result = JSON.parse("Invalid JSON");

} catch (error) {

    console.log("Something went wrong");

}
23. try / catch + Fetch

With async / await, try / catch is commonly used to handle rejected Promises and thrown errors.

async function getUsers() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.error(error);

    }
}
24. The Big Picture

All the concepts connect together:

User
  ↓
Website
  ↓
JavaScript
  ↓
fetch()
  ↓
HTTP Request
  ↓
API / Server
  ↓
HTTP Response
  ↓
Promise
  ↓
await
  ↓
JSON
  ↓
JavaScript
  ↓
DOM
  ↓
Updated UI

This is one of the most common flows in modern Front-End development.

25. Quick Revision
API

Allows software systems to communicate.

HTTP

Protocol used for communication between clients and servers.

AJAX

Technique for making asynchronous requests without a full page reload.

Promise

Represents the eventual result of an asynchronous operation.

Fetch

Modern Promise-based API for making HTTP requests.

async

Makes a function return a Promise.

await

Waits for a Promise inside an async function.

try / catch

Used to handle errors.

JSON

Common format for exchanging structured data between applications.

26. Final Flow

The overall concept can be summarized as:

API
 ↓
HTTP
 ↓
Request / Response
 ↓
AJAX
 ↓
Asynchronous JavaScript
 ↓
Promise
 ↓
Fetch
 ↓
async / await
 ↓
try / catch
 ↓
DOM Update
🚀 Key Takeaways
APIs allow applications to communicate.
Web APIs commonly use HTTP.
HTTP works through requests and responses.
HTTP methods describe the intended operation.
Status codes describe the result of a request.
HTTPS adds TLS protection to HTTP.
AJAX allows asynchronous communication without a full page reload.
Promises represent future results.
Fetch is Promise-based.
fetch() does not reject automatically for HTTP 4xx or 5xx responses.
async / await makes Promise-based code easier to read.
try / catch can handle errors in asynchronous code.
JSON is commonly used to exchange data between frontend and backend.
📌 References
MDN Web Docs
HTTP Semantics — RFC 9110
Fetch Standard
