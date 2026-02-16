// 1. 먼저 "누구(a.item)"를 클릭할지 명확히 정해줍니다.
$('.aside_depth01').click(function(e) {
  e.preventDefault();

  // 2. 이 안에서 비로소 $(this)는 "클릭한 바로 그 .item"이 됩니다!
  // 3. 그리고 그 옆(next)에 있는 ul에 active를 붙입니다.
  $('aside_depth01 > ul.aside_depth02').addClass('active');

});