import { useState, useEffect } from "react";
import {
  Loader,
  Header,
  Home,
  About,
  Skills,
  Services,
  Journey,
  Contact,
  Work,
  Footer,
} from "./components/";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      {loading === false ? (
        <div>
          <Header />
          <main>
            <Home />
            <About />
            <Skills />
            <Services />
            <Journey />
            <Work />
            <Contact />
            <Footer />
          </main>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
