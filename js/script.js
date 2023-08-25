let slider = document.querySelector('.slider');
let bodyBackground = document.querySelector('body');
let headerColor = document.querySelector('header');
let overView = document.querySelector('.overview');
let topSection = document.querySelectorAll('.sect');

function modeProp(boxShd = 'gray', background = 'white', bdColor = 'black') {
    bodyBackground.style.backgroundColor = background;
    headerColor.style.color = bdColor;
    overView.style.color = bdColor;
    topSection.forEach(section => {
        section.setAttribute('style', `box-shadow: 0 0 5px ${boxShd};`);
    })
}
modeProp();

let darkMode = false
slider.addEventListener('click', function () {
    if (darkMode) {
        modeProp();
        darkMode = false;
    } else {
        modeProp('rgb(255, 255, 0)', 'black', 'white')
        darkMode = true;
    }
})