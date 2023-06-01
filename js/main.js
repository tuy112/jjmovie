// search
function movieSearch() {
    let search = document.getElementById()
}

// inputBox 값 입력 후 엔터!
document.addEventListener("#searchInput"), function (event) {
    if (event.keyCode === 13) {
        alert('검색 중 입니다. 잠시만 기다려주셩^^');
    }
};


// movie api
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


// 최종적으로 함수가 출력되는 공간
keyevent();
