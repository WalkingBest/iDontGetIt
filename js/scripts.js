function mostrarImagen() {
    document.getElementById('zacate').style.visibility = 'visible';
    document.getElementById('whatisthisboton').style.visibility = 'visible';
}
function whatisthisboton() {
    console.log('asfss');
    let hidden = document.querySelectorAll('.hidden');
    var i;
    for (i = 0; i < hidden.length; i++){
        hidden[i].style.visibility = 'visible';
        console.log('lmao');
    }
}
function si(){
    document.getElementById('tohide').style.display = 'none';
    document.body.style.backgroundColor = '#010101'
    const h1 = document.createElement('H1');
    h1.innerHTML = 'SACATE EL UNDERTALE';
    document.body.appendChild(h1);
    document.getElementById('flowey').style.visibility = 'visible';
    var audio = new Audio('./audio/flowey.mp3');
    audio.play();
}
function no(){
    alert('Mira we al chile me dio weba programar esto asi que, podrias simplemente presionar si? ty');
}