import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../stores/actionCreator";
import { getGenres } from "../stores/actionCreator";

const Dashboard = () => {

    const { movies } = useSelector((state) => state.movieReducer);
    const { genres } = useSelector((state) => state.genreReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getGenres());
        // console.log(movies);
    }, [])

    return (
        <div className="container mx-auto mt-12">
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total Movies
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        {movies.length}
                    </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total Genres
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        {genres.length}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
