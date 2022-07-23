const API_KEY = "75d646599b79d0e09cdea5b1dd753228";
const API_BASE = "https://api.themoviedb.org/3";

/*
	- originais 1
	- trending  2
	- em alta   3
	- ação      4 
	- comedia   5
	- terror    6
	- romance   7
	- documentarios 8
*/


const dinamicFetch = async (movie) => {
	const req = await fetch(`${API_BASE}${movie}`)
	const json = await req.json();
	return json;
}


export default {
	getLista: async () =>{
		return [
			{
				slug: 'originals',
				titulo: 'Originais Netflix',
				items: await dinamicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
			},{
				slug: 'trending',
				titulo: 'Recomendados para você',
				items: await dinamicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
			},{
				slug: 'toprated',
				titulo: 'Em alta',
				items: await dinamicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
			},{
				slug: 'animation',
				titulo: 'Animação',
				items: await dinamicFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`),
			},{
				slug: 'action',
				titulo: 'Ação',
				items: await dinamicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
			},{
				slug: 'crime',
				titulo: 'Crime',
				items: await dinamicFetch(`/discover/tv?with_genres=80&language=pt-BR&api_key=${API_KEY}`),
			},{
				slug: 'mistery',
				titulo: 'Mistério',
				items: await dinamicFetch(`/discover/tv?with_genres=9648&language=pt-BR&api_key=${API_KEY}`),
			},{
				slug: 'comedy',
				titulo: 'Comédia',
				items: await dinamicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
			},{
				slug: 'horror',
				titulo: 'Terror',
				items: await dinamicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
			},{
				slug: 'romance',
				titulo: 'Romance',
				items: await dinamicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
			},
			{
				slug: 'documentary',
				titulo: 'Filmes Documentários',
				items: await dinamicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
			},
			{
				slug: 'documentary',
				titulo: 'Series Documentários',
				items: await dinamicFetch(`/discover/tv?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
			}
		];
	},
	getFilmeInfo: async (movieId, type) =>{
		let info = {};

		if(movieId){
			switch(type){
				case 'movie':
					info = await dinamicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
				break;
				case 'tv':
					info = await dinamicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
				break;
				default:
					info = null;
				break;
			}
		}

		return info;
	}
}
