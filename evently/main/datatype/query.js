function(e) {

//  $.log($$(this));
  $(this).html("Loading table...")
  return {
      view : "datatype",
      reduce : true,
      group_level : 1
    }
}
