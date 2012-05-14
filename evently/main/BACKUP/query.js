function (e) {
  // /items/:user/[:state]
  // /items/jchris/open
  // /items/_all/done
  // /items/amysue
  var params = e.data.args[1];
  if (params.tag) {
    return {
      view : "tags",
      endkey : [params.tag],
      startkey: [params.tag, {}],
      descending : true,
      reduce : false
    };
  } else if (params.mention) {
    return {
      view : "mentions",
      endkey : [params.mention],
      startkey: [params.mention, {}],
      descending : true,
      reduce : false
    };
}
