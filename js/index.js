//* AJAX By JS
// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

// xhr.onload = function () {
//     if (xhr.status == 200) {
//         console.log(JSON.parse(xhr.responseText));
//     }
//     else {
//         console.log("Request Failed Status: ", xhr.status);
//     }

// }
// xhr.send();

//* AJAX By jQuery
// $.ajax({
//     type: "GET",
//     url: "https://jsonplaceholder.typicode.com/posts",
//     data: "",
//     dataType: "",
//     success: function (response) {
//         console.log(response);
//     },
//     error: function (xhr, status, error) {
//         console.log("Error: ", status, error);
//     }
// });

//* CallBack Hell
// setTimeout(function () {
//     console.log("1");
//     setTimeout(function () {
//         console.log("2");
//         setTimeout(function () {
//             console.log("3");
//             setTimeout(function () {
//                 console.log("4");
//                 setTimeout(function () {
//                     console.log("5");
//                     setTimeout(function () {
//                         console.log("6");
//                         setTimeout(function () {
//                             console.log("7");
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

//* to solve Call Back Hell -> Make A (Promise) ...
//^ let promise = new promise(function(resolve , reject){
//^     if(condition){
//^         resolve();
//^     }
//^     else{
//^         reject();
//^     }
//^ });

// * Example
// function delayLog(status) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log(status);
//             if (status == "Order Ready") {
//                 reject("Promise Rejected");
//             } else {
//                 resolve();
//             }
//         }, 1000);
//     });
// }

// delayLog('Order Request')
//     .then(() => delayLog("Order Validation"))
//     .then(() => delayLog("Order Confirmation"))
//     .then(() => delayLog("Order Preparation"))
//     .then(() => delayLog("Assign Delivery"))
//     .then(() => delayLog("Order Ready"))
//     .then(() => delayLog("Delivery in Progress"))
//     .catch((error) => console.error("Error: ", error));

// * GET Data

// function getData(url, method = "GET") {
//     return new Promise(function (resolve, reject) {
//         let xhr = new XMLHttpRequest();

//         xhr.open(method, url);

//         xhr.onload = function () {
//             if (xhr.status == 200) {
//                 console.log(JSON.parse(this.responseText));
//             }
//             else {
//                 console.log("Request Failed Status: ", this.status);
//             }

//         }
//         xhr.send();
//     });
// }
// getData("https://jsonplaceholder.typicode.com/posts").then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
// }).finally(() => {
//     console.log("Request Finished");
// });

// * ------------> Fetch <------------ * \\

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(function (data) {
//         console.log(data);
//     }).catch((error) => {
//         console.log("Fetch Error:", error);
//     }).finally(() => {
//         console.log("Request Finished");
//     });
