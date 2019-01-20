// getVisibleBooks
export default (products, { sortBy }) => {
  return products.sort((product1, product2) => {
      if (sortBy === 'nombre') {
          return product1.nombre.localeCompare(product2.nombre);
      } else if (sortBy === 'precio') {
          return parseInt(product1.precio) < parseInt(product2.precio) ? -1 : 1;
      }
  });
};