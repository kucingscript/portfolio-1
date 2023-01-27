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
} from "./components/";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
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
            <Contact />
          </main>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
