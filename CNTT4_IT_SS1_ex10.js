const words=["eat","tea","tan","ate","nat","bat"];
const groupString=(arr)=>{
    const map =new Map();
    for(let word of arr){
        const key = word.split("").sort().join("");
        if(!map.has(key)){
            map.set(key,[]);
        }
        map.get(key).push(word);

    }
    return Array.from(map.value());
}

const result=groupString(words);
console.log(words);
console.log(result);
