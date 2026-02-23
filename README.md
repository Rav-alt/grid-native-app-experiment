Documentation
Navigation
I implemented navigation in App.tsx because it is the root component of the application.
I used the following:

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

All screens are wrapped inside NavigationContainer and Stack.Navigator to manage screen transitions properly.


<NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
</NavigationContainer>

React Hooks (useState, useEffect, useContext)
useState

I used useState to manage state such as Username, User List, and Post List.

const [postList, setPostlist] = useState([]);
const [userList, setUserlist] = useState([]);
useEffect
I used useEffect to fetch API data when the component mounts.
Posts fetching example:
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json) => setPostlist(json));
  }, [])
  return {postList, setPostlist}
}

Users fetching example:
useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then ((res) => res.json())
    .then((json) => setUserlist(json));
  }, [])


  return {userList, setUserlist};
}

The empty dependency array [] ensures the data is fetched only once when the component loads.
useContext
I used useContext to avoid prop drilling between screens.

import { createContext } from "react";


type LoginContextType = {
  userName: string;
  setUserName: (name: string) => void;
};


export const LoginContext = createContext<LoginContextType>({
  userName: "",
  setUserName: () => {},
});



I wrapped the entire application with LoginContext.Provider so all screens can access userName and setUserName.


<LoginContext.Provider value={{ userName, setUserName }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
</LoginContext.Provider>


Context API and Provider
I used the Context API with a Provider to share global state (userName and setUserName) across all screens. This prevents prop drilling and makes the code cleaner and more maintainable.
API Data Fetching
To fetch the User List and Post List, I used the built-in fetch() function.
API endpoints used:
- https://jsonplaceholder.typicode.com/posts
- https://jsonplaceholder.typicode.com/users


useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json) => setPostlist(json));
  }, [])
  return {postList, setPostlist}
}

useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then ((res) => res.json())
    .then((json) => setUserlist(json));
  }, [])


  return {userList, setUserlist};
}

Custom Hooks
I created custom hooks (useFetchPost and useFetchUser) to separate the data-fetching logic from the UI. This improves code reusability and keeps App.tsx clean.
useFetchPost:

xport function useFetchpost () {
  const [postList, setPostlist] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json) => setPostlist(json));
  }, [])
  return {postList, setPostlist}
}


export function useFetchuser() {
  const [userList, setUserlist] = useState([]);


  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then ((res) => res.json())
    .then((json) => setUserlist(json));
  }, [])


  return {userList, setUserlist};
}

