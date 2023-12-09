var outputmode = 2; //0 = auto, 1 = manual

var trangthaiden1 = 0, trangthaiden2 = 0, trangthaiden3 = 0; //R = 0, Y = 2, G = 1

var timeleft1 = -1, timeleft2 = -1, timeleft3 = -1; ///tgian con lai

const stt1 =[-1,-1,-1], stt2 =[-1,-1,-1], stt3 =[-1,-1,-1]; //tgian luu tu mode auto

//thay doi mode
function func() {
  var huhu = document.getElementById("mode");
  if(huhu.checked == true){
    document.getElementById("box2").style.zIndex = "-1";
    document.getElementById("box1").style.zIndex = "3";
  }
  else {
    document.getElementById("box2").style.zIndex = "3";
    document.getElementById("box1").style.zIndex = "-1";
  }
}
var downloadTimer1, downloadTimer2, downloadTimer3;

//xay ra khi bam nut confirm
function func2() {
  clearInterval(downloadTimer1);
  clearInterval(downloadTimer2);
  clearInterval(downloadTimer3);
  var huhu = document.getElementById("mode");
  //auto
  if(huhu.checked == true){
    outputmode = 0;
    stt1[0] = parseInt(document.getElementsByName("red1")[0].value);
    stt1[2] = parseInt(document.getElementsByName("yellow1")[0].value);
    stt1[1] = parseInt(document.getElementsByName("green1")[0].value);
    stt2[0] = parseInt(document.getElementsByName("red2")[0].value);
    stt2[2] = parseInt(document.getElementsByName("yellow2")[0].value);
    stt2[1] = parseInt(document.getElementsByName("green2")[0].value);
    stt3[0] = parseInt(document.getElementsByName("red3")[0].value);
    stt3[2] = parseInt(document.getElementsByName("yellow3")[0].value);
    stt3[1] = parseInt(document.getElementsByName("green3")[0].value);
    trangthaiden1 = 0;
    trangthaiden2 = 0;
    trangthaiden3 = 0;
    var i1 = 0, i2= 0, i3 =0 ;
    i1 = stt1[trangthaiden1];
    i2 = stt2[trangthaiden2];
    i3 = stt3[trangthaiden3];
    timeleft1 = i1; //luoi code lai nen lam ra cai i1 i2 i3 nay voi ly do i1 co the = -1
    timeleft2 = i2; 
    timeleft3 = i3;
    resulttden(trangthaiden1,"den1do","den1vang","den1xanh","result1");
    resulttden(trangthaiden2,"den2do","den2vang","den2xanh","result2");
    resulttden(trangthaiden3,"den3do","den3vang","den3xanh","result3");
    document.getElementById("result1").innerHTML = timeleft1;
    document.getElementById("result2").innerHTML = timeleft2;
    document.getElementById("result3").innerHTML = timeleft3;
    //goi timer x3
    downloadTimer1 = setInterval(function(){
      i1 -= 1;
      if (i1 <= -1) {timeleft1 = stt1[(trangthaiden1+1)%3];}
      else {timeleft1 = i1;}
      if(i1 <= -1){// xay ra de doi mau den
        trangthaiden1++;
        if(trangthaiden1 >= 3){trangthaiden1 = 0;}
        i1 = stt1[trangthaiden1];
        timeleft1 = i1;
        resulttden(trangthaiden1,"den1do","den1vang","den1xanh","result1");
        document.getElementById("result1").innerHTML = timeleft1;
      } else {
        document.getElementById("result1").innerHTML = timeleft1;
      }
    }, 1000);
    downloadTimer2 = setInterval(function(){
      i2 -= 1;
      if (i2 <= -1) {timeleft2 = stt2[(trangthaiden2+1)%3];}
      else {timeleft2 = i2;}
      if(i2 <= -1){
        trangthaiden2++;
        if(trangthaiden2 >= 3){trangthaiden2 = 0;}
        i2 = stt2[trangthaiden2];
        timeleft2 = i2; 
        resulttden(trangthaiden2,"den2do","den2vang","den2xanh","result2");
        document.getElementById("result2").innerHTML = timeleft2;
      } else {
        document.getElementById("result2").innerHTML = timeleft2;
      }
    }, 1000);
    downloadTimer3 = setInterval(function(){
      i3 -= 1;
      if (i3 <= -1) {timeleft3 = stt3[(trangthaiden3+1)%3];}
      else {timeleft3 = i3;}
      if(i3 <= -1){
        trangthaiden3++;
        if(trangthaiden3 >= 3){trangthaiden3 = 0;}
        i3 = stt3[trangthaiden3];
        timeleft3 = i3;
        resulttden(trangthaiden3,"den3do","den3vang","den3xanh","result3");
        document.getElementById("result3").innerHTML = timeleft3;
      } else {
        document.getElementById("result3").innerHTML = timeleft3;
      }
    }, 1000);
  }
  //manual
  else if (huhu.checked == false) {
    outputmode = 1;
    document.getElementById("result1").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    stt1[0] = -1;
    stt1[1] = -1; 
    stt1[2] = -1; 
    stt2[0] = -1; 
    stt2[1] = -1; 
    stt2[2] = -1; 
    stt3[0] = -1; 
    stt3[1] = -1; 
    stt3[2] = -1;
    timeleft1 = -1;
    timeleft2 = -1;
    timeleft3 = -1;
    trangthaiden1 = resulttmanual("light1");
    trangthaiden2 = resulttmanual("light2");
    trangthaiden3 = resulttmanual("light3");
    resulttden(trangthaiden1,"den1do","den1vang","den1xanh","result1");
    resulttden(trangthaiden2,"den2do","den2vang","den2xanh","result2");
    resulttden(trangthaiden3,"den3do","den3vang","den3xanh","result3");
  }
}

//doi mau cai den trong result
function resulttden(a,e1,e2,e3,f){
  document.getElementById(e1).className = document.getElementById(e2).className = document.getElementById(e3).className = "dentat";
  if(a == 0){ 
    document.getElementById(e1).className = "dendo"; 
    document.getElementById(f).style.color = "rgb(255, 20, 20)";
  }
  else if (a == 2) { 
    document.getElementById(e2).className = "denvang"; 
    document.getElementById(f).style.color = "yellow";
  }
  else if (a == 1) { 
    document.getElementById(e3).className = "denxanh";
    document.getElementById(f).style.color = "rgb(34, 248, 34)"; 
  }
  return
}

//doc gia tri cai den manual theo bit 0 1 2
function resulttmanual(a){
  var huhu = document.getElementsByName(a);
  var ok = 0;
  if(huhu[0].checked){  ok = 0; }
  else if (huhu[1].checked) { ok = 2; }
  else if (huhu[2].checked) { ok = 1; }
  return ok;
}