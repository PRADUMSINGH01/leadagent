// components/MovieCard.jsx
import Head from "next/head";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function MovieCard({ movie }) {
  // movie should be an object like:
  // { title: 'Movie Title', imdbRating: 7.8, thumbnail: '/path/to/image.jpg' }
  // For the star rating, we'll show a maximum of 5 stars.
  // We map the IMDb rating (e.g., 7.8) to a 5-star scale.
  const maxStars = 5;
  const starCount = Math.round((movie.imdbRating / 10) * maxStars);

  return (
    <>
      <Head>
        <title>
          {movie.title} | IMDb Rating: {movie.imdbRating}
        </title>
        <meta
          name="description"
          content={`Discover ${movie.title} with an IMDb rating of ${movie.imdbRating}. Check out the movie thumbnail and detailed rating.`}
        />
      </Head>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <div className="relative h-64 w-full">
          <Image
            src={movie.thumbnail}
            alt={`Thumbnail for ${movie.title}`}
            layout="fill"
            objectFit="cover"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
          <div className="flex items-center">
            {[...Array(maxStars)].map((_, index) => (
              <FaStar
                key={index}
                className={`h-5 w-5 ${
                  index < starCount ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">{movie.imdbRating} / 10</span>
          </div>
        </div>
      </div>
    </>
  );
}
