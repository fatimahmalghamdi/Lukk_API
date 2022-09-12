import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <MainPage/>
        </Route>

        <Route exact path="/:text/:id">
          <MainPage />
        </Route>

        <Route exact path="/error">
          <ErrorPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
