import { CardApp } from "../../shared"
import { HeroList } from "../components/HeroList"

export const DcPage = () => {
  return (
    <CardApp title='DC' subTitle='Super Heroes del mundo de DC'>
        <HeroList publisher='DC Comics' />
    </CardApp>
  )
}
