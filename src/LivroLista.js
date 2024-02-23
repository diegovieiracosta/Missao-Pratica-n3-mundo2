import React, { useState, useEffect } from 'react';
import ControleEditora from './controle/ControleEditora';
import ControleLivros from './controle/ControleLivros';

const controleEditora = new ControleEditora();
const controleLivros = new ControleLivros();

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setLivros(controleLivros.obterLivros());
        setCarregado(true);
    }, []);

    const excluirLivro = (codigo) => {
        controleLivros.excluir(codigo);
        setCarregado(false);
    };

    return (
        <div>
            <h1>Lista de Livros</h1>
            {carregado ? (
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Editora</th>
                            <th>Autores</th>
                            <th>Resumo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(livro => (
                            <tr key={livro.codigo}>
                                <td>{livro.titulo}</td>
                                <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
                                <td>{livro.autores.join(', ')}</td>
                                <td>{livro.resumo}</td>
                                <td>
                                    <button onClick={() => excluirLivro(livro.codigo)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default LivroLista;