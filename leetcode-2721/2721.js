
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = new Array(functions.length);
        let completed = 0;

        if (functions.length === 0) {
            resolve([]);
        }

        functions.forEach((fn, index) => {
            fn()
                .then((value) => {
                    results[index] = value;
                    completed++;

                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error); // reject immediately on any failure
                });
        });
    });
};