var objs = eval(json);
var n = Math.floor(Math.random()*100) % 8;
$(".b-field").html(objs[n].B);
$(".w-field").html(objs[n].W);
$(".h-field").html(objs[n].H);
