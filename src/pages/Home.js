import { useEffect } from "react";
import HomeLoggedOut from "../components/home/HomeLoggedOut";
import HomeClient from "../components/home/HomeClient";
import HomeAdmin from "../components/home/HomeAdmin";
import authService from "../service/auth.service";


function Home() {
    var display=<HomeClient />;
    useEffect(() => {
        const token = authService.getToken();
        if (token) {
          const role = token.authorities[0].authority;
          if (role === "ROLE_CLIENT") {
            display=<HomeClient />;
          } else {
            display=<HomeAdmin />;
          }
        } else {
            display=<HomeLoggedOut />;;
        }
      }, []);

  return (
    <div className="container_margin">
      {display}
    </div>
  );
}

export default Home;
