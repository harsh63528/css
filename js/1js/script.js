function run(link){
    console.log('fetching data from api');
   return ()=>{
    fetch(link)
.then(console.log);
   }
}

const data=run('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3')

data()