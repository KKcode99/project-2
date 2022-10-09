const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,    
};

const movies1 = prompt("Один из просмотренных последних фильмов?","");
const rait1 = prompt("На сколько его оцените","");
const movies2 = prompt("Один из просмотренных последних фильмов?","");
const rait2 = prompt("На сколько его оцените","");

personalMovieDB.movies[movies1] = rait1;
personalMovieDB.movies[movies2] = rait2;

console.log(personalMovieDB);
