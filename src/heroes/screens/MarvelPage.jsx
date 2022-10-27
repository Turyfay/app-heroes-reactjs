import { CardApp } from "../../shared"
import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
  <CardApp title='Marvel' subTitle='Super Heroes del mundo de Marvel'>
    <HeroList publisher='Marvel Comics' />
  </CardApp>
  )
}
