let n = 23;
 let clients = ["Bigcorp","Bigcorp","Acme","Bigcorp","Zork","Zork","Abc","Bigcorp","Acme",
"Bigcorp","Bigcorp","Zork","Bigcorp","Zork","Zork","Bigcorp","Acme","Bigcorp","Acme","Bigcorp","Acme","Littlecorp","Nadircorp"];

// creating a empty object and iterating in our client array and finding their frequency

let map_data={};
for(let i=0;i<n;i++){
       let data = clients[i];
       map_data[data] ? map_data[data]++ : map_data[data]=1;
}



// first finding the number of clients whose number of trades are more than 7%.
let total_p=(n*7)/100;

// creating a empty array for storing our final results
let final_result=[];

for (let key in map_data) {
        if(map_data[key]>=total_p){
              final_result.push(key);
       }
}

// sorting our name according to their alphabets

final_result.sort();

// our final results

console.log(final_result);

