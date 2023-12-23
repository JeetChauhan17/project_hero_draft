

document.addEventListener("DOMContentLoaded", function () {
    const imageUrls = [
        "media/1.jpg",
        "media/2.jpg",
        "media/3.jpg",
        "media/4.jpg",
        "media/5.jpg",
        "media/6.jpg",
        "media/7.jpg",
        "media/8.jpg",
        "media/9.jpg",
        "media/10.jpg",
        "media/11.jpg",
        "media/12.jpg",
        "media/13.jpg",
        "media/14.jpg",
      ];
    
  
    const items = document.querySelectorAll(".item");
  
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