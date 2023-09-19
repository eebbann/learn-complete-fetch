//note the response body object has access to the blob, text and json

let ap = "https://random-data-api.com/api/v2/users?size=10"
let text = "http://123.0.0.1:3000"

function getData(){
	fetch(ap)
		.then((res)=>{
		if(!res.text) throw new Error('not working')
		return res.text})
    .then( txt=>{
			header.innerHTML += `<h2>${txt}</h2>`
		})
		.catch(console.warn)
}




