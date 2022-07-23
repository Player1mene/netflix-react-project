import './SetMovie.css'
import React,{ useState } from 'react';

export default ({titulo, items}) => {

	const [scrollX, setScrollX] = useState(-1000)

	const passarLeft = ()=>{
		let x = scrollX + Math.round(window.innerWidth / 2);
		if(x >= 0){
			x = 0;
		}
		setScrollX(x)
	}

	const passarRight = () =>{
		let x = scrollX - Math.round(window.innerWidth / 2);
		let widthW = items.results.length * 180;
		if((window.innerWidth - widthW) > x){
			x = (window.innerWidth - widthW) - 60;
		}
		setScrollX(x)
	}

	return (
			<div className='row-single'>
				<h2>{titulo}</h2>
				<div className="row-wrapper">
				{scrollX === 0 ? 	
				''
				:
				<div className='row-arrow-left' onClick={passarLeft}>
					<i className="fa-solid fa-angle-left"></i>
				</div>	
				}
				{scrollX === (window.innerWidth - (items.results.length * 180)) - 60 ?
				''
				:
				<div className='row-arrow-right' onClick={passarRight}>
					<i className="fa-solid fa-angle-right"></i>
				</div>
				}
					<div className="row" style={{
						marginLeft: scrollX,
						width: items.results.length * 180,
					}}>
						{items.results.length > 0 && items.results.map((item,key)=>(
							<div className="row-image" key={key}>
								<img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
							</div>	
						))
						}
					</div>
				</div>
			</div>
		);
}
