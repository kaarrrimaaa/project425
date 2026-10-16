import { Catalog } from "./components/Catalog/Catalog"
import { Banner } from "./components/Banner/Banner"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"


export function App() {
  return (
    <div className="layout">
      <Header />

      <Banner />
      <Catalog />

      <Footer />
    </div>
  )
}
export default App;
