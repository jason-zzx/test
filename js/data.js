var json = [];
//var threeSize = new Array(52);
var threeSize = new Array(
  {B:'83',W:'56',H:'82'},
  {B:'72',W:'52',H:'78'},
  {B:'86',W:'55',H:'83'},
  {B:'81',W:'56',H:'81'},
  {B:'74',W:'54',H:'78'},
  {B:'75',W:'57',H:'78'}
);
//threeSize[1] = {B:'72',W:'52',H:'78'}; 
// var idolName = new Array(
//   "天海春香",
  
// );
// var idolValue = new Array(
//   "haruka",
// );
for(x in threeSize){
  json.push(threeSize[x]);
}
var objs = eval(json);
alert(objs[0].W);
