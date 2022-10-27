import { getHeroesBy } from "../../helpers/getHeroesBy"


export const HeroList = ({ publisher }) => {

    return (
        <ul>
            {
                getHeroesBy(publisher).map(heroe => (
                    <li key={heroe.id}>{heroe.superhero}</li>
                ))
            }
        </ul>
    )
}
