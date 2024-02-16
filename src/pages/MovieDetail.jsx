import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import placeholderImage from "../assets/placeholder.jpg";

// eslint-disable-next-line react/prop-types
export const MovieDetail = () => {
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : placeholderImage;

  useEffect(() => {
    const fetchMovie = async () => {
      const response =
        await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b3f172ce34c53fa05106198c37522c98
      `);
      const jsonData = await response.json();
      setMovie(jsonData);
      console.log(jsonData);
    };
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = `${movie.title} / cinemate`;
  });
  return (
    <main>
      <section className="flex justify-center gap-10 flex-wrap py-5">
        <div className="border max-w-xs	rounded">
          <img className="rounded" src={image} alt={movie.title} height={350} />
        </div>
        <div className="max-w-xl text-gray-700 text-lg dark:text-white other:text-left">
          <h1 className="pb-4 text-4xl font-bold text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="py-4">{movie.overview}</p>
          {movie.genres ? (
            <p className="py-4 flex flex-wrap">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="p-2  mr-2 border border-gray-200 rounded dark:border-gray-700"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 font-bold text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="font-medium text-gray-900 dark:text-white">
              {movie.vote_count} views
            </span>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime} min</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {movie.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
