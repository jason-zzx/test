var json = [];
var threeSize = new Array(
  {B:'83',W:'56',H:'82'},
  {B:'72',W:'52',H:'78'},
  {B:'86',W:'55',H:'83'},
  {B:'81',W:'56',H:'81'},
  {B:'74',W:'54',H:'78'},
  {B:'75',W:'57',H:'78'},
  {B:'77',W:'54',H:'79'},
  {B:'90',W:'62',H:'92'}
);
//threeSize[1] = {B:'72',W:'52',H:'78'}; 
var idolName = new Array(
  "天海春香",
  "如月千早",
  "星井美希",
  "萩原雪歩",
  "高槻やよい",
  "菊地真",
  "水瀬伊織",
  "四条貴音"
);
var idolValue = new Array(
  "haruka",
);
for(x in threeSize){
  json.push(threeSize[x]);
}
//var objs = eval(json);
//alert(objs[0].W);
