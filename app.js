const audio = new Audio('assets/audio/flowey.mp3');
function mostrarImagen() {
    document.getElementById('zacate').style.display = 'block';
    document.getElementById('whatisthisboton').style.display = 'block';
}
function whatisthisboton() {
    const hidden = document.querySelectorAll('.hidden');
    for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.display = 'block';
    }
}
function si() {
    document.getElementById('tohide').style.display = 'none';
    document.body.style.backgroundColor = '#010101';
    const h1 = document.createElement('H1');
    h1.innerHTML = 'SACATE EL UNDERTALE';
    document.body.appendChild(h1);
    document.getElementById('flowey').style.display = 'block';
    audio.play();
}
function no() {
    alert('Mira we al chile me dio weba programar esto asi que, podrias simplemente presionar si? ty');
}