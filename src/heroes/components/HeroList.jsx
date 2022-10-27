import { useMemo } from "react"
import { getHeroesBy } from "../../helpers/getHeroesBy"
import { HeroCard } from "./HeroCard"


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(()=>getHeroesBy(publisher),[publisher]);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(heroe => (
                    <HeroCard key={heroe.id} {...heroe} />
                ))
            }
        </div>
    )
}
