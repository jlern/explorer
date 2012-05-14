function(doc) { 
    if ((doc.payload_schema != "") && (doc.doc_type == "resource_data")) {
        emit(doc.payload_schema, 1);
    }
}
