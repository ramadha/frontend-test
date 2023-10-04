import { movieGenres, tvGenres } from "@/clients/tmdb";
import { PeopleCardView } from "./resultViews/PeopleCardView";
import { MovieTvCardView } from "./resultViews/MovieTvCardView";

interface KnownFor {
  title: string;
}

export const SearchResultItem = async ({
  title = "",
  overview = "",
  media_type,
  release_date,
  vote_average,
  genre_ids,
  name = "",
  known_for_department = "",
  first_air_date,
  known_for,
}: {
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: Array<number>;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  name: string;
  known_for_department: string;
  first_air_date: string;
  known_for: Array<KnownFor>;
}) => {


  if (media_type === 'movie') {
    const { genres } = await movieGenres();

    const genreNames = genre_ids.map((genreId) => {
      const { name } =
        genres.find((currentGenre) => currentGenre.id === genreId) ?? {};
      return name!;
    });

    return (
      <MovieTvCardView title={title} cardLabel={'Movie'} date={release_date} voteAverage={vote_average} overview={overview} genreNames={genreNames} />
    );
  }

  if (media_type === 'person') {
    const knownForItems = known_for.map((item) => {
      return item.title;
    });

    return (
      <PeopleCardView peopleName={name} knownForDepartment={known_for_department} knownForItems={knownForItems} />
    );
  }

  if (media_type === 'tv') {
    const { genres } = await tvGenres();

    const genreNames = genre_ids.map((genreId) => {
      const { name } =
        genres.find((currentGenre) => currentGenre.id === genreId) ?? {};
      return name!;
    });

    return (
      <MovieTvCardView title={name} cardLabel={'TV Show'} date={first_air_date} voteAverage={vote_average} overview={overview} genreNames={genreNames} />
    );
  }

};
