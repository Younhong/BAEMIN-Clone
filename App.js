import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import LoggedInNav from './src/navigator/LoggedInNav';
import LoggedOutNav from './src/navigator/LoggedOutNav';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const queryClient = new QueryClient();

  useEffect(() => {
    getUserData();

    auth().onAuthStateChanged((user) => {
      if (!user) {
        console.log("Logged In");
        setIsLoggedIn(true);
      } else {
        console.log("Did not log in");
        setIsLoggedIn(false);
      }
    });
  }, []);

  const getUserData = async () => {
    const user1 = await firestore().collection('Users').doc('8OZhCQiSkWYQGqvkJ7gN').get();
    console.log(user1.data());

    const user2 = await firestore().collection('Users').get();
    console.log(user2.docs.length);
    console.log(user2.docs[0].data());
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
