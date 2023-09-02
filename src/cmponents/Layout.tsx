import { Link, Outlet } from "react-router-dom";
import Counter from "./counter";

export const Layout = () => {
  return (
    <>
      <Counter />
      <h2>Test Routing</h2>
      <header>
        <Link to="/">Home</Link>
        <Link to="/article">Article</Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
      </header>
      <Outlet />
      <footer>Hello Footer</footer>
    </>
  )
}