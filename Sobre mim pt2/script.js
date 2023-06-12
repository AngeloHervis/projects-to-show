function escrevendoLetra(){
    function ativarLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i)=> {
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 75 * i )
        })
    }
    
    
    const titulo = document.querySelector('.digitando');
    ativarLetra(titulo);
}

const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .nav-primary')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})


