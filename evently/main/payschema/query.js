function(e) {

//  $.log($$(this));
  $(this).html("Loading table...")
  return {
      view : "payschema",
      reduce : true,
      group_level : 1
    }
}
