
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchGetDetails } from "../../utilities/api";
import { TiStar } from "react-icons/ti";
import { MdCelebration } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

const TvShowDetails = () => {
  const { id } = useParams();
  const [tvShowDetails, setTvShowDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchGetDetails(id);
        console.log(details);
        setTvShowDetails(details);
      } catch (error) {
        console.error("Error fetching TV show details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!tvShowDetails) {
    return <p className="mt-20">Loading...</p>;
  }
  return (
    <div className="mt-14 py-8 bg-navy-blue">
      <div className="flex justify-center items-center gap-4 p-4">
        <h1 className="underline text-purple-800 font-bold text-4xl">
          {tvShowDetails.Title}
        </h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row mt-6 p-2">
        <img
          className="w-full lg:w-1/3 object-contain bg-navy-blue border-2"
          src={tvShowDetails.Poster}
          alt={tvShowDetails.Title}
        />
        <div className="lg:ml-8 w-full">
          <p className="text-white text-2xl font-semibold underline">Details</p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-8 mt-4">
              <p className="text-green-500 font-semibold text-xl">
                {tvShowDetails.BoxOffice}
              </p>
              <p className="text-white text-lg font-semibold flex">
                Rating : {tvShowDetails.imdbRating}
                <TiStar className="text-yellow-500 text-3xl" />
              </p>
            </div>
            <p className="flex justify-start gap-4 items-center text-gray-400">
              {tvShowDetails.Year} |{" "}
              <span className="bg-slate-400 text-white hover:bg-slate-700 rounded-2xl p-2">
                {tvShowDetails.Runtime}
              </span>{" "}
              |{" "}
              <span className="flex items-center align-middle">
                {tvShowDetails.Released}
                <MdCelebration className="text-2xl text-yellow-500" />
              </span>
            </p>
            <p className="text-gray-500 bg-purple-400 rounded-full w-44 p-2">
              {tvShowDetails.Genre}
            </p>
            <p className="text-xl font-medium text-teal-600">
              {tvShowDetails.Language}
            </p>
            <p className="text-xl font-medium text-blue-600">
              {tvShowDetails.Country}
            </p>
            <p className="text-lg text-white">
              <span className="underline">Plot :</span> {tvShowDetails.Plot}
            </p>
            <p className="text-lg text-white">
              <span className="underline">Actors :</span> {tvShowDetails.Actors}
            </p>
            <p className="text-lg text-white">
              <span className="underline">Writer :</span> {tvShowDetails.Writer}
            </p>
            <p className="text-lg text-white">
              <span className="underline">Director :</span>{" "}
              {tvShowDetails.Director}
            </p>
            <Link
              to="/tvshows"
              className="flex justify-center gap-8 items-center bg-black rounded-full text-white w-42 p-2"
            >
              <IoMdArrowRoundBack />
              Go To TV Shows Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShowDetails;
