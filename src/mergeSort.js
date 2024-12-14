function mergeSort(array) {
  // Caso base: se o array tem 1 ou 0 elementos, ele já está ordenado
  if (array.length <= 1) {
    return array;
  }

  // Dividindo o array ao meio
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Chamada recursiva para ordenar as duas metades
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Chamando a função recursiva de mesclagem
  return merge(sortedLeft, sortedRight);
}

// Função de mesclagem recursiva sem usar loops
function merge(left, right) {
  // Caso base: se um dos arrays estiver vazio, retorna o outro
  if (left.length === 0) {
    return right;
  }
  if (right.length === 0) {
    return left;
  }

  // Comparação recursiva dos primeiros elementos
  if (left[0] < right[0]) {
    // Se o primeiro elemento de left for menor, adicionamos ele e chamamos merge novamente
    return [left[0], ...merge(left.slice(1), right)];
  }
  // Caso contrário, adicionamos o primeiro elemento de right e chamamos merge novamente
  return [right[0], ...merge(left, right.slice(1))];
}

// Testando a função
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
