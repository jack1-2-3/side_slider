function slider() {
  const sliderItems = document.querySelectorAll(".p-slider__item");
  const sliderItemWidth = sliderItems[0].clientWidth;

  let counter = 0;

  setInterval(startSlider, 2000);

  function startSlider() {
    counter++;
    if (counter > sliderItems.length - 1) {
      counter = 0;
    }

    const marginLeft = counter * sliderItemWidth

    sliderItems[0].style.marginLeft = `-${marginLeft}px`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  slider();
});
