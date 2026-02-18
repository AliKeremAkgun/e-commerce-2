import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Content from "../components/Content";
import Features from "../components/Features";
import FeaturedPosts from "../components/FeaturedPosts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <Content />
      <Features />
      <FeaturedPosts />
    </>
  );
}