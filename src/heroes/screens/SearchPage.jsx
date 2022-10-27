import { CardApp } from "../../shared/components/CardApp"
import { HeroCard } from "../components/HeroCard"

export const SearchPage = () => {
  return (
    <CardApp title='Busqueda' subTitle="Busca a tu heroe favorito">
      <div className="row">
        <div className="col-5">
          <form>
            <input type="text" 
            placeholder="Buscar heroe"
            className="form-control"
            name="searchText"
            autoComplete='off'
            />
            <button type="submit" className="btn btn-outline-primary mt-1">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          <div className="alert alert-info">
            hero
          </div>
          <div className="alert alert-danger">
            hero
          </div>
          {/* <HeroCard/> */}

        </div>
      </div>
    </CardApp>
  )
}
