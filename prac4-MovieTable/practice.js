const movies = [
    {
        movie: "LOTR",
        quantity: "17",
        actions: "Jump"
    },
    {
        movie: "HP",
        quantity: "2",
        actions: "Hello"
    },
    {
        movie: "GOT",
        quantity: "8",
        actions: "Cool"
    },
]

const movieRow = document.querySelector('.movie-row-data')

const buldMovieRow = (movies) => {
    movies.forEach(movie => {
        let row = 
        `<tr>
            <td>${movie.movie}</td>
            <td>${movie.quantity}</td>
            <td>${movie.actions}</td>
        </tr>`
        
        movieRow.innerHTML += row;
    });
}

buldMovieRow(movies);
// movieRow.deleteRow(2)


