import './App.css'
import Header from './components/Header'
import Location from './components/Location'
import Footer from './components/Footer'
import data from './data'

function App() {
  const location = data.map(item =>{
    return(
      <Location
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Header />
      <main>
        {location}
      </main>
      <Footer/>
    </div>
  )
}

export default App
