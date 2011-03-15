requireCss('./lib/app.css');
global.localStorage || (global.localStorage = {});

var uki = require('ukijs'),
    Ace = require('./lib/ace').Ace,
    Iframe = require('./lib/iframe').Iframe;


var options = [
    { text: 'Basics', options: [
        { text: 'Variables', value: requireText('./basics/01_variables.js') },
        { text: 'Strings',   value: requireText('./basics/02_strings.js') },
        { text: 'Arrays',    value: requireText('./basics/03_arrays.js') },
        { text: 'Objects',   value: requireText('./basics/04_objects.js') },
        { text: 'Boolean',   value: requireText('./basics/05_boolean.js') },
        { text: 'Typecast',  value: requireText('./basics/06_typecast.js') },
        { text: 'Regexps',   value: requireText('./basics/07_regexps.js') }
    ] },
    { text: 'Functions', options: [
        { text: 'Names',     value: requireText('./functions/01_names.js') },
        { text: 'Objects',   value: requireText('./functions/02_objects.js') },
        { text: 'Context',   value: requireText('./functions/03_context.js') },
        { text: 'Arguments', value: requireText('./functions/04_arguments.js') },
        { text: 'New',       value: requireText('./functions/05_new.js') },
        { text: 'Closures',  value: requireText('./functions/06_closures.js') },
        { text: 'Scopes',    value: requireText('./functions/07_scopes.js') },
        { text: 'Bind',      value: requireText('./functions/08_bind.js') }
    ] },
    { text: 'Prototypes', options: [
        { text: 'Basics',      value: requireText('./prototypes/01_basics.js') },
        { text: 'Classes',     value: requireText('./prototypes/02_classes.js') },
        { text: 'Inheritance', value: requireText('./prototypes/03_inheritance.js') },
        { text: 'Mixins',      value: requireText('./prototypes/04_mixins.js') },
        { text: 'Native',      value: requireText('./prototypes/05_native.js') }
    ] }
];

uki([
    { 
        view: 'SplitPane', init: { vertical: true },
        pos: 'l:0 t:0 r:0 b:0',
        leftChildViews: [
            { view: 'Container', addClass: 'ljs-toolbar', 
              pos: 'l:0 r:0 t:0 h:29px', 
              childViews: [
                  { view: 'nativeControl.Select', options: options, pos: 'l:5px t:4px' },
                  { view: 'Button', label: 'Run Code (Ctrl+E)', pos: 'r:5px t:2px' }
              ]},
            { view: Ace, pos: 'l:0 t:30px r:0 b:0' }
        ],
        rightChildViews: [
            { view: Iframe, pos: 'l:0 t:0 r:0 b:0', covered: true,
              name: 'code-target' }
        ]
    }
]).attach();

uki('SplitPane').handlePosition(global.localStorage.splitPanePosition || 400);

uki('Select').on('change', function() {
    uki('Ace').value(this.value());
}).selectedIndex(global.localStorage.selectedIndex || 0).trigger({ type: 'change' });

uki('Button').on('click', runCode);

uki.addListener(global, 'keyup', function(e) {
    if (e.metaKey && e.keyCode == 69) {
        runCode();
    }
    
});

uki.addListener(global, 'unload', function() {
    global.localStorage.splitPanePosition = uki('SplitPane').handlePosition();
    global.localStorage.selectedIndex = uki('Select').selectedIndex();
});

function runCode() {
    post('/eval', { code: uki('Ace').value() });
}

function post(url, data) {
    var form = uki.createElement('form', { 
        target: uki('Iframe').name(),
        action: url,
        method: 'POST',
        className: 'ljs-iframe-form'
    });
    uki.forEach(data, function(value, key) {
        form.appendChild(uki.createElement('input', {
            type: 'hidden',
            name: key,
            value: value
        }));
    });
    uki.doc.body.appendChild(form);
    form.submit();
    uki.defer(function() {
        uki.removeElement(form);
    });
}