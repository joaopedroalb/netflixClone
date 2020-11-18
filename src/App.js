import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import MoviewRow from './components/movieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'
import './App.css'


export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      //Pegando as listas de filme
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //pegando o filme em destaque
      let originals = list.filter(i => i.slug === 'originals');
      let randomIndex = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let featuredChosen = originals[0].items.results[randomIndex]
      let featuredChosenInfo = await Tmdb.getMovieInfo(featuredChosen.id, 'tv')
      setFeaturedData(featuredChosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.addEventListener('scroll', scrollListener)
    }

  }, [])

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MoviewRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Dados da API do themoviedb.org <span role="img" aria-label="dates">📊</span><br />
        Feito por João Pedro Albuquerque <span role="img" aria-label="laptop">💻</span><br />
        Todos direitos de imagens para Netflix <span role="img" aria-label="videocam">🎥</span>
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="Carregando" />
        </div>
      }

    </div>
  )
}

