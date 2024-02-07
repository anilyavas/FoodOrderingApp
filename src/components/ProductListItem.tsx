import { StyleSheet, View, Text, Image } from 'react-native';
import products from '@assets/data/products';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Product } from '../../types';

type ProductListItemProps = {
  product: Product;
};
const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
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
