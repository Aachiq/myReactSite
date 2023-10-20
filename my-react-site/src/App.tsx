import Menu from './common/components/Menu';
import MainLayout from './common/components/MainLayout';
import Services from './components/Services';
import Feedback from './components/Feedback';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './common/components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <MainLayout
        title='Digital Development'
        description='Teaching programming with a unique method!
                       From now you can watch and learn while having fun!'
      />
      <Services/>
      <Feedback/>
      <Carousel/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
