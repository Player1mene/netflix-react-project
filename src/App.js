import React, { useEffect, useState } from 'react';
import './App.css';
import SetMovie from './partials/SetMovies';
import Header from './partials/Header';
import FilterData from './partials/FilterData';
import './partials/SetMovie.css';
import './partials/FilterData.css';
import './partials/Header.css';
import Tmdb from './tmdb';

function App() {

  const [lister, setLister] = useState([]);
  const [filterData, setFilterData] = useState(null);
  const [toogleBlack, setToogleBlack] = useState(false)

  useEffect(()=>{
    const pegarTudo = async ()=> {
      let lista = await Tmdb.getLista();
      setLister(lista)


      let originals = lista.filter(i=>i.slug === 'originals');
      let randomChoose = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let choose = originals[0].items.results[randomChoose];
      let chooseInfo = await Tmdb.getFilmeInfo(choose.id,'tv');
      console.log(chooseInfo)
      setFilterData(chooseInfo);
    }
    pegarTudo();
  }, [])


  useEffect(()=>{
    const scrollEvent = () =>{
      if(window.scrollY > 10){
        setToogleBlack(true)
      }else{
        setToogleBlack(false)
      }
    }


    window.addEventListener('scroll', scrollEvent);

    return () =>{
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  return (
    <div className="App">

      <Header black={toogleBlack}/>

      {filterData &&
        <FilterData item={filterData}/>
      }


      <section className="series">
          {lister.map((item, key)=>(  
              <SetMovie titulo={item.titulo} items={item.items} key={key}/>
          ))}
      </section>
      

      <footer className='footer'>
          <p>Feito de <span role="img" alt="coração">💖</span> por Gabriel da Silva / Player1 <br/> Todos os direitos de imagem reservados a Netflix <br/>Agradecimentos a Themoviedb.org e sua API magnífica.</p>
      </footer>

    
    </div>
  );
}

export default App;
