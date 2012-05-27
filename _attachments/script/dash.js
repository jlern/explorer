function dash() {
    $('<p>Node address: <a href=' + NODE_ADDRESS + '>' + NODE_ADDRESS + '</a></p>').appendTo('#address');
    $.getJSON(NODE_ADDRESS + "/status", function (json) {
        $('<p>Node status: <a class="btn btn-success" href="#"><i class="icon-arrow-up icon-white"></i></a></p>').appendTo('#status');
        $('<p>Document count: ' + json.doc_count + '</p>').appendTo('#count');
        var stamp = json.timestamp.split('.');
        stamp[0] = stamp[0].replace(/T(.*)/, " $1 GMT");
        $('<p>Timestamp: ' + stamp[0] + '</p>').appendTo('#timestamp');
    })
    .error (function () { 
        $('<p>Node status: <a class="btn btn-danger" href="#"><i class="icon-arrow-down icon-white"></i></a></p>').appendTo('#status');
    })
}
