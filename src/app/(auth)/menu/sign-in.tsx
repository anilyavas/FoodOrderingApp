import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import Colors from '@/constants/Colors';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>SignIn</Text>
      <TextInput placeholder='jon@gmail.com' />
      <Button text='Sign in' />
      <Button text='Create an account' />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {},
});
