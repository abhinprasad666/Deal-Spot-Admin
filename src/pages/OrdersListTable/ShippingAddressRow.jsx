import React from "react";
import { MapPin } from "lucide-react";

const ShippingAddressRow = ({ address }) => (
  <tr>
    <td colSpan="10" className="p-4 bg-gray-50 dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-200">
      <div className="flex items-start space-x-4">
        <MapPin size={18} className="mt-1" />
        <div>
          <div className="font-semibold">Shipping Address</div>
          <div>{address.fullName}</div>
          <div>{address.addressLine1}, {address.city}</div>
          <div>{address.state}, {address.pincode}</div>
          <div>{address.country}</div>
          <div className="text-xs text-gray-500">Phone: {address.phone}</div>
        </div>
      </div>
    </td>
  </tr>
);

export default ShippingAddressRow;
