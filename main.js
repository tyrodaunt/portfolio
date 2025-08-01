const body = document.querySelector('body');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

let theme;

// dark and light mode
moon.addEventListener('click', darkmode);
sun.addEventListener('click', lightmode);


function darkmode() {
    theme = 'dark';

    moon.style.display = 'none';
    sun.style.display = 'block';

    // change colors
    body.style.backgroundColor = '#04090F';
    body.style.color = '#D9E3E5';


    localStorage.setItem('theme', JSON.stringify(theme))

}



function lightmode() {
    theme = 'light';

    moon.style.display = 'block';
    sun.style.display = 'none';

    // change colors
    body.style.backgroundColor = '#fff';
    body.style.color = '#04090F';
    localStorage.setItem('theme', JSON.stringify(theme))
}




let parsedTheme = JSON.parse(localStorage.getItem('theme'))

if(parsedTheme === 'dark' ) {
    moon.style.display = 'none';
    sun.style.display = 'block';

    // change colors
    body.style.backgroundColor = '#04090F';
    body.style.color = '#D9E3E5';
}

else if (parsedTheme === 'light') {
    moon.style.display = 'block';
    sun.style.display = 'none';

    // change colors
    body.style.backgroundColor = '#fff';
    body.style.color = '#04090F';
}







