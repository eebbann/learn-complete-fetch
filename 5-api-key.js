// *****..API-KEY-***
// API means application platform interface ;
// in the context of fetch simply means a platform that can provide you data access based on an endpoint
//API-KEY - is a unique identifier that gives you access to the api data ..mostly from webserver

 // *****..WHWERE TO PLACE API-KEY-***
 // -query string
 //-headers
 //cookies

//  --- query string **********
function getData(){
 let str = 'https://127.0.0.1:3000/?name=value&steve=griffith';
 let url = new URL(str);
let sp = url.searchParams
//the values added to the query string 
sp.append('hello', 'world')
sp.append('api-key', 'kajshdbdsudsduoddgsougsdsouhssdhh');

//****** adding api to headers *****
let h = new Headers();

h.append('x-api-key', 'kajdshhfhhshjkkjjsjjsjhgdhjjsdkajhd'); // API key
h.append('Authorization', 'Bearer kajdshhfhhshjkkjjsjjsjhgdhjjsdkajhd'); // JWT key


let request = new Request(url, {
	method: 'GET',
	headers: h,
})

fetch(request)
}