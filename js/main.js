// search btn
function movieSearch() {
    let search = document.getElementById('searchInput').value;
    let btn = document.getElementById('searchBtn').value;
    alert('검색 중 이니까 잠시만 기다려주시와요~^^');

    
}

// inputBox 값 입력 후 엔터!
document.addEventListener("searchInput"), function (event) {
  if (event.keyCode === 13) {
      alert('검색 중 이니까 잠시만 기다려주시와요~^^');
  }
};


// movie api -> 이 api를 어떻게 출력하는지 방법을 모르겠습니다..
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzNlMTczZGZhNzZjYmExZDRlMjI0NmVkYzc1OWJmYyIsInN1YiI6IjY0NzA5ZTVmMzM2ZTAxMDE0YjYyN2IxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jGI4bhu_QNAI-xKeg_09SQ2di7vIAI_DmwZbHFTex1M'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));



