import React from 'react';

const Footer = () => (
  <footer className="relative bg-gray-300 pt-10 pb-3">
    <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-5">
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
          <h5 className="text-lg mt-3 mb-2 text-gray-700">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="my-6">
            <a href="https://twitter.com/BnademOverFlow" target="_blank">
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-1"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
            </a>
            <a href="https://www.facebook.com/BnademOverflowEvents" target="_blank">
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-1"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
            </a>
            <a href="https://discord.gg/bnademoverflow" target="_blank">
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-1"
                type="button"
              >
                <i className="flex fab fa-discord"></i>
              </button>
            </a>
            <a href="https://github.com/BnademOverflow/BnademOverflow" target="_blank">
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-1"
                type="button"
              >
                <i className="flex fab fa-github"></i>
              </button>
            </a>
            <a href="https://www.twitch.tv/bnademoverflow" target="_blank">
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-1"
                type="button"
              >
                <i className="flex fab fa-twitch"></i>
              </button>
            </a>
            <a href="https://www.linkedin.com/company/bnademoverflow" target="_blank">
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-1"
                type="button"
              >
                <i className="flex fab fa-linkedin"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                Useful Links
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="#About"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/BnademOverflow/BnademOverflow"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                Other Resources
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/BnademOverflow/BnademOverflow/blob/main/LICENSE"
                    target="_blank"
                  >
                    AGPL-3.0 License
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/BnademOverflow/BnademOverflow/blob/main/docs/Terms_%26_Conditions.md"
                    target="_blank"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/BnademOverflow/BnademOverflow/blob/main/docs/Privacy_Policy.md"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/BnademOverflow/BnademOverflow/blob/main/docs/Code_of_Conduct.md"
                    target="_blank"
                  >
                    Code Of Conduct
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-400" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-gray-600 font-semibold py-1">
            Copyright © {new Date().getFullYear()}{' '}
            <a href="https://bnademoverflow.com/" className="text-gray-600 hover:text-gray-900">
              BnademOverFlow
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
