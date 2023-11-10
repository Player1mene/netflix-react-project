import './SetMovie.css'
import React,{ useState } from 'react';
import useMedia from '../hooks/useMedia'


const SetMovie = ({titulo, items}) => {

	const [scrollX, setScrollX] = useState(0)

    const mobile = useMedia('(max-width: 40rem)');
	const passarLeft = ()=>{
		let x = scrollX + Math.round(window.innerWidth / 2);
		if(x >= 0){
			x = 0;
		}
		setScrollX(x)
	}

	const passarRight = () =>{
		let x = scrollX - Math.round(window.innerWidth / 2);
		let widthW = items.results.length * 280;
		if((window.innerWidth - widthW) > x){
			x = (window.innerWidth - widthW) - 60;
		}
		setScrollX(x)
	}

	return (
			<div className='row-single'>
				<h2 className="title">{titulo}</h2>
				<div className="row-wrapper">
				{scrollX === 0 ? 	
				''
				:
				<div className='row-arrow-left' onClick={passarLeft}>
					<i className="fa-solid fa-angle-left"></i>
				</div>	
				}
				{scrollX === (window.innerWidth - (items.results.length * 280)) - 60 ?
				''
				:
				<div className='row-arrow-right' onClick={passarRight}>
					<i className="fa-solid fa-angle-right"></i>
				</div>
				}
					<div className="row" style={{
						marginLeft: scrollX,
						width: !mobile ? items.results.length * 280 : items.results.length * 130,
					}}>
						{items.results.length > 0 && items.results.map((item,key)=>(
							<div className="row-image" key={key}>
								{item.backdrop_path ?
									<div>
									<div className="row-info">
										{item.title ? <p>{item.title}</p> : <p>{item.original_name}</p>}
										<div className="controller">
											<i class="fa-solid fa-play"></i>
											<i class="fa-solid fa-plus"></i>
											<i class="fa-regular fa-thumbs-up"></i>
											<i class="fa-regular fa-thumbs-down"></i>
										</div>

									</div>
									<img alt="" src={`https://image.tmdb.org/t/p/w500${!mobile ? item.backdrop_path : item.poster_path}`}/>

									</div>
									:
									<div>
										<h4>Fora de Catalogo</h4>
										<h5>Sem informações aqui :C</h5>
									</div>
								}
								</div>
						))
						}
					</div>
				</div>
			</div>
		);
}

export default SetMovie;