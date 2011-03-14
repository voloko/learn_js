// helper function
function createButton(text, top) {
    var button = document.createElement('button');
    button.innerHTML = text;
    button.style.cssText = 'position: absolute; right: 10px; top:' + top + 'px';
    document.body.appendChild(button);
    return button;
}



h('binding function to a context, step 1');
function bind1(fn, context) {
    return function() {
        return fn.apply(context, arguments);
    };
}
var ButtonController1 = {
    id: 'ctrl-1',

    click: function(e) {
        print('Click handler in controller: ' + this.id +
            '\n  for event type: ' + e.type);
    }
};

createButton('step 1', 10).onclick =
    bind1(ButtonController1.click, ButtonController1);




h('binding function to a context, step 2');
var slice = [].slice;
print('native slice function: ', slice);
function bind2(fn, context) {
    var extraArguments = slice.call(arguments, 2);
    return function() {
        var args = slice.call(arguments);
        return fn.apply(context, extraArguments.concat(args));
    };
};
var ButtonController2 = {
    id: 'ctrl-2',

    click: function(message, number, e) {
        print('Click handler in controller: ' + this.id +
            '\n  with message: ' + message +
            '\n  with number: ' + number +
            '\n  for event type: ' + e.type);
    }
};
createButton('step 2', 40).onclick =
    bind2(ButtonController2.click, ButtonController2, 'Yuppie!', 42);



h('extra messages');