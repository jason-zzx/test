var json = [];
var threeSize = new Array(
  {B:'83',W:'56',H:'82'},
  {B:'83',W:'56',H:'82'}
);
//threeSize[1] = {B:'72',W:'52',H:'78'}; 
var idolName = new Array(
  "天海春香",
  "天海春香"
);
var idolValue = new Array(
  "haruka"
);
for(x in threeSize){
  json.push(threeSize[x]);
}
var objs = eval(json);
var t = objs.length;

alert(t+"4");
