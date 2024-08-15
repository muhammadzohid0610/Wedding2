import '../../App.css';
import '../../Appmedia.css';
import Main from "../main/Main"
import Section from '../section/Section';
import Section2 from '../section2/Section2';
import Footer from '../footer/Footer';
function Home() {
  return (
    <div className="Home">
      <Main />
      <Section/>
      <Section2/>
      <Footer/>
    </div>
  );
}

export default Home;
