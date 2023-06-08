// search part
function movieSearch(clk) {
  const movieCards = document.querySelectorAll(".movieCard");

  movieCards.forEach((card) => {
    const title = card.childNodes[2]['nextSibling']['innerText'].split(' ').join('').toLowerCase();

    for (let i = 0; i < title.length; i++) {
      if (title.includes(`${clk}`)) {
        card.style.display = "grid";
      } else {
        card.style.display = "none";
      }
    }
  });
}

document.addEventListener('keyup', function (event) {
  let clk = document.getElementById("searchInput").value.toLowerCase();

  movieSearch(clk);
})

// ===================================================

// movie api part
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDFjNjgxZjk3MjYyMjY4NWFkYjJkZWQ3MGVlNWU2ZiIsInN1YiI6IjY0NzZkZjNjMTJjNjA0MDBlMWRjNmNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqyMjkuWeOJzkj7UauO06VhfP3Ohg7aD0LigJgVHgyw",
  },
};

let movies;
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .catch((err) => console.error(err))
  .then((data) => {
    movies = data["results"];
    
    cardView();

    function cardView() {
      const cardList = document.querySelector(".cardList");
      cardList.innerHTML = "";

      movies.forEach((x) => {
        let _id = x["id"];
        let _title = x["title"];
        let _overview = x["overview"];
        let _poster_path = x["poster_path"];
        let _vote_average = x["vote_average"];

        // html start
        let temp_html = 
          `
            <div class="movieCard" data-id="${_id}">
                <img src="https://image.tmdb.org/t/p/w500${_poster_path}">
                <h3>${_title}</h3>
                <p>${_overview}</p>
                <p class="rate">Rating: ${_vote_average}</p>
            </div>
          `;
        // 가장 마지막 노드에 붙여주기
        cardList.insertAdjacentHTML("beforeend", temp_html);
      });

      // card Alert
      const movieCards = document.querySelectorAll(".movieCard");
      movieCards.forEach((card) => {
        card.addEventListener("click", function () {
          // card 속성
          let movieId = this.getAttribute("data-id");
          alert(`영화 id: ${movieId}`);
        });
      });
    }
  });

