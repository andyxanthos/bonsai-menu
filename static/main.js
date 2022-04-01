const header = document.querySelector('header');
const backgroundFile = header.dataset.bg;
if (backgroundFile) {
    header.style.backgroundImage = `url('${backgroundFile}')`;
}


const day = new Date().getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
"Saturday"];
const daySpans = document.querySelectorAll('.dayOfWeek');
daySpans.forEach(span => {
    if (span.innerHTML == dayNames[day]) {
        span.innerHTML += " <i class='bi bi-check-circle-fill' alt='today'></i>"
    }
});

document.querySelector('.restaurant-image').addEventListener('click', (e) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.style.zIndex = "9999";
    modal.style.width = "80vw";
    modal.style.height = "80vh";
    modal.style.position = "fixed";
    modal.style.backgroundColor = "#EEEEEE"
    modal.style.borderRadius = "10px";
    modal.style.top = "10%";
    modal.style.left = "10%";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.padding = "1em";
    modal.style.boxShadow = "0px 0px 1000px #000000"

    const image = document.createElement('img');
    image.src = e.target.src;
    image.style.maxWidth = "100%";
    modal.appendChild(image);

    modal.addEventListener('click', (e) => {
        modal.style.display = "none";
    });

    document.querySelector('body').appendChild(modal);
});