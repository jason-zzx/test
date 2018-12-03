
var objs = eval(json);
var t = objs.length;
var count = 0;
var count_correct = 0;
var answer_record = new Array(49);
for(x in answer_record){
    answer_record[x] = x;
}

function generateQuestion(){
    if(count==49){
        alert("没有更多了");
        return;
    }
    $(".answer-area").removeClass("correct-answered");
    $(".answer-area").removeClass("wrong-answered");
    $(".answer-area").removeClass("answer-correct");
    $(".answer-area").removeClass("answer-wrong");
    var answered = false;
    
    var n = Math.floor(Math.random()*1000) % t;
    while(answer_record[n] == -1){
        n = Math.floor(Math.random()*1000) % t;
    }

    $(".b-field").html(objs[n].B);
    $(".w-field").html(objs[n].W);
    $(".h-field").html(objs[n].H);

    var correctPosition = Math.floor(Math.random()*1000) % 4;
    var optionNumbers = new Array(-1,-1,-1,-1);
    optionNumbers[correctPosition] = n;
    var i = 0;

    while(i<4){
        if(optionNumbers[i] != -1){
            i++;
            continue;
        }
        var tmp = Math.floor(Math.random()*1000) % t;
        while(tmp==n){
            tmp = Math.floor(Math.random()*1000) % t;
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
            answer_record[n] == -1
            $(".answer-correct").addClass("correct-answered");
        }
    });

    $(".answer-wrong").click(function(){
        if(!answered){
            answered = true;
            count++;
            answer_record[n] == -1
            $(this).addClass("wrong-answered");
            $(".answer-correct").addClass("correct-answered");
        }
    //     window.location.reload();
    });
}

function generateResult(){
    $(".question-area").hide();
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
    else if(rate>=0.3)
        comment = "太菜了，再回去练练8";
    else
        comment = "你是单推，我信了";
    comment += "\n<a href=\"https://jason-zzx.github.io/test/3_size_test.html\">重新开始</a>";
    $(".result-comment").html(comment);
}

generateQuestion();
