const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			API_URL: "https://www.swapi.tech/api",
			favs: [],
			planets: [],
			people: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				var requestOptions = {
					method: "GET",
					mode: "no-cors"
				};
				// Obtener los planetas
				fetch(getStore().API_URL + "/planets", requestOptions)
					.then(res => {
						return res.json();
					})
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.log(err));
				fetch(getStore().API_URL + "/people", requestOptions)
					.then(res => {
						return res.json();
					})
					.then(data => setStore({ people: data.results }))
					.catch(err => console.log(err));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFav: fav => {
				//if(getStore().favs.find(x => x.))
				setStore({ favs: getStore().favs.concat([fav]) });
			},
			deleteFav: url => {
				setStore({
					favs: getStore().favs.filter(item => {
						return item.url != url;
					})
				});
			}
		}
	};
};

export default getState;
