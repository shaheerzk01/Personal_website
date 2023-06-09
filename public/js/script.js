
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
let header = document.querySelector('.header')

header.classList.toggle('sticky', window.scrollY>100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

let darkModeicon = document.querySelector('#darkMode-icon');

darkModeicon.onclick = () => {
    darkModeicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

const scriptURL = 'https://script.google.com/macros/s/AKfycbyoFdtIqUtYQBty40tJEAjST0hZBQ37myYLZl3NU1pczg6ePP0XG8b0goS3v0i9qmRz4w/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  });

function Submit() {
    alert("Form Submitted, Thanks");
};