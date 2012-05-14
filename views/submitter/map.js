function(doc) { 
    if ((doc.identity.submitter != "") && (doc.doc_type == "resource_data")) {
        emit(doc.identity.submitter, 1);
    }
}

