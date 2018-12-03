var json = [];
var threeSize = new Array(
  {B:'83',W:'56',H:'82'},
  {B:'72',W:'52',H:'78'},
  {B:'86',W:'55',H:'83'},
  {B:'81',W:'56',H:'81'},
  {B:'74',W:'54',H:'78'},
  {B:'75',W:'57',H:'78'},
  {B:'77',W:'54',H:'79'},
  {B:'90',W:'62',H:'92'},
  {B:'85',W:'57',H:'85'},
  {B:'91',W:'59',H:'86'},
  {B:'78',W:'55',H:'77'},
  {B:'83',W:'56',H:'80'},
  {B:'78',W:'54',H:'77'},
  {B:'76',W:'53',H:'77'},
  {B:'85',W:'52',H:'82'},
  {B:'79',W:'55',H:'78'},
  {B:'85',W:'58',H:'86'},
  {B:'86',W:'54',H:'82'},
  {B:'88',W:'56',H:'85'},
  {B:'85',W:'59',H:'85'},
  {B:'74',W:'54',H:'76'},
  {B:'80',W:'58',H:'79'},
  {B:'78',W:'53',H:'79'},
  {B:'78',W:'57',H:'77'},
  {B:'78',W:'56',H:'80'},
  {B:'82',W:'55',H:'80'},
  {B:'81',W:'54',H:'80'},
  {B:'82',W:'57',H:'84'},
  {B:'72',W:'52',H:'73'},
  {B:'80',W:'56',H:'79'},
  {B:'83',W:'56',H:'84'},
  {B:'86',W:'60',H:'88'},
  {B:'74',W:'55',H:'78'},
  {B:'77',W:'54',H:'76'},
  {B:'84',W:'57',H:'83'},
  {B:'75',W:'55',H:'79'},
  {B:'76',W:'51',H:'77'},
  {B:'93',W:'63',H:'91'},
  {B:'84',W:'58',H:'83'},
  {B:'87',W:'58',H:'87'},
  {B:'73',W:'54',H:'77'},
  {B:'90',W:'59',H:'90'},
  {B:'84',W:'57',H:'84'},
  {B:'79',W:'59',H:'78'},
  {B:'84',W:'58',H:'84'},
  {B:'73',W:'53',H:'74'},
  {B:'79',W:'54',H:'80'},
  {B:'82',W:'56',H:'83'},
  {B:'88',W:'58',H:'85'}
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
  "四条貴音",
  "秋月律子",
  "三浦あずさ",
  "双海亜美/真美",
  "我那覇響",
  "春日未来",
  "最上静香",
  "伊吹翼",
  "田中琴葉",
  "島原エレナ/二階堂千鶴",
  "佐竹美奈子",
  "所恵美",
  "徳川まつり",
  "箱崎星梨花/エミリー",
  "野々原茜",
  "望月杏奈",
  "ロコ",
  "七尾百合子",
  "高山紗代子",
  "松田亜里沙",
  "高坂海美",
  "中谷育",
  "天空橋朋花",
  "北沢志保",
  "舞浜歩",
  "木下ひなた",
  "矢吹可奈",
  "横山奈緒",
  "馬場このみ",
  "大神環",
  "豊川風花",
  "宮尾美也",
  "福田のり子",
  "真壁瑞希",
  "篠宮可憐",
  "百瀬莉緒",
  "永吉昴",
  "北上麗花",
  "周防桃子",
  "ジュリア",
  "白石紬",
  "桜守歌織"
);
var idolValue = new Array(
  "haruka"
);
for(x in threeSize){
  json.push(threeSize[x]);
}


var objs = eval(json);
var t = objs.length;
var n = Math.floor(Math.random()*100) % t;

// document.querySelector(".b-field").innerHTML=objs[n].B;
// document.querySelector(".w-field").innerHTML=objs[n].W;
// document.querySelector(".h-field").innerHTML=objs[n].H;
$(".b-field").html(objs[n].B);
$(".w-field").html(objs[n].W);
$(".h-field").html(objs[n].H);

var correctPosition = Math.floor(Math.random()*100) % 4;
var optionNumbers = new Array(-1,-1,-1,-1);
optionNumbers[correctPosition] = n;
var i = 0;

while(i<4){
    if(optionNumbers[i] != -1){
        i++;
        continue;
    }
    var tmp = Math.floor(Math.random()*100) % t;
    while(tmp==n){
        tmp = Math.floor(Math.random()*100) % t;
    }
    var valid = true;
    if(i==0){
        optionNumbers[0] = tmp;
        i++;
        continue;
    }
    for(var j = 0; j < i; j++){
        if(optionNumbers[j] == tmp){
            valid = false; 
            break;
        }
    }
    if(valid){
        optionNumbers[i] = tmp;
        i++;
    }
}

//alert(optionNumbers+"  correct:"+correctPosition);

for(var i = 0;i<4;i++){
    $(".answer-area:eq("+i+")").html(idolName[optionNumbers[i]]);
    if(i==correctPosition){
        $(".answer-area:eq("+i+")").addClass("answer-correct");
    }else{
        $(".answer-area:eq("+i+")").addClass("answer-wrong");
    }
}

$(".answer-correct").click(function(){
    alert("正确");
    window.location.reload();
});

$(".answer-wrong").click(function(){
    alert("错误\n正确: "+idolName[optionNumbers[correctPosition]]);
    window.location.reload();
});
