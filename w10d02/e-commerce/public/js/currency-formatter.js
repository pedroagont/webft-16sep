const CADdollar = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});

const formatCAD = (price) => {
  return CADdollar.format(price / 100) + ' CAD';
};

const productPrices = document.querySelectorAll('li p.product-price');

for (const prodPrice of productPrices) {
  prodPrice.innerHTML = formatCAD(Number(prodPrice.innerHTML));
}
