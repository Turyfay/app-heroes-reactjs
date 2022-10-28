import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { CardApp } from "../../shared/components/CardApp"

import queryString from 'query-string';

import { HeroCard } from "../components/HeroCard"
import { getHeroeByName } from "../../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();


  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroeByName(q);

  const {searchText,onInputChange,onResetForm} = useForm({
    searchText: ''
  })

  const onSubmitForm = (e)=>{
    e.preventDefault();
    if(searchText.trim().length <= 1) return;
    onResetForm();
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }


  return (
    <CardApp title='Busqueda' subTitle="Busca a tu heroe favorito">
      <div className="row">
        <div className="col-5">
          <form onSubmit={onSubmitForm}>
            <input type="text" 
            placeholder="Buscar heroe"
            className="form-control"
            name="searchText"
            autoComplete='off'
            value={searchText}
            onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            (q === '')
            ? <div className="alert alert-info">Search a hero</div>
            : (heroes.length === 0) && <div className="alert alert-danger">No se encontro <b>{q}</b></div>
          }
          

          
          {
            heroes.map(heroe =>(
              <HeroCard key={heroe.id} {...heroe}/>
            ))
          }
        </div>
      </div>
    </CardApp>
  )
}
