function(e, crumb) {
    // remove first char;  i.e. remove #
    switch(crumb.slice(1)) {
        case 'submitter':
        case 'payschema':
        case 'datatype':
            return {crumb : 'Statistics'};
        case 'locator':
            return {crumb : 'Documents'};
        case 'topkey':
        case 'keyindex':
            return {crumb : 'Keywords'};
    }
}

