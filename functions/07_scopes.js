h('same as previous but with anonimous function');

var ul = document.createElement('ul');
ul.style.cssText = 'position: absolute; right: 10px; top:30px; list-style: none';
document.body.appendChild(ul);
for (var i = 0; i < 5; i++) { 
    (function(i) {
        var li = document.createElement('li');
        li.innerHTML = 'Anonimous closure. Click me ' + i;
        ul.appendChild(li);
        li.onclick = function() {
            print("I'm number " + i);
        };
    })(i);
}



h('wrapping a library');
(function() {
    function privateFunction() {
        return 'Hello ';
    }
    
    function publicFunction(extra) {
        return privateFunction() + extra;
    }
    
    window.publicFunction = publicFunction;
})();
print('publicFunction: ', publicFunction('Ads'));
print('typeof privateFunction: ', typeof privateFunction);




h('module pattern');
var greeting = (function() {
    var privateVariable = 'Howdy ';
    
    function greeting(extra) {
        return privateVariable + extra;
    }
    
    return greeting;
})();
print('greeting: ', greeting('Ads'));
print('typeof privateVariable: ', typeof privateVariable);




h('simplified commonjs require');
function require(tag) {
    if (!require.cache[tag]) {
        var module = require.cache[tag] = {};
        require.modules[tag](module);
    }
    return require.cache[tag];
}
require.cache = {};
require.modules = {};
require.modules['foo'] = function(exports) {
    var privateGreeting = 'Hi ';
    
    function publicFuction(name) {
        return privateGreeting + name;
    }
    
    exports.publicFuction = publicFuction;
};
print('require(foo).publicFuction: ', require('foo').publicFuction('Ads'));


h('extra messages');
