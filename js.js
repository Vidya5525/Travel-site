const link=document.getElementById("nav-links");
const btn=document.getElementById("toggle");

btn.addEventListener("click",()=>{
    link.classList.toggle("active");
});

const Home = document.querySelector("#home");
const Booking = document.querySelector("#booking");
const Services = document.querySelector("#services");
const Gallery = document.querySelector("#gallery");
const Signup = document.querySelector("#signup");
const Signip = document.querySelector("#signin");

const homeSection = document.querySelector("#home-section");
const bookingSection = document.querySelector("#booking-section");
const serviceSection = document.querySelector("#service-section");
const gallerySection = document.querySelector("#gallery-section");


function showContent(content){
    homeSection.classList.add("hidden")
    bookingSection.classList.add("hidden")
    serviceSection.classList.add("hidden")
    gallerySection.classList.add("hidden")

    content.classList.remove("hidden")

}


Home.addEventListener("click",()=>{
    showContent(homeSection)
})

Booking.addEventListener("click",()=>{
    showContent(bookingSection)
})

Services.addEventListener("click",()=>{
    showContent(serviceSection)
})

Gallery.addEventListener("click",()=>{
    showContent(gallerySection)
})