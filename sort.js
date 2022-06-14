function quickSort(list) {
    if (list.length < 2) 
        return list;
    
    let pivot = list[0];
    let pivot_header = pivot.price;
    let left  = []; 
    let right = [];

    for (let i = 1, total = list.length; i < total; i++){
        if (list[i].price < pivot_header)
            left.push(list[i]);
        else
            right.push(list[i]);
    }
    return [
        ...quickSort(left), 
        pivot, 
        ...quickSort(right)
    ];
};

export default quickSort;