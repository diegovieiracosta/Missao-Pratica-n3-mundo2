import React from 'react';

const LivroDados = () => {
    return (
        <div>
            <h1>Dados do Livro</h1>
            <form>
                <div>
                    <label htmlFor="titulo">Título:</label>
                    <input type="text" id="titulo" name="titulo" readOnly value="Título do Livro" />
                </div>
                <div>
                    <label htmlFor="editora">Editora:</label>
                    <input type="text" id="editora" name="editora" readOnly value="Editora do Livro" />
                </div>
                <div>
                    <label htmlFor="autores">Autores:</label>
                    <input type="text" id="autores" name="autores" readOnly value="Autor 1, Autor 2" />
                </div>
                <div>
                    <label htmlFor="resumo">Resumo:</label>
                    <textarea id="resumo" name="resumo" readOnly>Resumo do livro</textarea>
                </div>
            </form>
        </div>
    );
};

export default LivroDados;
