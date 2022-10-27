import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../../helpers";

export const HeroPage = () => {


  const {id} = useParams();

  const heroe = getHeroById(id);

  if(!heroe){
    return <Navigate to='/marvel'/>
  }


  return (
    <>
    <h1>{heroe.superhero}</h1>
    </>
  )
}
