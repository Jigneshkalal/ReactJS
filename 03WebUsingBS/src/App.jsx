import Card from "./Card";
import Headerr from "./Headerr";
import Carousel from "./scss/Carousel";
import Footer from "./scss/Footer";

function App() {
  return (
    <>
        <Headerr />
        
        <Carousel/>
        <div className="d-flex flex-wrap gap-3 justify-content-around mt-3">
        <Card className=""
          title="EXPLOR INDIA"
          about="The Golden Bird India"
          Button="Click me"
          imgsrc="/image/mumbai.jpg"
          buttonColor="btn-warning"
          
        />
        <Card
          title="EXPLOR INDIA"
          about= "The Golden Bird India"
          Button="Visit me"
          imgsrc="/image/Rajasthan.jpg"
          buttonColor="btn-light"
        />
        <Card
          title="EXPLOR INDIA"
          about="The Golden Bird India"
          Button="Click me"
          imgsrc="/image/delhi.jpg"
          buttonColor="btn-success"
        />
        </div>
        <Footer/>
        
    </>
  );
}

export default App;
