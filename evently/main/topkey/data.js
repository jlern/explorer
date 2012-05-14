function (data) {
//    alert(JSON.stringify(data, null, 4));
    var sorted = data.rows.sort(function (a, b) {
        return parseInt(b.value,10) - parseInt(a.value,10);
        }
    );

    var i=1;
    var pairs = [];
    var top = {"rows": pairs};
    for (var x in sorted) {
        if ( (sorted.hasOwnProperty(x)) && (i <= 50) ) {
//            top.(sorted[prop]);
//            alert(JSON.stringify(sorted[x], null, 4));
              pairs.push(sorted[x]);
        }
        i++;
    }
//    alert(JSON.stringify(top, null, 4));
    return {node_address : NODE_ADDRESS,
                    keys : top.rows}
}
/*  function truncate(string){
   if (string.length > 5)
      return string.substring(0,5)+'...';
   else
      return string;
};
*/

