import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar
                rounded
                source={{
                    uri:
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: '900' }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    Demo Subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({});