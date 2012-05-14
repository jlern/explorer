function(e) {

//  $.log($$(this));
  $(this).html("Loading table...")
  return {
      view : "submitter",
      reduce : true,
      group_level : 1
    }
}
