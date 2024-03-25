class Livro extends Acervo {
    constructor(autor, titulo, volume) {
        this.autor = autor;
        this.titulo = titulo;
        this.volume = volume;
        this.tombo = acervo.length + 1;
        acervo.push(this);
    }
    getBibliografia() {
        return "Autor: " + this.autor + " Título: " + this.titulo + " Volume: " + this.volume;
    }
}


class Revista extends Acervo {
    constructor(nome, fasciculo) {
        this.nome = nome;
        this.fasciculo = fasciculo;
        this.tombo = acervo.length + 1;
        acervo.push(this);
    }
    getBibliografia() {
        return "Nome: " + this.fasciculo + " Fascículo" + this.fasciculo;
    }

}

class Acervo {
    constructor() {
        this.acervo = [];
    }
    cadastrar(tipo, autor, titulo, volume, nome, fasciculo) {
        if (tipo == 'Livro')
            return new Livro(autor, titulo, volume);
        else if (tipo == 'Revista')
            return new Revista(nome, fasciculo);
        else
            return "Opção não existente";
    }

    bibliografia() {
        if (acervo.length === 0) {
            return 'Nenhum item catalogado';
        }
        return acervo[acervo.length - 1].getBibliografia();
    }

    getLastTombo() {
        return acervo[acervo.length - 1].tombo;
    }

    setTombo(value) {
        this.tombo = value;
    }

    getTombo() {
        return this.tombo;
    }

    setAno(value) {
        this.ano = value;
    }

    getAno() {
        return this.ano;
    }

    setEditora(value) {
        this.editora = value;
    }

    getEditora() {
        return this.editora;
    }

    setLocal(value) {
        this.local = value;
    }

    getLocal() {
        return this.local;

    }
}

const acervo = new Acervo();

console.log(acervo.getLastTombo());

acervo.cadastrar('Livro', 'Autor', 'Titulo', 1, '', 1);

console.log(acervo.bibliografia());

acervo.cadastrar('Revista', '', '', 1, 'Nome', 1);

console.log(acervo.bibliografia());
