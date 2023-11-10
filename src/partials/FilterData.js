import './FilterData.css'
import React from 'react';
import useMedia from '../hooks/useMedia'

const FilterData = ({item}) => {
    

    const mobile = useMedia('(max-width: 40rem)');
    let filterDate = new Date(item.first_air_date);


	return (
			<div className='filter-single' style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: !mobile ? `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')` : "",
            }}>



                <div className='filter-single-vertical' style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: mobile && `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
            }}>
                    <div className='filter-single-horizontal'>
                        <div className='filter-single-name'>{item.images.logos.length !== 0 ? <img alt=""  src={`https://image.tmdb.org/t/p/w500${item.images.logos[0].file_path}`}/> : item.original_name}</div>
                        
                        {item.overview.length !== 0 && !mobile ?
                             <div className='filter-single-overview'>{(item.overview).substr(0, 220)}...</div>
                        :
                            ''
                        } 
                        {!mobile &&  
                        <div className='filter-single-info'>
                            <div className='filter-points'><p style={{ color: '#3fc602'}}>{((item.vote_average).toFixed(0) * 100) / 10}%</p> Relevante</div>
                            <div className='filter-temps'>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                            <div className='filter-year'>{filterDate.getFullYear()}</div>
                        </div>
                        }
                        <div className='filter-genres'> 
                            {   
                                item.genres.map((genre, key, index)=>{
                                    return (
                                        <div>
                                        <a className='filter-genero' href={`https://www.google.com/search?q=genero+${genre.name}`} key={key} >{genre.name}</a>
                                        {key === (item.genres.length - 1) ?  '' : " • " }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='filter-single-buttons'>
                            <button className='watch'><i className="fa-solid fa-play"></i> Assistir</button>
                            {!mobile ? <button className='add'><span>i</span> Mais informações</button> : <button className='add'><i class="fa-solid fa-plus"></i> Minha lista</button>}
                        </div>
                    </div>
                </div> 
                
			</div>
		);
}

export default FilterData;