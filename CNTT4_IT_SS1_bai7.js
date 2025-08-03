function sumArr(){
    const result=[];
    for(let i=0;i<arguments.length;i++){
        const arr=arguments[i];
        if(Array.isArray(arr)){
            const sum=arr.reduce((a,b)=>a+b,0);
            result.push(sum);
        }else{
            console.log(`Tham so thu ${i+1} khong phai mang`);
        }
    }
    return result;
}

const result= sumArrays([1,2],[6,7,8],[12,9]);
console.log(result);