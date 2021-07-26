function myReduce() {
    let callback = arguments[0];
    let initialVal  = arguments[1];
    let temp = Array.from(this); 
    let accumulator = ( initialVal === undefined) ? 0 : temp.unshift(initialVal);
    let start = (initialVal === undefined) ? 1 : 0;
    
    for (var i = start; i <= temp.length + this.length - 2 ; i++) {
        accumulator = callback.call(temp);
        temp.shift();
        temp.shift();
        temp.unshift(accumulator);
    }
    return accumulator;
};