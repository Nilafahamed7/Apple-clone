import Navbar from "./components/NavBar"
import Header from "./components/header"
import Hero from "./components/hero"
import Article from "./components/article"
import Article2 from "./components/article2"
import Article3 from "./components/article3"
import Article4 from "./components/article4"
import Article5 from "./components/article5"
import Article6 from "./components/article6"
import Links from "./components/links"
import Notes from "./components/notes"
import Footer from "./components/footer"


function App() {

  return (
    <div style={{backgroundColor:"#F0F0F2",width:"100%"}}>
     <Navbar />
      <Header />
      <Hero />
      <Article />
      <Article2/> 
      <Article3/>
      <Article4/>
      <Article5/>
      <Article6/>
      <Links/>
      <Notes/>
      <Footer/>
    </div>
  )
}

export default App
