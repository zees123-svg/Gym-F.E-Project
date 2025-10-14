/* Show Menu */
const navMenu = document.getElementById('nav-menu');
const navToogle = document.getElementById('nav-toogle');
const navClose = document.getElementById('nav-close');

/* Menu Show */
/* Validate if constant exists */
if(navToogle){
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu Hidden */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Change background Header */
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll header class
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

/* Calculate JS */
const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault();

    // Check if the fields have values
    if(calculateCm.value === '' || calculateKg.value === ''){
        // Add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        // Show Message
        calculateMessage.textContent = 'Fill in the Height and Weight 👨‍💻';

        // Remove Message three Seconds
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000);
    } 
    else{
        // BMI Formula
        const cm = calculateCm.value / 100;
        const kg = calculateKg.value;
        const bmi = Math.round(kg / (cm * cm));

        // Show your health status
        if(bmi < 18.5){
            // Add color and display message
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😌`;
        } 
        else if(bmi < 25){
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`;
        }
        else{
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😌`;
        }
        // To clear the input field
        calculateCm.value = '';
        calculateKg.value = '';

        // Remove message four seconds
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000);
    }
}

calculateForm.addEventListener('submit', calculateBmi);

/* Email JS */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const contactUser = document.getElementById('contact-user');

const sendEmail = (e) => {
    e.preventDefault();

    // Check if the field have value
    if(contactUser.value === ''){
        // Add and remove color
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');

        // Show Message
        contactMessage.textContent = 'You must enter your email ☝';

        // Remove message three seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 3000);
    }
    else{
        // Service ID - template ID - #form - publickey
        emailjs.sendForm('service_pzncyyh','template_imsfjwj','#contact-form','p4sd3q3EV1YT4ILKM')
            .then(() => { 
                // Show message and add color
                contactMessage.classList.add('color-green');
                contactMessage.textContent = 'You registered successfully 💪';

                // Remove message after three seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 3000);
            }, (error) => {
                // Mail Sending error
                alert('OOPS! SOMETHING HAS FAILED...', error);
            });

        // To clear the input field
        contactUser.value = '';    
    }
}

contactForm.addEventListener('submit', sendEmail);

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId  = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }
        else{
            sectionsClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* Show Scroll Up */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, and the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            :scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/* Scroll Reveal Animation */
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
});

sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'});
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100});
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'});
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'});