
var TimeLimitedCache = function() {
    this.cache = new Map();  
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const alreadyExists = this.cache.has(key);

    if (alreadyExists) {
        clearTimeout(this.cache.get(key).timerId);
    }

    const timerId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timerId });

    return alreadyExists;
};

TimeLimitedCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    }
    return -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};