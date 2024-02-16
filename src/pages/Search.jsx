import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";

// eslint-disable-next-line react/prop-types
export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search result for ${queryTerm} / cinemate`;
  });
  return (
    <main>
      <section className="py-7 ml-6">
        <p className="text-3xl font-extrabold	 text-gray-700 dark:text-white">
          {movies.length === 0
            ? ` No result found for ${queryTerm}`
            : `Results for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto p-2">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
