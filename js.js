let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    initialSlide : 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  let url = "https://api.themoviedb.org/3/movie/popular?api_key=78828dca7949b70ca50313e4d49660d1&language=en-US&page=1&fbclid=IwAR0PuIxpwmBg_C7v1cSacQe37ekmHfTxzk9jpSqed1b1g-Zh_dRkKuJF0Vs"
  fetch(url)
  .then(response => response.json())
  .then(data => initMovies(data.results))

  let initMovies = (movies)=>{
    console.log(movies, "data")
    movies.forEach(movie => {
      console.log(movie);
      let movieList = document.getElementById('moviesUl')
      let movieLi = document.createElement("li");
      let imgUrl = 'https://image.tmdb.org/t/p/original'

      movieLi.innerHTML = 
      `
      <img src="${imgUrl+movie.poster_path}" width="220" class="poster"></img>
      <div class="movieInfo" id="${movie.id}">
        <p>Title: ${movie.original_title}</p>
        <p>Rate: ${movie.vote_average}</p>
        <p>Date: ${movie.release_date}</p>
      </div>
      ` // width shecvale!!!!!
      
      document.getElementById(movie.id);
      // let hoverCss = `#${movie.id}:hover{ display: block; }`;
      movieLi.addEventListener("mouseover", function() {
        let movieHover = document.getElementById(movie.id);
        movieHover.style.display = "block";
      })
     
      movieLi.addEventListener("mouseleave", function() {
        let movieHover = document.getElementById(movie.id);
        movieHover.style.display = "none";
      })
     


      movieList.appendChild(movieLi);
    });

  }


