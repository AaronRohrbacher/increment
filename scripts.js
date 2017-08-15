

$(document).ready(function(){
  $('form#counter').submit(function(event) {
    event.preventDefault();
    var num = parseInt($('#countTo').val());
    var increment = parseInt($('#increment').val());

    if (!num || !increment || num <= 0 || increment <= 0 || increment > num ) {
      alert('Please enter positive values in form.');
      return;
    }

    function counter(num, increment) {
      for (var i = increment; i <= num; i+=increment) {
        alert(i);
      }
    }
    counter(num, increment);
  });

  var names = ["Frank", "Joe", "Hank", "Boa"];

  for (var i = 0; i < names.length; i++) {
    alert('Hello '+names[i]);
  }
});
