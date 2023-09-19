
// responding with images (blob)

//  const imgStr = 'https://picsum.photos/id.237/200/300'

// function getData(){
//   fetch(imgStr)
// 	.then((res)=> {
// 		if(!res.ok) throw new Error("no nothing");
// 		return res.blob()
// 	})
// 	.then((blob)=>console.log(blob))
// 	.catch(console.warnr) 
// 	}

 //creating response object  .. we talked about request now we are creating respponse
 let obj = {
	id : cryoto.randomUID(),
	name: 'the one who lm',
	favouriteColor: 'blue'
 }

 function getData(){
// we are responsing with a file so we turn the obj to string ..

//the file is the body
	let file = new File([JSON.stringify(obj)], 'mydata.json', {type: 'application/json'});
	//from the status to header is the head
	let response = new Response(file, { 
		status : 200,
		statusText: 'say my name',
		headers: {
			'content-type': 'application/json',
			'constne-length': file.size,
		},
	});
}