import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {FindUsernameView} from "components/main/find";

function App() {
  return (
    <div className="App">
        {FindUsernameView()}
    </div>
  );
}

export default App;
