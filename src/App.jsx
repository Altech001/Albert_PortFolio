// import Hero from "./components/hero/Hero";
// import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";

import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import Waves from "./components/waves/waves";
import ScrollVelocity from "./components/scroll/scroll";
import SplashCursor from "./components/splashmouse/splashmouse";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div>
      <SplashCursor />
      <Waves
        lineColor="#444"
        backgroundColor="black"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={100}
        xGap={12}
        yGap={36}
      />
      <div className="container">
        <Suspense fallback={"meee..."}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="#home">
              <Hero />
            </section>
          </LazyLoad>
        </Suspense>

        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="#services">

              <Services />
            </section>{" "}
          </LazyLoad>
        </Suspense>
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"600vh"} offset={-100}>
            {/* <section id="#portfolio"> */}
            <Portfolio />
            {/* </section> */}{" "}
          </LazyLoad>
        </Suspense>
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="#contact">
              <Contact />
            </section>{" "}
          </LazyLoad>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
