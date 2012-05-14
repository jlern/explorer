function (data) {
    return { node_address : NODE_ADDRESS,
                    stats : data.rows.sort(function (a, b) {
                            return parseInt(b.value,10) - parseInt(a.value,10);
                            }
                    )
           }
}
