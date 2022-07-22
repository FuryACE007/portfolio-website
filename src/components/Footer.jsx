import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;

  return (
    <>
      <section id="footer">
        <footer className="footer justify-center items-center flex flex-row py-28 mx-auto ">
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-gray-300 text-base">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://www.linkedin.com/in/sudhanshu-shekhar-770678198/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 text-base"
              >
                Sudhanshu Shekhar
              </a>
            </p>
            <div className="grid grid-cols-4 gap-5 my-5 ">
              <a
                href="https://www.linkedin.com/in/sudhanshu-shekhar-770678198/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 text-2xl hover:text-emerald-600 ease-in duration-200"
              >
                {linkedinIcon}
              </a>
              <a
                href="https://twitter.com/Sudhans80825473"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 text-2xl hover:text-emerald-600 ease-in duration-200"
              >
                {twitterIcon}
              </a>
              <a
                href="https://www.instagram.com/sudhanshu_itsglitchy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 text-2xl hover:text-emerald-600 ease-in duration-200"
              >
                {instagramIcon}
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100009864813855"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 text-2xl hover:text-emerald-600 ease-in duration-200"
              >
                {facebookIcon}
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
