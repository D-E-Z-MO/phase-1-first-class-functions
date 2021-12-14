function receivesAFunction(callback){
  callback();
}
function returnsANamedFunction(){
  return function beforeAll(){
    console.log("Okay")
  }
}
function returnsAnAnonymousFunction(){
  return () =>{};
}