	$(document).ready(function() {
  var str = [" 全球线路，多种选择                ",
             " 先进技术，高速稳定               ",
			 " 正规法人，保障隐私            "];
  var pos = 0, a = 0;
  var html = "";
  function displayText() {
    if (pos > 2) pos = 0;
//    console.log(pos);
//    console.log(str[pos].length);
    if (a < str[pos].length) {
      html += str[pos].charAt(a);
      $(".text-change").html(html);
      a++;
    } else {
      a = 0;
      pos++;
      html = "";
    }
  }
  setTimeout(setInterval(displayText, 200), 200000000);
});
