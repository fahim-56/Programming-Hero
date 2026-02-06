const price = 5000;

if (price >= 5000) {
    const discount = price * 0.1;
    console.log("You have to pay: ", price - discount);
} else {
    console.log("You have to pay: ", price);
}