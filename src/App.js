
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import DemoAxios from './pages/DemoAxios/DemoAxios';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />

        {/* <Route render={()=>{

          return <div>
            <Header/>
            ádsadasdsad
          </div>
        }} exact path="/home"/> */}

        <Route exact path="/detail" component={Detail} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/register" component={Register} />

        <Route exact path="/axios" component={DemoAxios} />


        <Route path="/" component={Home} />
      </Switch>

    </BrowserRouter>

  );
}

export default App;
