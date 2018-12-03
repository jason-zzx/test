
var objs = eval(json);
var t = objs.length;
var count = 0;
var count_correct = 0;

function generateQuestion(){
    $(".answer-area").removeClass("correct-answered");
    $(".answer-area").removeClass("wrong-answered");
    $(".answer-area").removeClass("answer-correct");
    $(".answer-area").removeClass("answer-wrong");
    var answered = false;
    
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

    for(var i = 0;i<4;i++){
        $(".answer-area:eq("+i+")").html(idolName[optionNumbers[i]]);
        if(i==correctPosition){
            $(".answer-area:eq("+i+")").addClass("answer-correct");
        }else{
            $(".answer-area:eq("+i+")").addClass("answer-wrong");
        }
    }
    
    
    $(".answer-correct").click(function(){
        if(!answered){
            answered = true;
            count++;
            count_correct++;
            $(".answer-correct").addClass("correct-answered");
        }
    });

    $(".answer-wrong").click(function(){
        if(!answered){
            answered = true;
            count++;
            $(this).addClass("wrong-answered");
            $(".answer-correct").addClass("correct-answered");
        }
    //     window.location.reload();
    });
}

function generateResult(){
    $(".result-count").html("你答对了"+count_correct+"/"+count+"题");
    var comment;
    var rate = count_correct / count;
    if(count<5)
        comment = "再去多答几题8";
    else if(rate==1)
        comment = "臭DD，当场抓获";
    else if(rate>=0.8)
        comment = "大概这就是DD8";
    else if(rate>=0.5)
        comment = "DD失格";
    else
        comment = "你是单推，我信了";
    $(".result-comment").html(comment);
}

generateQuestion();
