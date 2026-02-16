$(document).ready(function() {
  console.log("제이쿼리 연결 성공!"); // 이 메시지가 F12 콘솔에 뜨는지 보세요.

  $('.aside_depth01').off('click').on('click', function(e) {
    e.preventDefault();
    
    // 혜지님이 강조하신 '클릭한 바로 그놈'의 자식 ul에 active 추가
    $(this).find('ul.aside_depth02').addClass('active');
    
    console.log("클릭 작동함! active 추가됨.");
  });
});