import { Link } from "react-router-dom";
import PageNav from "@/components/PageNav";
import AppNav from "@/components/AppNav.jsx";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      {/*className="test" -> it works without importing the related css module*/}
      <h1>World Wise</h1>
      <Link to="/app"> Go to App</Link>
    </div>
  );
}

export default Homepage;
