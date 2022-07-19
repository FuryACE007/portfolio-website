import React from "react";

const Footer = () => {
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
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
