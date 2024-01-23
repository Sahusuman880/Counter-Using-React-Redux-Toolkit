import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Model from "./Components/Model";
import Control from "./Components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./Components/PrivacyMessage";
function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Model>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}

          <Control />
        </div>
      </Model>
    </center>
  );
}

export default App;
