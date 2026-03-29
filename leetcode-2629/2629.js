
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let result = x;

        for(let i = functions.length-1; i >= 0; i--){
           result = functions[i](result);
        }
        return result;
    }
};


let show = compose([x => x + 1, x => 2 * x, x => x - 1])(4) // 13
console.log(show);