const menuBtn = document.querySelector('.menu-btn')
const navkinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', () => {
  navkinks.classList.toggle('mobile-menu')
})

let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics .",
      image: " images/slider 2.PNG"
    },
    {
      name: "Loki",
      des:
        "Loki became the first Disney+ show from Marvel Studios to be officially confirmed for a Season 2 in its sixth episode’s post-credits scene, although details are scarce beyond that news.",
      image: "images/slider 1.PNG"
    },
    {
      name: "Wanda Vision",
      des:
        "Wanda basically has a mental breakdown that results in the death of her husband Vision, Hawkeye and a bunch of other people.And they all live together.",
      image: "images/slider 3.PNG"
    },
    {
      name: "raya and the last night",
      des:
        "Raya and the Last Dragon is a fantasy film set in the fictional land of Kumandra, but that world is inspired by the beautiful cultures of Southeast Asia.",
      image: "images/slider 4.PNG"
    },
    {
      name: "luca",
      des:
        "The movie follows Luca Alberto and Giulias story of friendship and adventure in the Italian Riviera Recently Enrico Casarosa director of Luca revealed how his childhood inspired.",
      image: "images/slider 5.PNG"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0;
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  setInterval(() => {
    createSlide();
  }, 5000);
  
  //video card
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card slider
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  