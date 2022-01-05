import './App.css';
import TodoList from './components/TodoList/TodoList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <div className="todo-app">
              <TodoList />
            </div>
          </Route>

          <Route path="/home">
            <div className="todo-app">
              <TodoList />
            </div>
          </Route>

          <Route path="/login">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
