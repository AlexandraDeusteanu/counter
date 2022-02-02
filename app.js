let add = document.querySelector("#add")
let reset = document.querySelector("#reset")
let substract = document.querySelector("#substract")
let counter = document.querySelector("#counter")

let count = 0;

const resetFunc = function () {
    count = 0;
    counter.textContent = 0;
}

add.addEventListener("click", function () {
    count += 1;
    counter.textContent = count;
    if (count < 0) {
        count = 0;
    }
})

substract.addEventListener("click", function () {
    count -= 1;
    counter.textContent = count;


})

reset.addEventListener("click", function () {
    resetFunc()
})