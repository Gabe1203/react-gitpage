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
import ToDoPage from './pages/ToDoPage';
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
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} exact/>
              <Route path="/resume" component={ResumePage} exact/>
              <Route path="/portfolio" component={PortfolioPage} exact/>
              <Route path="/contact" component={ContactPage} exact/>
              <Route path="/todo" component={ToDoPage} />
              <Route path="/services" component={ServicesPage} />
              <Route path="/projectlist" component={ProjectListPage} exact />
              <Route path="/project/:name" component={ProjectPage} />
              <Route component={NotFoundPage} />
        </Switch>
  </Router>
  );
}



export default App;
