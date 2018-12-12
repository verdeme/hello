// <!-- 메일 구독창 스크립트 -->

$(function(){
     $('#btnMail').click(function(){
          // 화면 너비
          var sW = screen.availWidth;
          // 화면 높이
          var sH = screen.availHeight;
          sW = Math.floor(sW/2)-200;
          sH = Math.floor(sH/2)-152;
          window.open("post.html", "", "width=400px, height=306px, top="+sH+", left="+sW+", location=no, status=no, scrollbars=no, toolbars=no");
     });
});
