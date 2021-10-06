import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectPage from './pages/ProjectPage';
import Navbar from './NavBar';
import NavBarItem from './NavBarIItem';
import NotFoundPage from './pages/NotFoundPage'
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from "./pages/ContactPage";
import ServicesPage from './pages/ServicesPage'
import { ReactComponent as MenuIcon } from './images/list.svg'
import Dropdown from './Dropdown'
import { CSSTransition } from 'react-transition-group'


function App() {
  return (
    <Router>
        <Navbar>
          <NavBarItem icon={ <MenuIcon /> }>
            <Dropdown/>
          </NavBarItem>
        </Navbar>
        <Switch>
              <Route path="/react-gitpage/" component={HomePage} exact />
              <Route path="/react-gitpage/about" component={AboutPage} exact/>
              <Route path="/react-gitpage/resume" component={ResumePage} exact/>
              <Route path="/react-gitpage/portfolio" component={PortfolioPage} exact/>
              <Route path="/react-gitpage/contact" component={ContactPage} exact/>
              <Route path="/react-gitpage/services" component={ServicesPage} />
              <Route path="/react-gitpage/projectlist" component={ProjectListPage} exact />
              <Route path="/react-gitpage/project/:name" component={ProjectPage} />
              <Route component={NotFoundPage} />
        </Switch>
  </Router>
  );
}



export default App;
