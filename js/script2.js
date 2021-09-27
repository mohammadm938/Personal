let arrays = [
    {
        name:"Mohammad",
        age:'16'
    },{
        name:"Saeed",
        age:'20'
    },{
        name:"Ali",
        age:'22'
    },{
        name:"Ahmad",
        age:'24'
    }
]
arrays.forEach((index)=>{
    delete index.age
})
console.log(arrays);
