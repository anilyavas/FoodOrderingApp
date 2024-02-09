import { FlatList } from 'react-native';
import orders from '@assets/data/orders';
import OrderListItem from '@/components/OrderListItem';

const OrderScreen = () => {
  return (
    <FlatList
      contentContainerStyle={{ padding: 10, gap: 10 }}
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
    />
  );
};

export default OrderScreen;
