const nextDom = document.querySelector("#next");
const prevDom = document.querySelector("#prev");
const carouselDom = document.querySelector(".carousel");
const thumbnailDom = document.querySelector(".carousel .thumbnail");
const listItemDom = document.querySelector(".carousel .list");

nextDom.onclick = function () {
  showSlider("next");
};
prevDom.onclick = function () {
  showSlider("prev");
};

function showSlider(type) {
  const itemSlider = document.querySelectorAll(".carousel .list .item");
  const itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
  let runTimeOut;
  let runTimeRun = setTimeout(() => {
    nextDom.click();
  }, 7000);

  if (type == "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem])
    carouselDom.classList.add('prev')
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, 3000);

  clearTimeout(runTimeRun)
  runTimeRun = setTimeout(() => {
    nextDom.click()
  }, 7000);
}
