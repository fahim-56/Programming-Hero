var myBalance = 1000;
var applePrice = 200;
var bananaPrice = 100;
var orangePrice = 150;
var totalPrice = applePrice + bananaPrice + orangePrice;

if (totalPrice <= myBalance) {
    console.log("Purchase successful!");
    console.log("Remaining balance: " + (myBalance - totalPrice));
} else {
    console.log("Insufficient balance.");
}