// Home.tsx

import "./Home.scss";
import Theme from "./Theme";
import Introduction from "../Pages/intro"


const Home = () => {
  return (
    <div className="Container">
      
      
      <div className="navbar">
        <ul>
          <li><Introduction/> Introduction</li>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <Theme />
        </ul>
      </div>
    </div>
  );
};

export default Home;
