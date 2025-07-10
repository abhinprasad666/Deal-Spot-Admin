const OrderProductList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item._id}
          className="flex items-center space-x-2 border p-1 rounded"
        >
          <img
            src={item.productId.image}
            alt="product"
            className="w-12 h-12 object-cover rounded"
          />
          <div>
            <div className="font-medium text-sm">{item.productId.title}</div>
            <div className="text-xs text-gray-600">
              Qty: {item.quantity} | ₹{item.productId.price}
            </div>
            <div className="text-xs">
              Review:{" "}
              {item.isReview !== null ? (
                <span className="text-green-600 font-semibold">
                  {item.isReview}⭐
                </span>
              ) : (
                <span className="text-red-500">Not given</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderProductList;
