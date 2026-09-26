
import './App.css'
import Button from './components/Button'
import Header from './components/Header'

function App() {
 

  return (
    <>
    <Header/>


    <div className="max-w-7xl m-auto text-center py-32">
      <h1 className="text-7xl font-serif font-bold">The Best Way to <br/><span className="bg-amber-400 px-4 rounded-2xl ">Review
        </span>Creative Assets</h1>
        <br/>

        <p className="text-lg my-3"> Deserunt nostrum animi maxime ea sit doloremque pariatur architecto illum possimus iusto <br/>soluta, repellat culpa officia nam earum maiores tenetur et aliquid.
        </p>
        <div className="text-3xl">
        <Button title="Subscribe Now"/>
        </div>
    </div>
    </>
  ) 
}

export default App
