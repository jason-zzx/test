var objs = eval(json);
var t = objs.length;
var n = Math.floor(Math.random()*100) % t;

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
}
