import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Favorites from "./pages/Favourites"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
     <Navigation/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie/:id" element={<Details/>}/>
      <Route path="/favourites" element={<Favorites/>}/>
     </Routes>
    </>
  )
}

export default App
