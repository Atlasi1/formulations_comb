function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result = BigInt(result) * BigInt(i);
    }
    return result;
}

function generatePermutations(arr, k, withRepetition) {
    const permutations = [] // T[][]
    const permutation = Array(k) // T[]
  
    // const internalPermutate = (elements: T[], depth: number): void => {
    const internalPermutate = (elements, depth) => {
      if (depth === k) {
        permutations.push([...permutation])
        return
      }
      elements.forEach((element, index) => {
        permutation[depth] = element
        const partial = withRepetition
          ? elements
          : [...elements.slice(0, index), ...elements.slice(index + 1)]
        internalPermutate(partial, depth + 1)
      })
    }
    internalPermutate(arr, 0)
    return permutations
  }

function generateCombinationsWithoutRepetitions(array, k) {
    const n = array.length - 1; // максимальный индекс массива элементов
    const m = k - 1; // максимальный индекс массива-маски сочетания
    const finds = []; // массив всех возможных осчетаний
    const mask = []; // маска сочетания
    let finish = false;
    for (let i = 0; i < k; i++) mask.push(array[i]);
    while (!finish) {
      finish = true;
      const str = mask.join(', ');
      if (!finds.includes(str)) finds.push(str); // записываем сочетание в массив
      for (let i = 0; i < k; i++) {
        if (mask[m - i] != array[n - i]) {
          // проверяем, остались ли еще сочетания
          finish = false;
          let p = array.indexOf(mask[m - i]);
          mask[m - i] = array[++p]; // изменяем маску, начиная с последнего элемента
          for (let j = m - i + 1; j < k; j++) {
            mask[j] = array[++p];
          }
          break;
        }
      }
    }
    return finds;
  }

  function generateCombinationsWithRepetitions(arr, l) {
    if(l === void 0) l = arr.length; // Length of the combinations
    var data = Array(l),             // Used to store state
        results = [];                // Array of results
    (function f(pos, start) {        // Recursive function
      if(pos === l) {                // End reached
        results.push(data.slice());  // Add a copy of data to results
        return;
      }
      for(var i=start; i<arr.length; ++i) {
        data[pos] = arr[i];          // Update data
        f(pos+1, i);                 // Call f recursively
      }
    })(0, 0);                        // Start at index 0
    return results;                  // Return results
  }

function f() {
    var kInput = document.getElementById("count").value
    var nInput = document.getElementById("n").value
    var res = document.getElementById("resultText")
    var restext = document.getElementById("res")
    restext.innerText = "Результат: "
    if(nInput.indexOf(",") >= 0) {
        if(isNumeric(kInput)) {
            var intArray = nInput.split(',').map(Number).filter(Boolean);
            var result = generateCombinationsWithoutRepetitions(intArray, Number(kInput))
            for (let i = 0; i < result.length; i++) {
                var k = i + 1
                if(i % 2 === 0) {
                    res.innerHTML += '<p>' + '<span style="color: red;">' + k + " </span>" + result[i] + '</p>'
                }
                else {
                    res.innerHTML += '<p>' + '<span style="color: red;">' + k + " </span>" + result[i] + '</p>'
                }
            }
        }
        else {
            res.innerText = "Ошибка. Неправильный ввод"
        }
    }
    else if(isNumeric(kInput) && isNumeric(nInput)) {
        k = Number(kInput)
        n = Number(nInput)
        if(!(k >= n)) {
            res.innerText = factorial(n) / (factorial(k) * factorial(n - k))
        }
        else {
            res.innerText = "Ошибка. Число k больше, чем n"
        }
    }
    else {
        res.innerText = "Ошибка. Некорректный ввод"
    }
}

function f2() {
    var kInput = document.getElementById("count2").value
    var nInput = document.getElementById("n2").value
    var res = document.getElementById("resultText2")
    var restext = document.getElementById("res2")
    restext.innerText = "Результат: "
    if(nInput.indexOf(",") >= 0) {
        if(isNumeric(kInput)) {
            var intArray = nInput.split(',').map(Number).filter(Boolean);
            var result = generateCombinationsWithRepetitions(intArray, Number(kInput))
            for (let i = 0; i < result.length; i++) {
                var k = i + 1
                if(i % 2 === 0) {
                    res.innerHTML += '<p>' + '<span style="color: red;">' + k + " </span>" + result[i] + '</p>'
                }
                else {
                    res.innerHTML += '<p>' + '<span style="color: red;">' + k + " </span>" + result[i] + '</p>'
                }
            }
        }
        else {
            res.innerText = "Ошибка. Неправильный ввод"
        }
    }
    else if(isNumeric(kInput) && isNumeric(nInput)) {
        k = Number(kInput)
        n = Number(nInput)
        if(!(k >= n)) {
            res.innerText = factorial(n + k - 1) / (factorial(k) * factorial(n - 1))
        }
        else {
            res.innerText = "Ошибка. Число k больше, чем n"
        }
    }
    else {
        res.innerText = "Ошибка. Некорректный ввод"
    }
}

function f_p() {
    var kInput = document.getElementById("count").value
    var nInput = document.getElementById("n").value
    var res = document.getElementById("resultText")
    var restext = document.getElementById("res")
    restext.innerText = "Результат: "
    if(nInput.indexOf(",") >= 0) {
        if(isNumeric(kInput)) {
            var intArray = nInput.split(',').map(Number).filter(Boolean);
            var result = generatePermutations(intArray, Number(kInput), false)
            for (let i = 0; i < result.length; i++) {
                var k = i + 1
                if(i % 2 === 0) {
                    res.innerHTML += '<p>' + '<span style="color: red;">' + k + " </span>" + result[i] + '</p>'
                }
                else {
                    res.innerHTML += '<p>' + '<span style="color: red;">' + k + " </span>" + result[i] + '</p>'
                }
            }
        }
        else {
            res.innerText = "Ошибка. Неправильный ввод"
        }
    }
    else if(isNumeric(kInput) && isNumeric(nInput)) {
        k = Number(kInput)
        n = Number(nInput)
        if(!(k >= n)) {
            res.innerText = factorial(n) / factorial(n - k)
        }
        else {
            res.innerText = "Ошибка. Число k больше, чем n"
        }
    }
    else {
        res.innerText = "Ошибка. Некорректный ввод"
    }
}

function f_p2() {
    var kInput = document.getElementById("count2").value
    var nInput = document.getElementById("n2").value
    var res = document.getElementById("resultText2")
    var restext = document.getElementById("res2")
    restext.innerText = "Результат: "
    if(nInput.indexOf(",") >= 0) {
        if(isNumeric(kInput)) {
            var intArray = nInput.split(',').map(Number).filter(Boolean);
            var result = generatePermutations(intArray, Number(kInput), true)
            for (let i = 0; i < result.length; i++) {
                var k = i + 1
                if(i % 2 === 0) {
                    res.innerHTML += '<p>' + '<span style="color: red;">' + k + " </span>" + result[i] + '</p>'
                }
                else {
                    res.innerHTML += '<p>' + '<span style="color: red;">' + k + " </span>" + result[i] + '</p>'
                }
            }
        }
        else {
            res.innerText = "Ошибка. Неправильный ввод"
        }
    }
    else if(isNumeric(kInput) && isNumeric(nInput)) {
        k = Number(kInput)
        n = Number(nInput)
        if(!(k >= n)) {
            res.innerText = n ** k
        }
        else {
            res.innerText = "Ошибка. Число k больше, чем n"
        }
    }
    else {
        res.innerText = "Ошибка. Некорректный ввод"
    }
}

function clearall() {
    var kInput = document.getElementById("count")
    var nInput = document.getElementById("n")
    var res = document.getElementById("resultText")
    var restext = document.getElementById("res")
    restext.innerText = ""
    kInput.value = "k"
    nInput.value = "n"
    res.innerText = ""
}

function clearall2() {
    var kInput = document.getElementById("count2")
    var nInput = document.getElementById("n2")
    var res = document.getElementById("resultText2")
    var restext = document.getElementById("res2")
    restext.innerText = ""
    kInput.value = "k"
    nInput.value = "n"
    res.innerText = ""
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function g() {
    console.log(factorial(5))
}

g()