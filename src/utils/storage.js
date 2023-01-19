const BASKET = "BASKET";

//  장바구니 상품을 가져오는거
export const getBasketItems = () => {
  const items = localStorage.getItem(BASKET);
  return items ? JSON.parse(items) : [];
};

//  상품을 추가하는거
export const addBasket = (product) => {
  let items = getBasketItems();

  //  동일 상품이 있는 경우 추가하지 않음
  const isSameProduct = !!items.find((item) => item.id === product.id);

  if (!isSameProduct) {
    items.push(product);
    localStorage.setItem(BASKET, JSON.stringify(items));
  }
};

export const removeBasketItem = (productId) => {
  //  기존 장바구니 상품 리스트 가져오기
  let items = getBasketItems();

  //  상품 하나 제거한 리스트 만들기
  items = items.filter((item) => item.id !== productId);

  //  로컬스토리지에서 장바구니 정보 날리기
  localStorage.removeItem(BASKET);

  //  다시 상품 리스트 저장하기
  localStorage.setItem(BASKET, JSON.stringify(items));
};
