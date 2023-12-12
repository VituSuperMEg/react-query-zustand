import { Root } from "../queries/repo/types"

type ICard = {
  repo : Root;
  addToFavorites : (id : number) => void;
  isFavorite : boolean;
  removeFromFavorites : (id : number) => void;
}
export function Card({
  repo,
  addToFavorites,
  isFavorite,
  removeFromFavorites
}:ICard){

  function handleToggleFavorite() {
    if(isFavorite){
      removeFromFavorites(repo.id);
    }else{
      addToFavorites(repo.id);
    }
  }
  return (
    <div>
      <div>
        <h2>{repo.name}</h2>
        <button onClick={handleToggleFavorite}>
          {isFavorite ? "Remove from favorites" : "Add to favorite" }
        </button>
      </div>
    </div>
  )
}