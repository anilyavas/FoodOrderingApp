import { ActivityIndicator, FlatList } from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@/components/ProductListItem';
import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';

export default function MenuScreen() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
