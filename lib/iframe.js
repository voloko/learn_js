requireCss('./iframe/iframe.css');

var uki = require('ukijs');

var Iframe = uki.view.newClass('learn_js.Iframe', uki.view.Base, {
    
    _createDom: function(initArgs) {
        this._iframe = uki.createElement('iframe', { className: 'ljs-iframe-iframe' });
        this._dom = uki.createElement('div', {}, [this._iframe]);
    },
    
    /**
    * Catches mouse events. Fixes drag
    */
    covered: uki.newProp('covered', function(state) {
        if (!this._cover && state) {
            this._cover = uki.createElement('div', { className: 'ljs-iframe-cover' });
            this._dom.appendChild(this._cover);
        } else {
            uki.toggleClass(this._cover, 'ljs-iframe-cover_hidden', !state);
        }
    }),
    
    src: uki.newDelegateProp('_iframe', 'src'),
    
    name: uki.newDelegateProp('_iframe', 'name')
    
});

uki.Collection.addProps(['covered', 'src', 'name']);



exports.Iframe = Iframe;

