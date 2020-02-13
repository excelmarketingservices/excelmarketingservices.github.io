import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small blue pt-4 bg-dark text-white">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Excel Marketing Services</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Amet?
                </p>
              </div>
              <hr className="clearfix w-100 d-md-none pb-3" />
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.google.com">Link 1</a>
                  </li>
                  <li>
                  <a href="https://www.google.com">Link 2</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="http://excelmarketingservices.now.sh/">Website</a>
                  </li>
                  <li>
                    <a href="https://instagram.com">Instagram</a>
                  </li>
                  <li>
                    <a href="https://facebook.com">Facebook</a>
                  </li>
                  <li>
                    <a href="https://linkedin.com">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2020: Designed & Developed by
            <a href="https://vipulchodankar.github.io"> Vipul Chodankar</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
