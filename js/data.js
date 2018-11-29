var json = [];
var threeSize = new Array(52);
threeSize[1] = {B:'83',W:'56',H:'82'}; 
json.push(threeSize[1]);
var objs = eval(json);
alert(objs[0].W);
