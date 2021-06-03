
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import About from './pages/About/About';
import DemoAxios from './pages/DemoAxios/DemoAxios';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import UserLogin from './templates/UserTemplate/UserLogin';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}

      <Switch>

        <HomeTemplate component={Home} path="/home"/>
        <HomeTemplate component={About} path="/about"/>

        <UserLogin component={Login} path="/login"/>

        {/* <Route exact component={Home} path="/home" />
        <Route render={(propsRoute) => { //propsRoute: là các thuộc tính .history , location, match

          return <div>
            <Header />


            <About {...propsRoute}/>
            <hr></hr>
            <footer>
              day la footer
            </footer>
          </div>
        }} exact path="/about" /> */}

        {/* //query param */}
        <Route exact path="/detail/:postID" component={Detail} />

        {/* <Route exact path="/login" component={Login} /> */}

        <Route exact path="/register" component={Register} />

        <Route exact path="/axios" component={DemoAxios} />


        <Route path="/" component={Home} />
      </Switch>

    </BrowserRouter>

  );
}

export default App;
