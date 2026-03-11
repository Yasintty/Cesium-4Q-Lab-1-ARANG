const QUERY = window.location.search;
const PARAMS = new URLSearchParams( QUERY );


function processData(){
    let buyer = PARAMS.get("buyer");
    document.getElementById("Hello").innerText = `Hello, ${buyer}!`;


    let item1 = PARAMS.get("item1-quantity");
    let item2 = PARAMS.get("item2-quantity");

    let totalcost = (item1-quantity) + (item2-quantity);

}
