const checkParity=(num)=>{
    if(typeof num !=="number" || isNaN(num)) {
        return `${num} khong phai so`;
    }
    return num%2===0?"so chan":"so le";


};
console.log(checkParity("a"));
console.log(checkParity(5));
console.log(checkParity(6));