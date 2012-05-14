function(doc) { 
    if (doc.resource_locator.length > 0) {

//        var date_stamp = doc.node_timestamp;
//        date_stamp = date_stamp.substring(0,10);

        emit(doc.resource_locator, 1);
    }
}
