import Sidebar from "components/sidebar/Sidebar";
import Bottombar from "components/BottomBar/Bottombar";
import Content from "components/content/Content"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="content">
        <Sidebar />
        <Content />
        </div>
        <Bottombar />
    </Router>
  );
}

export default App;
