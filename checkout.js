const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);


function processData() {

    let user = PARAMS.get("buyer");
    document.getElementById("hello").innerText = `Good day ${buyer}!`;

    let item1 = PARAMS.get("item1");
    document.getElementById("item1").innerText = `The amount of corn you bought is ${item1}`;

    let item2 = PARAMS.get("item2");
    document.getElementById("item2").innerText = `The amount of carrot you bought is ${item2}`;

    let item3 = PARAMS.get("item3");
    document.getElementById("item3").innerText = `The amount of parsley you bought is ${item3}`;

    let yourPayment = PARAMS.get("user-money");
    document.getElementById("user-money").innerText = `Your payment is ${user-money}`; 

    let totalAmount = ((35) * item1) + ((40) * item2) + ((64) * item3);
    if (totalAmount > payment){
        document.getElementById("result").innerText = "You don't have enough money";
    } else {
        let result = payment - totalAmount;
        document.getElementById("result").innerText = `Your change is ${result}`;
    }
    
}
