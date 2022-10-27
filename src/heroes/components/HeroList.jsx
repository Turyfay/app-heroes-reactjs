import { getHeroesBy } from "../../helpers/getHeroesBy"
import { HeroCard } from "./HeroCard"


export const HeroList = ({ publisher }) => {

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                getHeroesBy(publisher).map(heroe => (
                    <HeroCard key={heroe.id} {...heroe} />
                ))
            }
        </div>
    )
}
