let livrosEl = document.querySelector('#livros');
let livroEl = document.querySelector('#livro');

let revistasEl = document.querySelector('#revistas');
let revistaEl = document.querySelector('#revista');

livrosEl.addEventListener('mouseover', (e) => {
    livroEl.style.display = 'inherit';
})

livrosEl.addEventListener('mouseout', (e) => {
    livroEl.style.display = 'none';
})

revistasEl.addEventListener('mouseover', (e) => {
    revistaEl.style.display = 'inherit';
})

revistasEl.addEventListener('mouseout', (e) => {
    revistaEl.style.display = 'none';
})