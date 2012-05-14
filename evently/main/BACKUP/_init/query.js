function(e) {
  // /items/:user/[:state]
  // /items/jchris/open
  // /items/_all/done
  // /items/amysue

  $.log($$(this));
  if ($$(this) == "#Statistics") {
    return {
      view : "submitter",
      reduce : true,
      group_level : 1
    };
  } else if ($$(this) == "#Documents") {
    return {
      view : "random",
      reduce : false
    };
  } else {
  }
};
