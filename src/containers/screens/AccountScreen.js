import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../../components/Screen';
import ListItem from '../../components/ListItem';
import colors from '../../config/color'
import AppIcon from '../../components/AppIcon';
import ListItemSeparator from '../../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name:"format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name:"email",
            backgroundColor: colors.secondary
        }
    },
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Khairul Islam"
                    subTitle="islam.khairul.pro@gmail.com"
                    image={require("../../assets/images/KI.png")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => 
                    <ListItem   
                        title={item.title}
                        IconComponent={
                            <AppIcon 
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />
                        }
                    />
                }
                />
            </View>
            <View>
                <ListItem
                    title='Log Out'
                    IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d"/>}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 10
    }
})

export default AccountScreen;