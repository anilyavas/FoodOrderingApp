import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Product } from '../../types';
import { Link } from 'expo-router';

type ProductListItemProps = {
  product: Product;
};
const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={'/product'} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{
            uri:
              product.image ||
              'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png',
          }}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 10,
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});
