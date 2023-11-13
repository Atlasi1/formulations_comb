function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result = result * i;
    }
    return result;
}

function comb(k, n) {
    return factorial(n) / (factorial(k) * factorial(n - k))
}

function f() {
    var nInput = document.getElementById("n").value
    var kInput = document.getElementById("k").value
    var mInput = document.getElementById("m").value
    var res = document.getElementById("resultText")
    var restext = document.getElementById("res")
    restext.innerText = "Результат: "
    if(isNumeric(nInput) && isNumeric(kInput) && isNumeric(mInput)) {
        var k = Number(kInput)
        var n = Number(nInput)
        var m = Number(mInput)
        if(k > m || m > n || k > n) {
            res.innerText = "Ошибка."
        }
        else {
            res.innerHTML = comb(k, m) / comb(k, n)
        }
        
    }
    else {
        res.innerText = "Ошибка. Некорректный ввод"
    }
}

function f2() {
    var nInput = document.getElementById("n2").value
    var kInput = document.getElementById("k2").value
    var mInput = document.getElementById("m2").value
    var rInput = document.getElementById("r2").value
    var res = document.getElementById("resultText2")
    var restext = document.getElementById("res2")
    restext.innerText = "Результат: "
    if(isNumeric(nInput) && isNumeric(kInput) && isNumeric(mInput) && isNumeric(rInput)) {
        var k = Number(kInput)
        var n = Number(nInput)
        var m = Number(mInput)
        var r = Number(rInput)
        if(k > m || m > n || k > n || r > k || r > m || r > n) {
            res.innerText = "Ошибка."
            return
        }
        res.innerText = (comb(r, m) * comb(k - r, n - m))/ comb(k, n)
    }
    else {
        res.innerText = "Ошибка. Некорректный ввод"
    }
}

function f3() {
    var nInput = document.getElementById("n3").value
    var res = document.getElementById("resultText3")
    var restext = document.getElementById("res3")
    restext.innerText = "Результат: "
    if(isNumeric(nInput)) {
        var n = Number(nInput)
        res.innerText = factorial(n)
    }
    else {
        res.innerText = "Ошибка. Некорректный ввод"
    }
}

function clearall() {
    var nInput = document.getElementById("n")
    var kInput = document.getElementById("k")
    var mInput = document.getElementById("m")
    var res = document.getElementById("resultText")
    var restext = document.getElementById("res")
    restext.innerText = ""
    kInput.value = "k"
    nInput.value = "n"
    mInput.value = "m"
    res.innerText = ""
}

function clearall2() {
    var nInput = document.getElementById("n2")
    var kInput = document.getElementById("k2")
    var mInput = document.getElementById("m2")
    var rInput = document.getElementById("r2")
    var res = document.getElementById("resultText2")
    var restext = document.getElementById("res2")
    restext.innerText = ""
    kInput.value = "k"
    nInput.value = "n"
    mInput.value = "m"
    rInput.value = "r"
    res.innerText = ""
}

function clearall() {
    var nInput = document.getElementById("n3")
    var res = document.getElementById("resultText3")
    var restext = document.getElementById("res3")
    restext.innerText = ""
    nInput.value = "n"
    res.innerText = ""
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}