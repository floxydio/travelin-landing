$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 15,
      items:1,
      responsive: {
          0: {
              items: 1,
              nav: true,
              mouseDrag: true,
              autoplay: true,
              dots: true,
          },
  
          576: {
              items: 3,
              nav:true,
              dots: true,
              mouseDrag: true,
              autoplay: true,
          },
          
          767: {
              items: 3,
              nav: true,
              mouseDrag: true,
              autoplay: true,
          },
          992: {
              items: 4,
              nav: true,
              loop: false,
              margin: 20,
          },
      }
    });
  });


  function darkTheme () {
    document.body.classList.toggle('dark');
  }

// Data

const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "UI Designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "i hope this company, can better because i recommend you who see my testimony right now ",
  },

  {
    id: 2,
    name: "Dio Rovelino",
    job: "Front End Dev",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Gila keren banget asli, Gua jadi tau harga-harga yang promo",
  },
  {
    id: 4,
    name: "Diyas Frans Adhira",
    job: "Graphic Designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Pertama buka si gak yakin ini web bisa unggul daripada yang lain, tapi ternyata pecah banget",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

