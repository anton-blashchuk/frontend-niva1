x = 5;
y = 6;
z = x + y;
let carName = "5" + 2 + 3;
document.getElementById("title_div").innerHTML = "\"5\" + 2 + 3 = " + carName;


function multiply(val1, val2) {
    return val1 * val2
}

let multiplicationResult = multiply(4, 3)
document.getElementById("subtitle_div").innerHTML = "4 * 3 = " + multiplicationResult;
let multiplyFunction = multiply
document.getElementById("subtitle_div").innerHTML = "5 * 4 = " + multiplyFunction(5, 4);


document.getElementById("do_something_button").addEventListener("click", showAlert)
let currentMonth
let now = new Date()
console.log("currentMonth is " + currentMonth)
console.log("Date() is " + Date())
console.log("Date().getMonth() is " + (now.getMonth()))

switch (now.getMonth()) {
    case 0:
        currentMonth = "January"
        break
    case 1:
        currentMonth = "February"
        break
    case 2:
        currentMonth = "March"
        break
    case 3:
        currentMonth = "April"
        break
    case 4:
        currentMonth = "May"
        break
    case 5:
        currentMonth = "June"
        break
    case 6:
        currentMonth = "July"
        break
    case 7:
        currentMonth = "August"
        break
    case 8:
        currentMonth = "September"
        break
    case 9:
        currentMonth = "October"
        break
    case 10:
        currentMonth = "November"
        break
    case 11:
        currentMonth = "December"
        break
    default:
        currentMonth = "Unknown"
        break
}
document.getElementById("current_month_text").innerText = currentMonth

const phoneBook = [
    {
        name: "Alice Johnson",
        age: 28,
        email: "alice.johnson@example.com",
        description: "Graphic designer who loves photography and travel."
    },
    {
        name: "Bob Smith",
        age: 35,
        email: "bob.smith@example.com",
        description: "Software developer and tech enthusiast."
    },
    {
        name: "Carla Martinez",
        age: 42,
        email: "carla.martinez@example.com",
        description: "Marketing specialist with a passion for storytelling."
    },
    {
        name: "David Lee",
        age: 31,
        email: "david.lee@example.com",
        description: "Freelance writer and avid cyclist."
    }
];

let names = phoneBook[0].name
let namesLength = phoneBook.length
if (namesLength > 1) {
    for (let i = 1; i < phoneBook.length; i++) {
        names += "; " + phoneBook[i].name
    }
}
console.log("Al the names in phonebook " + names)

const desc = "foo"
console.log("Symbols are equal is " + (Symbol(desc) === Symbol(desc)))

function showAlert(name) {
    let userName = "%USERNAME%"
    alert("Hello, " + name)
}

let myName = "yourName";
let loggedIn = true;
let price = 150;

if (myName.startsWith("your")) {
    console.log("this is yours, not mine - " + myName)
} else {
    console.log("this is my name " + myName)
}
console.log("You are " + (loggedIn ? "" : " not") + "logged in")
if (price > 100) {
    console.log("Price is high - " + price)
} else if (price < 50) {
    console.log("Price is low - " + price)
} else {
    console.log("Price is ok - " + price)
}

let modal = document.getElementById("myModal")
let contactUs = document.getElementById("contactUs")
let closeButton = document.getElementById("close");
let submitButton = document.getElementById("submit");

function showModal() {
    modal.style.display = "block"
}

function hideModal() {
    modal.style.display = "none"
}

contactUs.onclick = function () {
    showModal()
}
closeButton.onclick = function () {
    hideModal()
}

submitButton.onclick = function () {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    hideModal()
    alert("Submitting name " + name + "; email " + email + "; message " + message)
}


