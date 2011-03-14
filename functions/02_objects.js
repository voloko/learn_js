h('function is an object');
var fn = function(a1, a2) { return 'foo' + (a1 || '') + (a2 || ''); };



h('set properties on it');
fn.good = true;
print('fn.good: ', fn.good);
print('calling fn: ', fn());



h('pass it arround');
var fn2 = fn;
print('fn2 === fn: ', fn2 === fn);
print('calling fn2: ', fn2());



h('pass as argument to another function');
function callFn(callback) {
    return callback(' likes', ' bar');
}
print('callFn with fn: ', callFn(fn));



setTimeout(function() {
    h('pass it to setTimeout or as a callback');
    print('Call from set timeout');
}, 100);
document.getElementById('log').onclick = function() {
    print('clicked on me');
};



h('length of a function is the expected number of arguments');
print('fn length: ', fn.length);

