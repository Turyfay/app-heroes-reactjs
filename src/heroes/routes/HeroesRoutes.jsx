import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../shared'
import { DcPage } from '../screens/DcPage'
import { HeroPage } from '../screens/HeroPage'
import { MarvelPage } from '../screens/MarvelPage'
import { SearchPage } from '../screens/SearchPage'

export const HeroesRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="p-3">
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />
                    <Route path='search' element={<SearchPage />} />
                    <Route path='hero/:id' element={<HeroPage />} />
                    <Route path='/' element={<Navigate to='marvel' />} />
                </Routes>
            </div>

        </>
    )
}
