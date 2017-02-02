var hoge = (function () {
    function hoge() {
        console.log('contructor!!!!');
    }
    hoge.prototype.nyaan = function (voice) {
        console.log(voice);
    };
    return hoge;
}());
var fuga = new hoge;
fuga.nyaan('wan');
fuga.nyaan('kokekokko-');
