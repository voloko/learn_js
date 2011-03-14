h('basic closure');
var base = 100;
function addToBase(n) {
    return base + n;
}
print('addToBase 5: ', addToBase(5));
base = 200;
print('addToBase 5 after changing base: ', addToBase(5));



h('closures as callbacks');
var count = 0;
var button = document.createElement('button');
button.innerHTML = 'click me';
button.style.cssText = 'position: absolute; right: 10px; top:10px';
document.body.appendChild(button);
button.onclick = function() {
    print('clicked ' + (count++) + ' times');
};



h('closures in setTimeout');
var printed = 0,
    timer = setInterval(function() {
        print('printed from set interval: ' + printed++);
        if (printed > 4) clearInterval(timer);
    }, 100);




h('return closures from a function');
function getter(name) {
    return function() {
        return this[name];
    };
}
var obj = {
    foo: 'bar',
    getFoo: getter('foo')
};
print('getFoo: ', obj.getFoo());




h('closure for private functions');
function FluffyDog(name) {
    var myName = 'Fluffy ' + name;
    
    this.getName = function() {
        return myName;
    };
}
var doggy = new FluffyDog('Bobby');
print('Get name: ', doggy.getName());
print('Get myName: ', doggy.myName);



h('loop without a closure');
var ul = document.createElement('ul');
ul.style.cssText = 'position: absolute; right: 10px; top:30px; list-style: none';
document.body.appendChild(ul);
for (var i = 0; i < 5; i++) {
    var li = document.createElement('li');
    li.innerHTML = 'Without closure. Click me ' + i;
    ul.appendChild(li);
    li.onclick = function() {
        print("I'm number " + i);
    };
}



h('fix this loop by using a named function');
ul = document.createElement('ul');
ul.style.cssText = 'position: absolute; right: 10px; top:130px; list-style: none';
document.body.appendChild(ul);
function appendLi(i) {
    var li = document.createElement('li');
    li.innerHTML = 'With closure. Click me ' + i;
    ul.appendChild(li);
    li.onclick = function() {
        print("I'm number " + i);
    };
}
for (i = 0; i < 5; i++) { 
    appendLi(i);
}



h('extra messages');
