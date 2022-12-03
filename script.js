// récuperer l'élément à fixer / claim element to fix

const element = document.querySelector('nav');

// mesurer l'élément / measure element 

const posYElement = element.offsetTop;
console.log(posYElement);

// fixer / fix

window.addEventListener('scroll', (e) => {
    if (window.scrollY > posYElement - 50) {
        element.style.position = "fixed";
        element.style.top = "100px";
    } else if (window.scrollY < posYElement - 50) {
        element.style.position = "absolute";
        element.style.top = "45%";
    }
});