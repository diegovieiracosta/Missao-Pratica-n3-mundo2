import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Lista de Livros</Link>
                </li>
                <li>
                    <Link to="/dados">Dados do Livro</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
