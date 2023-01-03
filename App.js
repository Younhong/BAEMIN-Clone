import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const MainView = styled.View`
  background-color: tomato;
  flex: 1;
`;

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getUserData();

    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Logged In");
        setIsLoggedIn(true);
      } else {
        console.log("Did not log in");
        setIsLoggedIn(false);
      }
    });
  }, []);

  const getUserData = async() => {
    const user1 = await firestore().collection('Users').doc('8OZhCQiSkWYQGqvkJ7gN').get();
    console.log(user1.data());

    const user2 = await firestore().collection('Users').get();
    console.log(user2.docs.length);
    console.log(user2.docs[0].data());
  }

  return (
    <MainView />
  );
}
