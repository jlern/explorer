function (e, data) {

//    var param = e.data.args[1];
//    var List = require("vendor/couchapp/lib/list");

    return {data : data.rows};
/*    return {stats : List.withRows (function(row) {
                    return {
                    key : row.key,
                    value : row.value
                    }
           }
    )}
*/

}
