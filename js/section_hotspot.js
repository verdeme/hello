// <!-- 삿포로 명소 슬라이더 스크립트 -->
$(function(){
     setInterval(hot3, 3000);
});
var hot3 = $(function(){
     var indexN=0;     // 기본값
     $(this).on("click", function(e){
          var picList = [
               './image/intro1.jpg',     //0
               './image/intro2.jpg',     //1
               './image/intro3.jpg'     //2
          ];

          if(e.target.id=="btnIntroPrev" || e.target.id=="btnIntroNext"){
               if(e.target.id=="btnIntroPrev"){ indexN--; }
               if(e.target.id=="btnIntroNext"){ indexN++; }
               if(indexN<0){ indexN=2;}
               if(indexN>2){ indexN=0;}

               switch(indexN) {
                    case 0: $("#introPic").css("background-image", "url(' " + picList[0] + " ') ");
                                   $("#introTxt").css("background-color", "#280000");
                                   $("#intro111").css("display", "inline-block");
                                   $("#intro222").css("display", "none");
                                   $("#intro333").css("display", "none");
                                   break;
                    case 1: $("#introPic").css("background-image", "url(' " + picList[1] + " ') ");
                                   $("#introTxt").css("background-color", "#283a3c");
                                   $("#intro111").css("display", "none");
                                   $("#intro222").css("display", "inline-block");
                                   $("#intro333").css("display", "none");
                                   break;
                    case 2: $("#introPic").css("background-image", "url(' " + picList[2] + " ') ");
                                   $("#introTxt").css("background-color", "#232e40");
                                   $("#intro111").css("display", "none");
                                   $("#intro222").css("display", "none");
                                   $("#intro333").css("display", "inline-block");
                                   break;
               }     // switch 닫힘
          }     // if(이전,다음버튼) 닫힘
     });     // onclick 닫힘
});     // 전체 function 닫힘
