import Header from './components/Header/Header';
import HomePage from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Services from './components/Services/Services';
import './style/style.scss';


function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <HomePage/>
      <Orders/>
      <Services/>
    </main>
    </>
  )
}

export default App
