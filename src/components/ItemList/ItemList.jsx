import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 px-5'>
      {products.length > 0
        ? products.map(product => {
            return (
              <Item
                key={product.id}
                id={product.id}
                pictUrl={product.image}
                name={product.name}
                stock={product.stock}
                price={product.price}
                categoryName={product.categoryName}
              />
            );
          })
        : null}
    </div>
  );
};

export default ItemList;
