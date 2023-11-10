import React, { useEffect, useState } from 'react';
import './App.css';
import SetMovie from './partials/SetMovies';
import Header from './partials/Header';
import FilterData from './partials/FilterData';
import Loading from './partials/Loading'
import './partials/SetMovie.css';
import './partials/FilterData.css';
import './partials/Header.css';
import './partials/Loading.css'
import Tmdb from './tmdb';

function App() {


  const [lister, setLister] = useState([]);
  const [filterData, setFilterData] = useState(null);
  const [toogleBlack, setToogleBlack] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const onPageLoad = () =>{
      setLoading(false);
    }

    if(document.readyState === 'complete'){
      onPageLoad();
    } else {
      window.addEventListener('load',onPageLoad);
    }
    return () => window.addEventListener('load',onPageLoad);
  },[])


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

  useEffect(()=>{
    const pegarTudo = async ()=> {
      let lista = await Tmdb.getLista();



      let originals = lista.filter(i=>i.slug === 'originals');
      let randomChoose = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let choose = originals[0].items.results[randomChoose];
      let chooseInfo = await Tmdb.getFilmeInfo(choose.id,'tv');
      console.log(lister)
      console.log(chooseInfo)
      setFilterData(chooseInfo);
      setLister(lista)
    }
    pegarTudo();
  }, [])

 


  if(loading || lister.length <= 0)
   return <Loading/>
  else
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
