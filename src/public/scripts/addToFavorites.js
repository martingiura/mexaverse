const favBtn = document.querySelector("#favButton");
let favIcon = document.querySelector("#favIcon"),
  count = document.querySelector("#count");

let clicked = false;

favBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    favIcon.innerHTML = `Si cambia el DOM el boton`;
    count.textContent++;
  } else {
    clicked = false;
    favIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
  }
});
