var objs = eval(json);
var t = objs.length;
var n = Math.floor(Math.random()*100) % t;

$(".b-field").html(objs[n].B);
$(".w-field").html(objs[n].W);
$(".h-field").html(objs[n].H);

var optionNumbers = new Array(n,-1,-1,-1);
var i = 1;

while(i<5){
    var tmp = Math.floor(Math.random()*100) % t;
    var valid = true;
    for(int j = 0; j < i; j++){
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
alert(optionNumbers);
