import { useEffect } from "react";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

// eslint-disable-next-line react/prop-types
export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    console.log(title);
    document.title = `${title} / cinemate`;
  });

  return (
    <main>
      <section className="max-w-7xl mx-auto p-2">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
