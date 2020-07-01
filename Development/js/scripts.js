let web = ["menawer" , "nancy" , "rahaf" , "moudhi" , "hussain"]
function logger(array) {
for (let i = 0; i < web.length; i++) {
    console.log(array[i]);
    
}
}
  //2

let temps1 = [20 , 30 , 50 , 60 ];
let value = 40 // قيمه مبديئه

let temps2 = [] ;

let empty_array =[]

function hottestDays(array , TH , empty_array) {
    for (let i = 0; i < array.length; i++) {
       if (array[i] > TH ) 
    { empty_array.push(array[i])}
    }
    return temps2;
}

console.log(hottestDays(temps1 , value , temps2)) ; 

//3 

let books = [ 
    {
name: "book1",
ID: 1,
 } , 
 {
    name: "book2",
    ID: 2,
     } ,  {
        name: "book3",
        ID: 3,
         } ,  {
            name: "book4",
            ID: 4,
             } ,
            ] ; 

            // let bookId = 2;
            let bookId = 5;

            function getBookById(bookId, books){
                for (let i = 0; i < books.length; i++) {
if (books[i].ID == bookId) {
                    return books[i];
}
                }
            }

            //4

            // let userInput ="";
            // let output = [] ;
            // userInput = prompt("السلعة")

            // while (userInput !=="انتهيت") { 
            //     let price = parseFloat(prompt("السلعه"));
            // }

            // let totalPrice = 0 ;

            // for (let i = 0; i < output.length; i++) {
            //     console.log9(output[i].quantity +
            //         "" + 
            //         output[i].name +
            //         ""+
            //         output[i].quantity * output[i].price
            //         );
            //         totalPrice += output[i].quantity * output [i] .price ; 
                
            // }
            // console.log(totalprice);


            // Question 2 Point 1

let userinput = "";
let output = []

while (userinput !== "انتهيت"){
userinput = prompt("السلعه");
let price = prompt("السعر");
let quantity = prompt("الكميه");
let object = {
name: userinput,
price: price,
quantity: quantity,
};

 output.push(object);
 userinput = prompt("السلعة");
}

 for (let i = 0; i < output.length; i++) {
    console.log(output[i].quantity + 
        " "
        + output[i].name + 
        " " 
        + output[i].quantity * output[i].price);
     totalprice =+ output[i].quantity * output[i].price

}

console.log(totalprice);