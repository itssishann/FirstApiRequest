const url ="https://catfact.ninja/fact" ;
fetch(url)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(`Random Fact ->`,data.fact);
    return fetch(url)
})
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(`Random Fact2 -> ${data.fact}`)
})
.catch((err)=>{
    console.log("Error ->",err);
})
console.log("Random Cat Facts")