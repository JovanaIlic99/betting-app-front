import { useEffect } from "react";
import HomeLoggedOut from "../components/home/HomeLoggedOut";
import HomeClient from "../components/home/HomeClient";
import HomeAdmin from "../components/home/HomeAdmin";

function Home(props) {

 console.log(props.role)
 

  return <div className="container_margin">{props.role === 'ROLE_ADMIN' ? <HomeAdmin /> : props.role === 'ROLE_CLIENT' ?  <HomeClient /> : <HomeLoggedOut /> }</div>;
}

export default Home;
