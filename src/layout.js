import React from 'react';
const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar justify-content-center">
        <span className="h1">Currency Exchange Rates</span>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="footer text-center p-3">
        <div>
          <span>Portfolio: <a href="" target="_blank">xyz@example.com</a></span>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Layout;