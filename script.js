// i will declare variables
const productName = prompt("enter productName");
const model = prompt("enter model");
const cost = prompt("enter cost");
const qty = prompt("enter qty");

const productName2 = prompt("enter productName");
const model2 = prompt("enter model");
const cost2 = prompt("enter cost");
const qty2 = prompt("enter qty2");

const productName3 = prompt("enter productName");
const model3 = prompt("enter model");
const cost3 = prompt("enter cost");
const qty3 = prompt("enter qty3");

const productName4 = prompt("enter productName");
const model4 = prompt("enter model");
const cost4 = prompt("enter cost");
const qty4 = prompt("enter qty");


const productName5 = prompt("enter productName");
const model5 = prompt("enter model");
const cost5 = prompt("enter cost");
const qty5 = prompt("enter qty");



productCatalog = [];
console.log(productCatalog);

productCatalog.push(productName);
console.log(productCatalog);
productCatalog.push(model);
console.log(productCatalog);
productCatalog.push(cost);
console.log(productCatalog);
productCatalog.push(qty)
console.log(productCatalog);


productCatalog.push(productName2);
console.log(productCatalog);
productCatalog.push(model2);
console.log(productCatalog);
productCatalog.push(cost2);
console.log(productCatalog);
productCatalog.push(qty2)
console.log(productCatalog);


productCatalog.push(productName3);
console.log(productCatalog);
productCatalog.push(model3);
console.log(productCatalog);
productCatalog.push(cost3);
console.log(productCatalog);
productCatalog.push(qty3);
console.log(productCatalog);


productCatalog.push(productName4);
console.log(productCatalog);
productCatalog.push(model4);
console.log(productCatalog);
productCatalog.push(cost4);
console.log(productCatalog);
productCatalog.push(qty4)
console.log(productCatalog);


productCatalog.push(productName5);
console.log(productCatalog);
productCatalog.push(model5);
console.log(productCatalog);
productCatalog.push(cost5);
console.log(productCatalog);
productCatalog.push(qty5)
console.log(productCatalog);

console.log(productCatalog.length);

let productCatalog2 = [
    [productName, model, cost, qty],
    [productName2, model2, cost2, qty2],
    [productName3, model3, cost3, qty3],
    [productName4, model4, cost4, qty4],
    [productName5, model5, cost5, qty5],
];


for (
    let myCounter = 0;
    myCounter < 5;
    myCounter = myCounter + 1
) {
    console.log("current index: ", myCounter)


console.log (
    `
    product 1
    product name is: ${productCatalog2[0] [0]}
    product model is: ${productCatalog2[0] [1]}
    product cost is: ${productCatalog2[0] [2]}
    product quantity is: ${productCatalog2[0] [3]}

    `
)

console.log (
    `
    product 2
    product name is: ${productCatalog2[1] [0]}
    product model is: ${productCatalog2[1] [1]}
    product cost is: ${productCatalog2[1] [2]}
    product quantity is: ${productCatalog2[1] [3]}
    
    `
)

console.log (
    `
    product 3
    product name is: ${productCatalog2[2] [0]}
    product model is: ${productCatalog2[2] [1]}
    product cost is: ${productCatalog2[2] [2]}
    product quantity is: ${productCatalog2[2] [3]}
    
    `
)

console.log (
    `
    product 4
    product name is: ${productCatalog2[3] [0]}
    product model is: ${productCatalog2[3] [1]}
    product cost is: ${productCatalog2[3] [2]}
    product quantity is: ${productCatalog2[3] [3]}
    
    `
)

console.log (
    `
    product 5
    product name is: ${productCatalog2[4] [0]}
    product model is: ${productCatalog2[4] [1]}
    product cost is: ${productCatalog2[4] [2]}
    product quantity is: ${productCatalog2[4] [3]}
    
    `
)

const bodyElement = document.body;
const newText = document.createElement("div");
newText.classList.add("h-screen", "flex", "justify-center", "items-center", "bg-red-500", "w-64");
newText.innerHTML = `
<div class= "bg-green-300">
<p class="text-gray-600 text-xs uppercase ">  </p>
<p class="text-4xl"> products <span class="font-bold text-white "> ${produc}</span> </p>

</div>
 ` ;

bodyElement.appendChild(newText);
};