function getNumeros() {
    const input = document.getElementById("numeros").value;
    return input.split(",").map(num => parseFloat(num));
  }
  
  function getNumeros2() {
    const input = document.getElementById("numeros2").value;
    return input.split(",").map(num => parseFloat(num));
  }
  
  function mostrarResultado(resultado) {
    document.getElementById("resultado").textContent = resultado;
  }
  
  function calcularSuma() {
    const numeros = getNumeros();
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    mostrarResultado(`Suma de elementos: ${suma}`);
  }
  
  function calcularPromedio() {
    const numeros = getNumeros();
    const promedio = numeros.length === 0 ? 0 : numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
    mostrarResultado(`Promedio de elementos: ${promedio}`);
  }
  
  function ordenarAscendente() {
    const numeros = getNumeros();
    const numerosOrdenados = numeros.slice().sort((a, b) => a - b);
    mostrarResultado(`Array ordenado ascendente: ${numerosOrdenados}`);
  }
  
  function obtenerMayores() {
    const numeros = getNumeros();
    const numeroReferencia = parseFloat(document.getElementById("numeroReferencia").value);
    const mayores = numeros.filter(num => num > numeroReferencia);
    mostrarResultado(`Elementos mayores a ${numeroReferencia}: ${mayores}`);
  }
  
  function combinarArrays() {
    const numeros = getNumeros();
    const numeros2 = getNumeros2();
    const combinados = numeros.concat(numeros2);
    mostrarResultado(`Arrays combinados: ${combinados}`);
  }