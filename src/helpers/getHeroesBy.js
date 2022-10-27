import { heroes } from "../heroes/data/Heroes";

export const getHeroesBy = (publisher) => {

    const validPublishers = ['Marvel Comics','DC Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} no existe`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
};
