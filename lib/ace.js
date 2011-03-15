var uki = require('ukijs');

var script, ace, views = [];

function scheduleAce(view) {
    if (ace) {
        view.aceLoaded(ace);
    } else {
        if (!script) {
            script = uki.createElement('script', { src: '/vendor/ace.js' });
            uki.doc.body.appendChild(script);

            script.onload = function() {
                var modeScript = uki.createElement('script', { src: '/vendor/mod-javascript.js' });
                uki.doc.body.appendChild(modeScript);
                
                modeScript.onload = function() {
                    ace = window.ace;
                    uki.invoke(views, 'aceLoaded', ace);
                };
                
            };        
        }
        views.push(view);
    }
}

var Ace = uki.view.newClass('learn_js.Ace', uki.view.Base, {
    
    _createDom: function(initArgs) {
        uki.view.Base.prototype._createDom.call(this, initArgs);
        scheduleAce(this);
    },
    
    aceLoaded: function(ace) {
        this._ace = ace;
        this._editor = ace.edit(this.dom());
        var JavaScriptMode = window.require("ace/mode/javascript").Mode;
        this._editor.getSession().setMode(new JavaScriptMode());
        if (this._value) {
            this.value(this._value);
        }
    },
    
    resized: function() {
        if (this._editor) {
            var editor = this._editor;
            editor.resize();
        }
    },
    
    value: function(value) {
        if (value === undefined) {
            return this._editor ? this._editor.getSession().getValue() : this._value;
        }
        if (this._editor) {
            this._editor.getSession().setValue(value);
        } else {
            this._value = value;
        }
        return this;
    }
    
});

uki.Collection.addProps(['value']);

exports.Ace = Ace;
