 function receivesAFunction(callback){
    console.log("Hello" + "!");
    callback();
 }

 function sayGoodBye(){
    console.log("GoodBye!");
 }

 receivesAFunction(sayGoodBye);

 function returnsANamedFunction(){
    return function sayHello(){
        return sayHello;
    }
 }

 function returnsAnAnonymousFunction(){
    return function(){
        console.log("Hello!");
    }
 }