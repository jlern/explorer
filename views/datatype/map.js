function(doc) { 
    if ((doc.resource_data_type != "") && (doc.doc_type == "resource_data")) {
        emit(doc.resource_data_type, 1);
    }
}
