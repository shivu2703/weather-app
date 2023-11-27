console.log("starting")

setTimeout(() => {
    console.log("after 2 seconds")
}, 2000);

setTimeout(() => {
    console.log("after 0 seconds")
}, 0);

console.log("stopping!!")