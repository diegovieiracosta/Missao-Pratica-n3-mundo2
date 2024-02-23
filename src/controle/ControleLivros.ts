import Livro from '../modelo/Livros';

class ControleLivros {
    livros: Livro[];

    constructor() {
        this.livros = [];
        this.livros.push(new Livro(1, 1, 'Livro A', 'Resumo do Livro A', ['Autor 1', 'Autor 2']));
        this.livros.push(new Livro(2, 2, 'Livro B', 'Resumo do Livro B', ['Autor 3']));
        this.livros.push(new Livro(3, 3, 'Livro C', 'Resumo do Livro C', ['Autor 4', 'Autor 5']));
    }

    obterLivros(): Livro[] {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const codigo = this.livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0) + 1;
        livro.codigo = codigo;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = this.livros.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}

export default ControleLivros;
