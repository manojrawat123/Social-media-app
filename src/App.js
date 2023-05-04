import Myprofile from "./component/Profile/Myprofile";
import Sidebar from "./component/Sidebar/sidebar";
import Topbar from "./component/topbar/Topbar";
import  "./input.css"

function App() {
  return (
    <>
    <Topbar />
    <div className="grid grid-cols-5">
      <Sidebar />
      <Myprofile />

     
        
      
    </div>
    </>
  );
}

export default App;
