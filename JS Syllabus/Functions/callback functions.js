function fetchData(url, callback){
    // Simulating an asynchronous operation
    setTimeout(()=>{
        const data = {name:"vishal", age:24};
        callback(data)
    },2000)
}

function handleData(data){
    console.log('Received Data:', data);
}

fetchData('https://example.com/api', handleData)