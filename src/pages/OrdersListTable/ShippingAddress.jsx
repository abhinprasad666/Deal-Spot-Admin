const ShippingAddress = ({ address }) => {
  return (
    <div className="mt-2 text-xs text-gray-700 space-y-1 dark:text-gray-100 ">
      <div>
        <strong>Name:</strong> {address.fullName}
      </div>
      <div>
        <strong>Phone:</strong> {address.phone}
      </div>
      <div>
        <strong>Address:</strong>{" "}
        {address.addressLine1}, {address.city}, {address.state} -{" "}
        {address.pincode}
      </div>
      <div>
        <strong>Country:</strong> {address.country}
      </div>
    </div>
  );
};

export default ShippingAddress;
