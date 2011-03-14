h('arguments array');
function merge(target) {
    for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            target[key] = arguments[key];
        }
    }
    return target;
}

var merged = merge({ first: 'John' }, { last: 'Smith' });
print('merged first name: ', merged.first);
print('merged last name: ', merged.last);



h('use arguments as array');
function sayMax(prefix) {
    // will not work...
    // var numbers = arguments.slice(1);
    // instead...
    var numbers = [].slice.call(arguments, 1),
        max = Math.max.apply(Math, numbers);
        
    return prefix + ' ' + max;
}
print('Say max: ', sayMax('Max is:', 2, 6, 3));



h('access current function using arguments.callee');
var cry1 = function(times) {
    return times === 0 ? 'arg' : arguments.callee(times - 1) + 'h';
}
// same as
var cry2 = function(times) {
    return times === 0 ? 'arg' : cry2(times - 1) + 'h';
};
print('cry1: ', cry1(10));
print('cry2: ', cry2(10));



h('try after rename');
var newCry1 = cry1,
    newCry2 = cry2;
cry1 = cry2 = null;
print('newCry1 is stil callable: ', newCry1(10));
try {
    newCry2(10)
} catch(e) {
    print('but newCry2 will fail: ', e);
}

