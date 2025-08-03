function createUser(name, age=18,role="user"){
    return{
        name:name,
        age:age,
        role:role
    };
}

console.log(createUser("LInh"));
console .log(createUser("LInh",20,"admin"));