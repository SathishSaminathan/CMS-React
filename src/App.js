import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./AboutUsComponents/AboutUs";
import Blog from "./BlogComponents/Blog";
import Client from "./ClientComponents/Client";
import Contact from "./Contact/ContactComponent";
import Home from "./HomeComponents/Home";
import NavbarMat from "./NavBarMat";
import Service from "./ServiceComponents/Service";
import Testimonials from "./TestimonialComponents/Testimonial";
import WorkShop from "./TrainingWorkshopComponents/WorkShop";
import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <div>
        {/* <Home /> */}
        {/* <AboutUs/> */}
        {/* <Contact/> */}
        {/* <Blog/> */}
        {/* <Testimonials/> */}
        {/* <Client/> */}
        {/* <WorkShop/> */}
        {/* <Service/> */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact" exact component={Contact} />
          {/* <Route path="/blog" exact component={Blog} /> */}
          <Route path="/testimonial" exact component={Testimonials} />
          <Route path="/client" exact component={Client} />
          <Route path="/workshop" exact component={WorkShop} />
          <Route path="/service" exact component={Service} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
