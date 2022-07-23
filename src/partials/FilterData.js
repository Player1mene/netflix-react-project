import './FilterData.css'
import React from 'react';

export default ({item}) => {


    let filterDate = new Date(item.first_air_date);
    let Filterpoints = Number((item.vote_average).toFixed(0));


	return (
			<div className='filter-single' style={{
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage:`url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
            }}>


                <div className='filter-single-vertical'>
                    <div className='filter-single-horizontal'>
                        <div className='filter-single-name'>{item.original_name}</div>
                        {item.overview.length !== 0 ?
                            <div className='filter-single-overview'>{(item.overview).substr(0, 220)}...</div>
                        :
                            <div className='filter-single-overview'>Sem descrição</div>
                        }   
                        <div className='filter-single-info'>
                            <div className='filter-points' style={{
                                backgroundColor: Filterpoints >= 6 ? 'green' : 'red',
                            }}>{(item.vote_average).toFixed(0)}</div>
                            <div className='filter-temps'>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                            <div className='filter-year'>{filterDate.getFullYear()}</div>
                        </div>
                        <div className='filter-genres'>
                            {
                                item.genres.map((item, key)=>{
                                    return (
                                        <a className='filter-genero' href={`https://www.google.com/search?q=genero+${item.name}`} key={key}>{item.name}</a>
                                    )
                                })
                            }
                        </div>
                        <div className='filter-single-buttons'>
                            <a className='watch' href={item.homepage !== "" ? item.homepage : ''}><i class="fa-solid fa-play"></i> Assistir</a>
                            <a className='add'><i className="fa-solid fa-plus"></i> Minha lista</a>
                        </div>
                    </div>
                </div> 
                
			</div>
		);
}
