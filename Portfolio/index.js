const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
})


document.querySelectorAll(".menu-link").forEach(e => e.addEventListener("click", () => {
  hamburguer.classList.remove("active");
  navMenu.classList.remove("active");
}))

/* Script to send email */

function sendEmail(){
  Email.send({
    SecureToken: "c7a76c89-57ca-4bb9-9f33-983979115380",
    To : "leo.coreyy@gmail.com",
    From : document.getElementById("email").value,
    Subject : "New Contact Form",
    Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Message Sent Succesfully :)")
);
}