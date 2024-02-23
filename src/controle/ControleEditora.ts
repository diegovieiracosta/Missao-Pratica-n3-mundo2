import Editora from '../modelo/Editora';

class ControleEditora {
    editoras: Editora[];

    constructor() {
        this.editoras = [];
        this.editoras.push(new Editora(1, 'Editora A'));
        this.editoras.push(new Editora(2, 'Editora B'));
        this.editoras.push(new Editora(3, 'Editora C'));
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editora = this.editoras.find(editora => editora.codEditora === codEditora);
        return editora ? editora.nome : undefined;
    }

    getEditoras(): Editora[] {
        return this.editoras;
    }
}

export default ControleEditora;
