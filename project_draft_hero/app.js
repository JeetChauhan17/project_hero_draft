document.addEventListener("DOMContentLoaded", function () {
  const imageUrls = [
    "https://i.ibb.co/R78M75s/1.jpg",
    "https://i.ibb.co/RH50FJ0/2.jpg",
    "https://i.ibb.co/qgV3st2/3.jpg",
    "https://i.ibb.co/Dr75bc3/4.jpg",
    "https://i.ibb.co/sm81dvK/5.jpg",
    "https://i.ibb.co/wR7pgGB/6.jpg",
    "https://i.ibb.co/yY37Mqz/7.jpg",
    "https://i.ibb.co/1sZ84hP/8.jpg",
    "https://i.ibb.co/n1p9W34/9.jpg",
    "https://i.ibb.co/BsDr9q0/10.jpg",
    "https://i.ibb.co/tqdNKXB/11.jpg",
    "https://i.ibb.co/5cYgDMV/12.jpg",
    "https://i.ibb.co/7b3j16R/13.jpg",
    "https://i.ibb.co/YW5gCph/14.jpg",
  ];

  const items = document.querySelectorAll(".item");

  // items.forEach((item, index) => {
  //   const imageUrl = imageUrls[index];
  //   const img = document.createElement("img");
  //   img.src = imageUrl;
  //   item.appendChild(img);
  // });

  // const items = document.querySelectorAll(".item");

  items.forEach((item, index) => {
    const imageUrl = imageUrls[index];
    item.style.backgroundImage = `url(${imageUrl})`;
  });

  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");

  next.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  });

  prev.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  });
});
