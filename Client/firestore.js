import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');
const userDocument = firestore().collection('Users').doc('ABC');
const users = await firestore().collection('Users').get();
const user = await firestore().collection('Users').doc('ABC').get();

firestore()
  .collection('Users')
  // Filter results
  .where('age', '>=', 18)
  .get()
  .then(querySnapshot => {
    /* ... */
  });