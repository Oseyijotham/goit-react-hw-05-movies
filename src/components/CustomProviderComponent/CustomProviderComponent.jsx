import { createContext, useContext, useState } from 'react';
import { trendingMovies } from '../API/Api';
import { movieSearchFinder } from '../API/Api';
import { movieDetailsFinder } from '../API/Api';
import { movieReviewsFinder } from '../API/Api';
import { movieCastFinder } from '../API/Api';
import { useEffect } from 'react';


const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [myMovies, setMovies] = useState([]);
    const [filmName, setMovieName] = useState('%20');
    const [movieResults, setMovieResults] = useState([]);
  //const [myMovieId, setMovieId] = useState();
  const [movieDetails, setDetails] = useState();
  const [moviePoster, setPoster] = useState();
  const [filmId, setFilmDetails] = useState();
  const [filmReviews, setFilmReviews] = useState([]);
  const [filmCast, setFilmCast] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    trendingMovies()
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setMovies([...response.results]);
        //console.log(response);
      })
      .catch(error => {
       
        
        console.error(`Error message ${error}`);
      });
  }, []);

     useEffect(() => {
       movieSearchFinder(filmName)
         .then(response => response.json()
         )
         .then(response => {
           setMovieResults([...response.results]);
           //console.log(response.results);
         })
         .catch(error => {
           console.error(`Error message ${error}`);
         });
     }, [filmName]);
    

    useEffect(() => {
        setDetails("");
        setPoster("");
     movieDetailsFinder(filmId)
         .then(response => {
            if (!response.ok) {
              /*loaderMsg.classList.add('hide');
            errorMsg.classList.remove('hide');*/
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
       })
       .then(response => {
         setDetails(response.overview);
         setPoster(response.poster_path);
         setName(response.title);
         //console.log(response);
       })
       .catch(error => {
         console.error(`Error message ${error}`);
       });
  }, [filmId]);
    
    useEffect(() => {
      movieReviewsFinder(filmId)
        .then(response => {
          if (!response.ok) {
            /*loaderMsg.classList.add('hide');
            errorMsg.classList.remove('hide');*/
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(response => {
          setFilmReviews([...response.results]);
          //console.log(response);
        })
        .catch(error => {
          console.error(`Error message ${error}`);
        });
    }, [filmId]);

     useEffect(() => {
       movieCastFinder(filmId)
         .then(response => {
           if (!response.ok) {
             /*loaderMsg.classList.add('hide');
            errorMsg.classList.remove('hide');*/
             throw new Error(`HTTP error! Status: ${response.status}`);
           }
           return response.json();
         })
         .then(response => {
           setFilmCast([...response.cast]);
           console.log(response.cast);
         })
         .catch(error => {
           console.error(`Error message ${error}`);
         });
     }, [filmId]);
    
    

  return (
    <UserContext.Provider
      value={{
        myMovies,
        movieDetails,
        moviePoster,
        filmReviews,
        filmCast,
        movieResults,
        name,
        setFilmDetails,
        setMovieName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
