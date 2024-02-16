import { useEffect } from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../assets/error_page.jpg";
// eslint-disable-next-line react/prop-types
export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page not found / cinemate`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col justify-center items-center my-7">
          {/* <p className="mb-2 dark:text-white">404 Page Not Found!</p> */}
          <img
            src={pageNotFound}
            alt="Page not found"
            width={600}
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div className="flex justify-center items-center">
          <Link to="/">
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded">
              Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
