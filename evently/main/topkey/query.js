function(e) {

//  $.log($$(this));
//  document.body.style.cursor = "wait";
  $(this).html("Loading table...");
  return {
      view : "keys",
//      skip : 35,
//      limit : 1000,
      reduce : true,
      group_level : 1
    }
//  document.body.style.cursor = "default";
}
