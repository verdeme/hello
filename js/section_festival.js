// <!-- 계절별 축제 슬라이더 스크립트 -->

$(function(){
     var indexN=3;     // 기본값
     $(this).on("click", function(e){
          var picList = [
               './image/festa1.jpg',     //0 여름
               './image/festa2.jpg',     //1 가을
               './image/festa3.jpg',     //2 겨울
               './image/festa4.jpg'     //3 봄
          ];
          var picLocaList = [
               'index_sub.php?menu=52',
               'index_sub.php?menu=53',
               'index_sub.php?menu=54',
               'index_sub.php?menu=51'
          ];

          if(e.target.id=="btnPrev" || e.target.id=="btnNext"){
               if(e.target.id=="btnPrev"){ indexN--; }
               if(e.target.id=="btnNext"){ indexN++; }
               if(indexN<0){ indexN=3;}
               if(indexN>3){ indexN=0;}

               switch(indexN) {
                    case 0: $("#pic1").attr("src", picList[1]);
                                   $("#pic2").attr("src", picList[2]);
                                   $("#pic2loca").attr("href", picLocaList[2]);
                                   $("#festaT1").html("Winter");
                                   $("#pic3").attr("src", picList[3]);
                                   $("#pic3loca").attr("href", picLocaList[3]);
                                   $("#festaT2").html("Spring");
                                   $("#pic4").attr("src", picList[0]);
                                   break;
                    case 1: $("#pic1").attr("src", picList[2]);
                                   $("#pic2").attr("src", picList[3]);
                                   $("#pic2loca").attr("href", picLocaList[3]);
                                   $("#festaT1").html("Spring");
                                   $("#pic3").attr("src", picList[0]);
                                   $("#pic3loca").attr("href", picLocaList[0]);
                                   $("#festaT2").html("Summer");
                                   $("#pic4").attr("src", picList[1]);
                                   break;
                    case 2: $("#pic1").attr("src", picList[3]);
                                   $("#pic2").attr("src", picList[0]);
                                   $("#pic2loca").attr("href", picLocaList[0]);
                                   $("#festaT1").html("Summer");
                                   $("#pic3").attr("src", picList[1]);
                                   $("#pic3loca").attr("href", picLocaList[1]);
                                   $("#festaT2").html("Autumn");
                                   $("#pic4").attr("src", picList[2]);
                                   break;
                    case 3: $("#pic1").attr("src", picList[0]);
                                   $("#pic2").attr("src", picList[1]);
                                   $("#pic2loca").attr("href", picLocaList[1]);
                                   $("#festaT1").html("Autumn");
                                   $("#pic3").attr("src", picList[2]);
                                   $("#pic3loca").attr("href", picLocaList[2]);
                                   $("#festaT2").html("Winter");
                                   $("#pic4").attr("src", picList[3]);
                                   break;
               }     // switch 닫힘
          }     // if(이전,다음버튼) 닫힘
     });     // onclick 닫힘
});     // 전체 function 닫힘
