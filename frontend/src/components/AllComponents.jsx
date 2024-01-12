import { useLocation, Route, Routes } from 'react-router-dom'
import Header from "./Header"
import NoPage from "./NoPage"
import Excurs from "./Excurs"


function AllComponents(props) {
    const location = useLocation()
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Header />} />
                <Route path="" element={<Excurs />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    );
}

export default AllComponents;