const  response={
    data:{
        id:1,
        title:"Destructuring in ES6",
        author:{
            name:"Linh",
            email:"abc@gmail.com",
        },
        },
    };
const {data:{title,author}}=response;
const {name:authorName,email:authorEmail}=author;
console.log("title",title);
console.log("authorName",authorName);
console.log("authorEmail",authorEmail);
console.log("author object",author);
