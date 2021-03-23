$(document).ready(function(){
  $("#confirm").click(function(){
    const side1Input = parseFloat($("input#side1")).val;
    const side2Input = parseFloat($("input#side2")).val;
    const side3Input = parseFloat($("input#side3")).val;
    let result;

    if (side1Input === side2Input && side1Input === side3Input && side2Input === side3Input) {
      result = $("#result").text("equilateral");
    } else if (side1Input !== side2Input && side1Input !== side3Input && side2Input !== side3Input) {
      result = $("#result").text("scalene");
    } else if (side1Input === side2Input || side3Input === side2Input || side1Input === side3Input) {
      result = $("#result").text("isosceles");
    }
    event.preventDefault();
    $("#result-card").toggle();
  });
});