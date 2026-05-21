import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Secret from './Secret';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Content />
        <Secret/>
      </main>
      <Footer />
    </>
  );
}

export default App;
