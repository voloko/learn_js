h('what if base constructor has side effects');

function ControlFreak() {
    var whoAmI = this.whoAmI();
    // addEventListener is non cross-browser, used as example
    document.addEventListener('click', function() {
        print(whoAmI);
    });
}
ControlFreak.prototype.whoAmI = function() {
    return "I'm super control freak!";
};




h('Prototype.js way, chaging the constructor');
var extending = false;
function inheritWithFix(Child, Parent) {
    extending = true;
    Child.prototype = new Parent;
    extending = false;
}

function ControlFreakFixed() {
    if (extending) { return; }
    var whoAmI = this.whoAmI();
    document.addEventListener('click', function() {
        print(whoAmI);
    });
}
ControlFreakFixed.prototype.whoAmI = function() {
    return "I'm control freak Fixed!";
};

function MegaControlFreakFixed() {
    if (extending) { return; }
    // calling base constructor
    ControlFreakFixed.call(this);
    var whoAmI = this.whoAmI();
    document.addEventListener('keyup', function() {
        print(whoAmI);
    });
}
inheritWithFix(MegaControlFreakFixed, ControlFreakFixed);
MegaControlFreakFixed.prototype.whoAmI = function() {
    return "I'm mega control freak Fixed!";
};

var freak1 = new MegaControlFreakFixed();
print('freak1 instance of ControlFreakFixed: ', freak1 instanceof ControlFreakFixed);
print('freak1 instance of MegaControlFreakFixed: ', freak1 instanceof MegaControlFreakFixed);





h('Crockford? way, leave the constructor intact');
function tmp() {}
function inherit(Child, Parent) {
    tmp.prototype = Parent.prototype;
    Child.prototype = new tmp();
}


function ControlFreak() {
    var whoAmI = this.whoAmI();
    document.addEventListener('click', function() {
        print(whoAmI);
    });
}
ControlFreak.prototype.whoAmI = function() {
    return "I'm control freak!";
};

function MegaControlFreak() {
    // calling base constructor
    ControlFreak.call(this);
    var whoAmI = this.whoAmI();
    document.addEventListener('keyup', function() {
        print(whoAmI);
    });
}
inherit(MegaControlFreak, ControlFreak);
MegaControlFreak.prototype.whoAmI = function() {
    return "I'm mega control freak!";
};

var freak2 = new MegaControlFreak();
print('freak2 instance of ControlFreak: ', 
    freak2 instanceof ControlFreak);
print('freak2 instance of MegaControlFreak: ', 
    freak2 instanceof MegaControlFreak);




h('note, we need only one tmp function');
function SuperMegaControlFreak() {
    // calling base constructor
    MegaControlFreak.call(this);
}
inherit(SuperMegaControlFreak, MegaControlFreak);
SuperMegaControlFreak.prototype.whoAmI = function() {
    return "I'm super mega control freak !";
};
var freak3 = new SuperMegaControlFreak();
print('freak3 instance of ControlFreak: ', 
    freak3 instanceof ControlFreak);
print('freak3 instance of MegaControlFreak: ', 
    freak3 instanceof MegaControlFreak);
print('freak3 instance of SuperMegaControlFreak: ', 
    freak3 instanceof SuperMegaControlFreak);


h('extra messages');
