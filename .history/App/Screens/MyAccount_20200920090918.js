import React, {useState} from 'react';
import { Auth } from 'aws-amplify';

import {View, Text, StyleSheet, FlatList} from 'react-native'
import Screen from '../Screens/Screen'
import ListItem from '../Components/lists/ListItem'
import Icon from "../Components/Icon";
import routes from "../Navigation/routes";
import colors from '../config/colors'
import useAuth from "../Auth/useAuth";
import getUser from "../Auth/storage"

// Auth.currentAuthenticatedUser({
//     bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
// }).then(user => {})
// .catch(err => console.log(err));

function MyAccount (props) { 
   const { user, logOut } = useAuth();

   console.log(user.CognitoUserSession)

return ( 
<Screen>
<View style={styles.container}>
    <ListItem 
    image={require('../assets/me.jpg')}
    title={"title"}
    />
</View>
{/* <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View> */}
       <ListItem
        title="Settings"
        IconComponent={<Icon name="settings" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
</Screen>
);
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 15,
        marginTop: 100,
        backgroundColor: colors.white
    },
    subContainer: {
        padding: 10,
        marginBottom: 10,
        marginTop: 30,
        margin: 15,
        backgroundColor: colors.white,
     },

})
export default MyAccount