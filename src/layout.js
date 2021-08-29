import React from 'react';
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar justify-content-center">
        <span className="h1 pt-2 m-2 text-center">Currency Converter & Exchange Rates</span>
      </nav>
      <div className="container app-body pt-3">
        {props.children}
      </div>
      <footer className="footer text-center p-4">
        <div>
          <span className="text-white">Portfolio: <a className="text-white" href="" target="_blank">xyz@example.com</a></span>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Layout;