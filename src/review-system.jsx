import React, { useState } from 'react';
import './index.css';

const movies = [
    { name: 'Chhava', rating: 0, votes: 0, images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEy9db_CAZjcWBh3vyVg3QJuDy1XUqRbqkDQ&s' },
    { name: 'Fateh', rating: 0, votes: 0, images: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Fateh_film_poster.jpg' },
    { name: 'Mission Impossible', rating: 0, votes: 0, images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCG9hAcICjUJlrKw4SIVaVqp_kwMpYfGKEyA&s' },
    { name: 'Minion', rating: 0, votes: 0, images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkpVUA5s_zsqSV8I9xzqplfHVwwVtR4Nh2Q&s' },
    { name: 'Despicable Me', rating: 0, votes: 0, images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNgLZXCfqWxjOf6A8ggILG_131_tvncngsw&s' },
    { name: 'Hera Pheri', rating: 0, votes: 0, images: 'https://rukminim3.flixcart.com/image/850/1000/xif0q/poster/n/q/l/medium-phir-hera-pheri-movie-framed-poster-for-room-and-home-original-imagnyzeycgkfpwf.jpeg?q=20&crop=false' },
    { name: 'De Dana Dan', rating: 0, votes: 0, images: 'https://pics.filmaffinity.com/de_dana_dan-422638651-large.jpg' },
    { name: 'Hungama', rating: 0, votes: 0, images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkStHooYyaYE01WMJEiAvV_KN6lj4RrAgF0A&s' },
    { name: 'Kesari', rating: 0, votes: 0, images: 'https://m.media-amazon.com/images/M/MV5BMmUyYzA3MGQtNzE0Zi00Nzg0LTk4NTAtNDQ3YWQ4M2IwMWYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
];

const ReviewSystem = () => {
    const [movieList, setMovieList] = useState(movies);

    const handleRating = (movieName, rating) => {
        setMovieList((prevMovies) =>
            prevMovies.map((movie) => {
                if (movie.name === movieName) {
                    const newVotes = movie.votes + 1;
                    const newRating = ((movie.rating * movie.votes) + rating) / newVotes;
                    return { ...movie, rating: newRating, votes: newVotes };
                }
                return movie;
            })
        );
    };

    const rankedMovies = [...movieList].sort((a, b) => b.rating - a.rating);

    return (
        <div className="container">
            <h1>Movie Review System</h1>
            <div className="movie-list">
                {rankedMovies.map((movie) => (
                    <div key={movie.name} className="movie-item">
                        <img src={movie.images} alt={movie.name} className="movie-image" />
                        <h2>{movie.name}</h2>
                        <p className="rating">{movie.rating.toFixed(1)}</p>
                        <p>Votes: {movie.votes}</p>
                        <div className="rating-buttons">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    key={num}
                                    className="rating-button"
                                    onClick={() => handleRating(movie.name, num)}
                                >
                                    Rate {num}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSystem;