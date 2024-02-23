import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './pages/LivrosDados';
import Menu from './Menu';

const App: React.FC = () => {
  return (
    <Router>
      <div>
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

        <Route>
          <Route path="/dados">
            <LivroDados />
          </Route>
          <Route path="/">
            <LivroLista />
          </Route>
        </Route>
      </div>
    </Router>
  );
};

export default App;
