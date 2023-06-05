// movie api
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
  
        //가져온 api의 데이터들을 할당시켜주기
        movies.forEach((x) => {
          let _id = x["id"];
          let _title = x["title"];
          let _overview = x["overview"];
          let _poster_path = x["poster_path"];
          let _vote_average = x["vote_average"];
  
          // html 시작
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