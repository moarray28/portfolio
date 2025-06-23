import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
