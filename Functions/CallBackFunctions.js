//Callback functions

//𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 are the functions that are passed as an argument
//into another function, receiving function is referred as "caller function"

//When passing the callback function as an argument into "caller function"
//first that caller function will be executed and then after some time
//callback function is executed

// Ex of function that accepts callback function as an argument
// setTimeout(), forEach(), map(), addEventListener()

//So according to definition we can say that callback function are
//first-class function in js

document.addEventListener("click", function (params) {
  console.log("Button Clicked");
});

// ⁡⁢⁣⁣𝗣𝘂𝗿𝗽𝗼𝘀𝗲 𝗼𝗳 𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻⁡ :
// 1.⁡⁣⁣⁢Sequencing Execution⁡:Callback functions ensure that certain code doesn't execute until a specific task, often asynchronous,
//  is completed. This helps in maintaining the order of operations.

// 2.⁡⁣⁣⁢Handling Asynchronous Operations⁡:In asynchronous programming, where operations might take time to complete
// (e.g., AJAX requests, timeouts), callback functions allow you to handle the results or errors of these operations
//  once they're done.

// 3.⁡⁣⁣⁢Customizing Behavior⁡:
// Callback functions allow you to customize what action or logic should be executed based on the outcome of a task. For example, handling success and error cases differently.
