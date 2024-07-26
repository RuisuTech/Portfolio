import Footer from './Footer';
import Header from './Header';
import Proyectos from './Proyectos';

function RouterProyectos() {
  return (
    <>
      <div className="md:px-[10%]">
        <Header />
        <Proyectos />
        <Footer />
      </div>
    </>
  );
}

export default RouterProyectos;
