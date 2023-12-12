import { useCallback } from "react";
import { Card } from "./components/Card";
import useFetchRepos from "./queries/repo"
import { useFavoriteRepoStore } from "./store/useFavoriteRepos";

export default function App() {

  const { data } = useFetchRepos();
  
  const favoriteReposId = useFavoriteRepoStore(state => state.favoriteRepoIds);
  const addToFavorites = useFavoriteRepoStore(state => state.addToFavorites);
  const removeFromFavorites = useFavoriteRepoStore(state => state.removeFromFavorites);

  const handleAddToFavorites = useCallback((repoID : number) =>  {
    addToFavorites(repoID);
  }, []);
  const handleRemoveFromFavorites = useCallback((repoID : number) =>  {
   removeFromFavorites(repoID);
  }, []);

  return (
    <div className="App">
      {
        data?.map((rep) => (
          <Card 
            repo={rep} 
            key={rep.id} 
            addToFavorites={handleAddToFavorites} 
            isFavorite={favoriteReposId.includes(rep.id)}
            removeFromFavorites={handleRemoveFromFavorites}
          />
        ))
      }
    </div>
  )
}