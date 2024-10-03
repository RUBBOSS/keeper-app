import "./Footer.css";

const date = new Date();
const Year = date.getFullYear();   

function Footer() {
  return (
    <footer>
      <p>
        @copyright {Year} <span> Ruben</span> All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;