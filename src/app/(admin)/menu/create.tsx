import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import Button from '@/components/Button';

const CreateProductScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [errors, setErrors] = useState('');

  const resetFields = () => {
    setName('');
    setPrice('');
  };

  const validateInput = () => {
    if (!name) {
      setErrors('Name is required');
      return false;
    }
    if (!price) {
      setErrors('Price is required');
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors('Price is not a number');
      return false;
    }
    return true;
  };
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn(name);

    // saved in the db

    resetFields();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder='Name'
        style={styles.input}
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        keyboardType='numeric'
        placeholder='9.99'
        style={styles.input}
      />
      <Text style={{ color: 'red' }}>{errors}</Text>
      <Button text='Create' onPress={onCreate} />
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: 'grey',
    fontSize: 16,
  },
});
