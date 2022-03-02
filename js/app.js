var array = [5,8,2,58,34,2];
var result = 0;
function add (val){
  for(let i = 0; i < val.length; i++){
    var v = val[i]
    result += v;
  }
  return result;
}
console.log(add(array));