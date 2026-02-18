import TopNavbar from "./TopNavbar";
import MainNavbar from "./MainNavbar";
import Hero from "./Hero";
import Clients from "./Clients";

export default function Header() {
  return (
    <header>
      <TopNavbar />
      <MainNavbar />
      <Hero />
      <Clients />
    </header>
  );
}