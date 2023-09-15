// URL and Request Object

const str = 'http://127.0.0.1:5500/local-sample.json?attempt=123&other=hello';

console.log('po')
function getData(str){
	const url = new URL(str)

	//***** */ stored in http cache not cache ******
	// console.log( url.port, url.hostname)

	//request of url with header details .. buy defaul fetch is a get method headers are usually fr additional infos 
	const request = new Request(url, {
		headers:{
			'eban':"hello",
			method: 'GET',
			cache : 'no-store'
		}
	})

 fetch(request)
  .then((res)=> {
		 if(!res.ok) throw new Error("something went wrong")
		return res.json
	})
	.then((data)=> console.log(data))
	.catch((err)=>console.error(err.message));

}

getData(str)