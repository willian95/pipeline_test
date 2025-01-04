import { BrowserRouter, Route, Routes } from "react-router"
import { ListUsers } from "./pages/ListUsers"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListUsers />} />
          {/* <Route path="/create-users" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
