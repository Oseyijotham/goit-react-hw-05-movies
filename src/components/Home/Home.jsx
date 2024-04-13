import { trendingMovies } from '../API/Api';


export const Home = () => {
  
    return (
      <main>
            {
                trendingMovies()
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err))
            }
      </main>
    );
};