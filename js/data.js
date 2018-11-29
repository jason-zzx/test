var json = [];
//var threeSize = new Array(52);
var threeSize = new Array( {B:'83',W:'56',H:'82'}, {B:'72',W:'52',H:'78'});
//threeSize[1] = {B:'72',W:'52',H:'78'}; 
// var idolName = new Array(
//   "天海春香",
  
// );
// var idolValue = new Array(
//   "haruka",
// );
json.push(threeSize[1]);
var objs = eval(json);
alert(objs[0].W);
