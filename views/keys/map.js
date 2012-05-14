function(doc) { 
    if ((doc.keys.length > 0) && (doc.doc_type == "resource_data")) {

//        var date_stamp = doc.node_timestamp;
//        date_stamp = date_stamp.substring(0,10);

        for (var idx in doc.keys) {
            var key = doc.keys[idx];
            var cleanKey = key.toLowerCase();
            cleanKey = cleanKey.replace(/^\s+/, "");
            cleanKey = cleanKey.replace(/\s+$/, "");
            cleanKey = cleanKey.replace(/\#/g, "");
            cleanKey = cleanKey.replace(/\"/g, "");
            cleanKey = cleanKey.replace(/\'/g, "");
            cleanKey = cleanKey.replace(/, /g, " ");
            cleanKey = cleanKey.replace(/,/g, " ");
            cleanKey = cleanKey.replace(/; /g, " ");
            cleanKey = cleanKey.replace(/;/g, " ");
            cleanKey = cleanKey.replace(/\‘/g, "");
            cleanKey = cleanKey.replace(/\’/g, "");
            if ((cleanKey != "-") && (cleanKey != "[...]")) {
                emit(cleanKey, 1);
            }
        }
    }
}
