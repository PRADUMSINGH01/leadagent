// pages/index.jsx
import MovieCard from "../../components/MoviesCom/MovieCard";
export default function page() {
  const sampleMovie = {
    title: "Inception",
    imdbRating: 8.8,
    thumbnail: "/inception-thumbnail.jpg", // make sure this image exists in your public folder
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <MovieCard movie={sampleMovie} />
    </div>
  );
}
