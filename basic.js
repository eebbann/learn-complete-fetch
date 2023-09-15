// basic of fetch and promise

const url = 'https://jsonplaceholder.typicode.com/useers'

function getData(url){
	////call the response data(obj) in url variable ----> to see this inspect browser console then check network
	fetch(url)
	//this is calling of promisses
	.then((res)=>{
		if(!res.ok) throw new Error('no way this works') //check if not ok then throw error
		return res.json() //return data as json format
	})
	.then((data)=>{
		console.log(data)
	})
	.catch((e)=>{
		console.warn(e.message)
	})
}
	getData(url)