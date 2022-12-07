import { Link } from "react-router-dom";

function Nav() {
  return (
    // <article>
    <ul id="nav_ul">
      <li>
      <Link className="App-link" to="/">
        Home Page 
      </Link>
      </li>
      <li>

      <Link className="App-link" to="order">
        Place an order 
      </Link>
      </li>
            <li>

      <Link className="App-link" to="stores">
        Our Stores 
      </Link>
      </li>
    </ul>
    // {/* </article> */}
  );
}

export default Nav;
