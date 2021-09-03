

function getApi() {
    fetch("https://randomuser.me/api/?results=1")
        .then(res => res.json())
        .then(data => displayInfo(data));
}
getApi();
let someWords = document.getElementById("some-words");
let dp = document.getElementById("dp");
let nameField = document.getElementById("name-field");
let mailField = document.getElementById("mail-field");
let birthdy = document.getElementById("birthday-field");
let address = document.getElementById("location-field");
let phone = document.getElementById("phone-field");
let video = document.getElementById("video-field");

function displayInfo(data) {

    console.log(data.results[0].gender);

    phone.innerText = data.results[0].phone;
    birthdy.innerText = data.results[0].dob.date.slice(0, 10);
    address.innerText = `Country: ${data.results[0].location.country} City: ${data.results[0].location.city}  Street: ${data.results[0].location.street.name}`;
    mailField.innerText = data.results[0].email;
    dp.src = data.results[0].picture.large;
    nameField.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;
    video.innerText = data.results[0].gender;
    phone.style.display = "none";
    mailField.style.display = "none";
    birthdy.style.display = "none";
    address.style.display = "none";
    video.style.display = "none";

}

document.getElementById("icons-click").addEventListener("mouseover", function (event) {
    let parent = document.getElementById("icons-click");
    console.log(parent.childNodes);
    if (parent.childNodes[1] === event.target) {
        phone.style.display = "none";
        mailField.style.display = "none";
        birthdy.style.display = "none";
        address.style.display = "none";
        nameField.style.display = "block"
        someWords.innerText = "Hey! My Name is....";
        video.style.display = "none"


    }
    else if (parent.childNodes[2] === event.target) {
        phone.style.display = "none";
        mailField.style.display = "block";
        birthdy.style.display = "none";
        address.style.display = "none";
        nameField.style.display = "none"
        someWords.innerText = "Here is my Email Address.....";
        video.style.display = "none"

    }
    else if (parent.childNodes[3] === event.target) {
        phone.style.display = "none";
        mailField.style.display = "none";
        birthdy.style.display = "block";
        address.style.display = "none";
        nameField.style.display = "none"
        someWords.innerText = "Here is My Birthdate.....";
        video.style.display = "none"

    }
    else if (parent.childNodes[5] === event.target) {
        phone.style.display = "none";
        mailField.style.display = "none";
        birthdy.style.display = "none";
        address.style.display = "block";
        nameField.style.display = "none"
        someWords.innerText = "Here is my Address....";
        video.style.display = "none"

    }
    else if (parent.childNodes[6] === event.target) {

        phone.style.display = "block";
        mailField.style.display = "none";
        birthdy.style.display = "none";
        address.style.display = "none";
        nameField.style.display = "none"
        someWords.innerText = "Here is my Phone Number";
        video.style.display = "none"
    }
    else if (parent.childNodes[8] === event.target) {
        phone.style.display = "none";
        mailField.style.display = "none";
        birthdy.style.display = "none";
        address.style.display = "none";
        nameField.style.display = "none"
        someWords.innerText = "Hey! I'm a......";
        video.style.display = "block"

    }

});
