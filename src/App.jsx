import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import ShopCards from "./components/ShopCards";
import ProductCards from "./components/ProductCards";
import Content from "./components/Content";
import Features from "./components/Features";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";

import ShopPage from "./components/pages/ShopPage";
import ProductPage from "./components/pages/ProductPage";
import ContactPage from "./components/pages/ContactPage";
import TeamPage from "./components/pages/TeamPage";
import AboutUs from "./components/pages/AboutUs";
import BlogPage from "./components/pages/BlogPage";

function HomeContent() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <Hero />
      <Clients />
      <ShopCards />
      <ProductCards />
      <Content />
      <Features />
      <FeaturedPosts />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContent} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/blog" component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default App;