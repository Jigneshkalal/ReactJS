import Headerr from "./Headerr";
import Carousel from "./scss/Carousel";
import Appabout from "./scss/Appabout";
import Footer from "./scss/Footer";


function App() {
  return (
    <>
        <Headerr />
        <main>
        <Carousel/>
        <Appabout/>
        </main>
        <Footer/>
        
    </>
  );
}

export default App;
