import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Services from './components/Services/Services';
import './style/style.scss';


function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <Orders/>
      <Services/>
    </main>
    </>
  )
}

export default App
