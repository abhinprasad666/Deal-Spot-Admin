import {
  Users, ShoppingCart, Package, DollarSign,
  UserCheck, MessageSquareText, Clock,
  XCircle, CheckCircle2, Truck
} from "lucide-react";
import ButtonLoader from "../../components/loaders/ButtonLoader";

const renderValue = ({ loading, error, value }) => {
  if (loading) return <ButtonLoader message="Loading" />;
  if (error) return <p className="text-sm text-red-500">Error</p>;
  return value || 0;
};

 export  const DashboardStats = ({
  usersLoading, usersError, users,
  sellersLoading, sellersError, sellers,
  productsLoading, productsError, products,
  reviewsLoading, reviewsError, reviews,
  ordersLoading, ordersError, orders,
  orderStatusCounts,
  totalRevenue, revenuesError,orderStatusCountsError
}) => [
  {
    label: "Total Customers",
    value: renderValue({ loading: usersLoading, error: usersError, value: users?.count }),
    icon: <Users className="text-white" size={24} />,
    bg: "bg-blue-500",
    link: "/admin/users",
  },
  {
    label: "Total Sellers",
    value: renderValue({ loading: sellersLoading, error: sellersError, value: sellers?.count }),
    icon: <UserCheck className="text-white" size={24} />,
    bg: "bg-teal-500",
    link: "/admin/sellers",
  },
  {
    label: "Total Products",
    value: renderValue({ loading: productsLoading, error: productsError, value: products?.count }),
    icon: <Package className="text-white" size={24} />,
    bg: "bg-yellow-500",
    link: "/admin/products",
  },
  {
    label: "Total Reviews",
    value: renderValue({ loading: reviewsLoading, error: reviewsError, value: reviews?.count }),
    icon: <MessageSquareText className="text-white" size={24} />,
    bg: "bg-indigo-500",
    link: "/admin/reviews",
  },
  {
    label: "Total Orders",
    value: renderValue({ loading: ordersLoading, error: ordersError, value: orders?.count }),
    icon: <ShoppingCart className="text-white" size={24} />,
    bg: "bg-green-500",
    link: "/admin/orders",
  },
  {
    label: "Pending Orders",
    value: renderValue({ loading: ordersLoading, error:orderStatusCountsError, value: orderStatusCounts?.Pending }),
    icon: <Clock className="text-white" size={24} />,
    bg: "bg-orange-500",
    link: "/admin/orders?status=pending",
  },
  {
    label: "Cancelled Orders",
    value: renderValue({ loading: ordersLoading, error: orderStatusCountsError, value: orderStatusCounts?.Cancelled }),
    icon: <XCircle className="text-white" size={24} />,
    bg: "bg-red-600",
    link: "/admin/orders?status=cancelled",
  },
  {
    label: "Confirmed Orders",
    value: renderValue({ loading: ordersLoading, error: orderStatusCountsError, value: orderStatusCounts?.Confirmed }),
    icon: <CheckCircle2 className="text-white" size={24} />,
    bg: "bg-blue-600",
    link: "/admin/orders?status=confirmed",
  },
  {
    label: "Delivered Orders",
    value: renderValue({ loading: ordersLoading, error:orderStatusCountsError, value: orderStatusCounts?.Delivered }),
    icon: <Truck className="text-white" size={24} />,
    bg: "bg-emerald-600",
    link: "/admin/orders?status=delivered",
  },
  {
    label: "Revenue",
    value: renderValue({ loading: ordersLoading, error: revenuesError, value: totalRevenue }),
    icon: <DollarSign className="text-white" size={24} />,
    bg: "bg-pink-500",
    link: "/",
  },
];
