// search btn
function movieSearch() {
    let search = document.getElementById('searchInput').value;
    let btn = document.getElementById('searchBtn').value;
    alert('검색 중 이니까 잠시만 기다려주시와요~^^');

    
}

// inputBox 값 입력 후 엔터!



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
//API데이터 가져오기
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .catch((err) => console.error(err))
  .then((data) => {
    movies = data["results"];
    // querySelector('a') ->HTML상의 a 반환한다
    // '태그' , '.클래스' , '#id' 형식으로 사용
    cardview();

    function cardview() {
      const cardList = document.querySelector("main.cardList");
      //다시 html로 넣어준다
      cardList.innerHTML = "";

      //가져온 api의 데이터들을 할당시켜주기
      movies.forEach((x) => {
        //가져온 api의 데이터들을 할당시켜주기
        let _id = x["id"];
        let _title = x["title"];
        let _overview = x["overview"];
        let _poster_path = x["poster_path"];
        let _vote_average = x["vote_average"];
        //템플릿에 넣어서 만들어주기
        let temp_html = 
          `
            <div class="movieCard" data-id="${_id}">
                <img src="https://image.tmdb.org/t/p/w500${_poster_path}">
                <h3>${_title}</h3>
                <p>${_overview}</p>
                <p>Rating: ${_vote_average}</p>
            </div>
          `;
        // 가장 마지막 노드에 붙여주라는 말
        cardList.insertAdjacentHTML("beforeend", temp_html);
      });

      //카드 누르면 id 알람으로 뜨는 기능
      const movieCards = document.querySelectorAll(".movie-card");
      movieCards.forEach((card) => {
        card.addEventListener("click", function () {
          //속성 가져오기
          let movieId = this.getAttribute("data-id");
          alert(`영화 id: ${movieId}`);
        });
      });
    }
  });

