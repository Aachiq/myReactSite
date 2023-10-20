import Menu from './common/components/Menu';
import MainLayout from './common/components/MainLayout';
import Services from './components/Services';
import Feedback from './components/Feedback';
import Carousel from './components/Carousel';

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
    </div>
  );
}

export default App;
