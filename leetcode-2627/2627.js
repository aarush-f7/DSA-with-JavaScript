
var debounce = function(fn, t) {
    let timer = null;

    return function(...args) {
        clearTimeout(timer);  // cancel previous timer

        timer = setTimeout(() => {
            fn(...args);      // execute latest call
        }, t);
    };
};