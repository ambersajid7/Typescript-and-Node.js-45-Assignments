var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['cape town', 'delhi', 'faislabad', 'bankok', 'ahmedabad'];
//console.log('original:' + places);
//console.log('copy ' + [...places].sort())
//console.log('original:' + places);
console.log('copy  ' + __spreadArray([], places, true).sort().reverse());
console.log('copy ' + [places].sort().reverse());
console.log('original ' + places.sort());
