
import { Link } from "react-router-dom";
import logo from "../../assets/8400_5_2_04.jpg" 
import {Nav} from "../Nav/Nav";
import "./Header.css";


export const Header = () => {
  
   return (
    <header>
        <div className="logo-container">
        <Link to={"/"}>
            <img src={logo} alt="logo react" />
            <span>React Campeon</span>
        </Link>
        </div>
        <Nav/>
    </header>
  );
};



