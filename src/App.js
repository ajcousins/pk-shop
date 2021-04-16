import "./App.css";
import { Parallax } from "react-parallax";
import Navigation from "./components/Navigation";
import OH from "./assets/00_OH-blue.jpg";

function App() {
  return (
    <div>
      <Navigation />
      <Parallax bgImage={OH} strength={300}>
        <div style={{ height: "100vh" }}>
          <div>Text inside paralax</div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}>
        <div>Section</div>
      </div>
    </div>
  );
}

export default App;
