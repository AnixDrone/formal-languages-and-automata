var Icons = /** @class */ (function () {
    function Icons() {
    }
    Icons.successSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-check-square-fill\" viewBox=\"0 0 16 16\">\n" +
        "  <path d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z\"/>\n" +
        "</svg>";
    Icons.failureSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"gray\" class=\"bi bi-x-square-fill\" viewBox=\"0 0 16 16\">\n" +
        "  <path d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z\"/>\n" +
        "</svg>";
    Icons.trashSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"red\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n" +
        "  <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n" +
        "  <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n" +
        "</svg>";
    return Icons;
}());
function checkForAllWords(pattern) {
    var trueWords = document.querySelectorAll("#trueWords > div");
    var falseWords = document.querySelectorAll("#falseWords > div");
    for (var i = 0; i < trueWords.length; i++) {
        var divs = trueWords.item(i).getElementsByTagName('div');
        var word = divs.item(0);
        var success = divs.item(1).querySelector("svg");
        var failure = divs.item(2).querySelector("svg");
        if (checkWord(pattern, word.textContent)) {
            success.setAttribute("style", "fill:green");
            failure.setAttribute("style", "fill:gray");
        }
        else {
            success.setAttribute("style", "fill:gray");
            failure.setAttribute("style", "fill:red");
        }
    }
    for (var i = 0; i < falseWords.length; i++) {
        var divs = falseWords.item(i).getElementsByTagName('div');
        var word = divs.item(0);
        var success = divs.item(1).querySelector("svg");
        var failure = divs.item(2).querySelector("svg");
        if (!checkWord(pattern, word.textContent)) {
            success.setAttribute("style", "fill:green");
            failure.setAttribute("style", "fill:gray");
        }
        else {
            success.setAttribute("style", "fill:gray");
            failure.setAttribute("style", "fill:red");
        }
    }
}
function checkWord(pattern, word) {
    var result;
    try {
        var re = new RegExp("^" + pattern + "$");
        result = re.test(word);
    }
    catch (err) {
        result = false;
    }
    return result;
}
function addWord(inputWord, ulId) {
    var words = inputWord.value.split("\n");
    inputWord.value = "";
    var _loop_1 = function (word) {
        var element = document.getElementById(ulId);
        var row = document.createElement("div");
        row.className = "row";
        var par = document.createElement("div");
        par.appendChild(document.createTextNode(word));
        par.className = "col-sm-6";
        var success = document.createElement("div");
        success.className = "col-sm-1";
        success.innerHTML = Icons.successSVG;
        var failure = document.createElement("div");
        failure.className = "col-sm-1";
        failure.innerHTML = Icons.failureSVG;
        var del = document.createElement("button");
        del.innerHTML = Icons.trashSVG;
        del.className = "btn btn-sm offset-3 col-sm-1";
        del.onclick = function () {
            element.removeChild(row);
        };
        row.appendChild(par);
        row.appendChild(success);
        row.appendChild(failure);
        row.appendChild(del);
        element.appendChild(row);
    };
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        _loop_1(word);
    }
}
