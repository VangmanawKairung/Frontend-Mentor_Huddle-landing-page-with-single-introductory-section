import "./App.scss";
import huddleLogo from "../src/assets/logo.svg";
import pageMockup from "../src/assets/illustration-mockups.svg";
import Info from "./components/Info";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="container">
      <img src={huddleLogo} alt="Huddle logo" className="logo" />
      <div className="page-info">
        <img src={pageMockup} alt="Page mockup on desktop and mobile" />
        <Info />
      </div>
      <div className="contact-center">
        <Contact />
      </div>
    </main>
  );
}

export default App;
