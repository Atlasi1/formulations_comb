function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = BigInt(result) * BigInt(i);
  }
  return result;
}

function generatePermutations(arr, k, withRepetition) {
  const permutations = []; // T[][]
  const permutation = Array(k); // T[]

  // const internalPermutate = (elements: T[], depth: number): void => {
  const internalPermutate = (elements, depth) => {
    if (depth === k) {
      permutations.push([...permutation]);
      return;
    }
    elements.forEach((element, index) => {
      permutation[depth] = element;
      const partial = withRepetition
        ? elements
        : [...elements.slice(0, index), ...elements.slice(index + 1)];
      internalPermutate(partial, depth + 1);
    });
  };
  internalPermutate(arr, 0);
  return permutations;
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function f() {
  var nInput = document.getElementById("n").value;
  var res = document.getElementById("resultText");
  var restext = document.getElementById("res");
  restext.innerText = "Результат: ";
  if (nInput.indexOf(",") >= 0) {
    var intArray = nInput.split(",").map(Number).filter(Boolean);
    var result = generatePermutations(intArray, intArray.length, false);
    for (let i = 0; i < result.length; i++) {
      var k = i + 1;
      if (i % 2 === 0) {
        res.innerHTML +=
          "<p>" +
          '<span style="color: red;">' +
          k +
          " </span>" +
          result[i] +
          "</p>";
      } else {
        res.innerHTML +=
          "<p>" +
          '<span style="color: red;">' +
          k +
          " </span>" +
          result[i] +
          "</p>";
      }
    }
  } else if (isNumeric(nInput)) {
    n = Number(nInput);
    res.innerText = factorial(n);
  } else {
    res.innerText = "Ошибка. Некорректный ввод";
  }
}

function f2() {
  var nInput = document.getElementById("n2").value;
  var res = document.getElementById("resultText2");
  var restext = document.getElementById("res2");
  restext.innerText = "Результат: ";
  if (nInput.indexOf(",") >= 0) {
    var intArray = nInput.split(",").map(Number).filter(Boolean);
    var result = generatePermutations(intArray, intArray.length, true);
    for (let i = 0; i < result.length; i++) {
      var k = i + 1;
      if (i % 2 === 0) {
        res.innerHTML +=
          "<p>" +
          '<span style="color: red;">' +
          k +
          " </span>" +
          result[i] +
          "</p>";
      } else {
        res.innerHTML +=
          "<p>" +
          '<span style="color: red;">' +
          k +
          " </span>" +
          result[i] +
          "</p>";
      }
    }
  } else if (isNumeric(nInput)) {
    n = Number(nInput);
    res.innerText = generatePermutations(Array.from(Array(n).keys()), n, true).length
  } else {
    res.innerText = "Ошибка. Некорректный ввод";
  }
}

function clearall() {
  var nInput = document.getElementById("n");
  var res = document.getElementById("resultText");
  var restext = document.getElementById("res");
  restext.innerText = "";
  nInput.value = "n";
  res.innerText = "";
}

function clearall2() {
  var nInput = document.getElementById("n2");
  var res = document.getElementById("resultText2");
  var restext = document.getElementById("res2");
  restext.innerText = "";
  nInput.value = "n";
  res.innerText = "";
}

function g() {
  var a = factorial(5);
  console.log(a);
}
