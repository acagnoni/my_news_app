import React, { useState } from 'react'
import { StyleSheet, View, Alert } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { Header, Card, ListItem, Button } from 'react-native-elements'

import firebase from 'firebase' // import the sdk

export default function CatalogScreen({ route, navigation }) {

    const [level, setLevel] = useState({
        level_1: -1,
        level_2: -1,
        level_3: -1
    })
    const level_2 = -1
    const level_3 = -1

    const retrieveCat1 = () => {

        const catList = []
        const catRef = firebase.firestore().collection('category_1')
        catRef
            .get()
            .then(docs => {
                docs.forEach(element => {
                    catList.push({
                        value: element.data()['key'],
                        label: element.data()['description']
                    })
                })
                console.log(catList)
                return catList
            })
            .catch(err => {
                console.log('Error getting document: ', err)
            })
        return catList
    }

    const retrieveCat2 = (cat1_code) => {

        const catList = []
        const catRef = firebase.firestore().collection('category_2').where('category_1_key', '==', cat1_code)
        catRef
            .get()
            .then(docs => {
                docs.forEach(element => {
                    catList.push({
                        value: element.data()['key'],
                        label: element.data()['description']
                    })
                })
                console.log(catList)
                return catList
            })
            .catch(err => {
                console.log('Error getting document: ', err)
            })
        return catList
    }

    const retrieveCat3 = (cat2_code) => {

        const catList = []
        const catRef = firebase.firestore().collection('category_3').where('category_2_key', '==', cat2_code)
        catRef
            .get()
            .then(docs => {
                docs.forEach(element => {
                    catList.push({
                        value: element.data()['key'],
                        label: element.data()['description']
                    })
                })
                console.log(catList)
                return catList
            })
            .catch(err => {
                console.log('Error getting document: ', err)
            })
        return catList
    }

    return (
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Catalogo', style: { color: '#fff' } }}
                rightComponent={
                    <Button
                        title="+"
                    />
                }
            />
            <Card key='1'>
                <Card.Title>Categoria 1</Card.Title>
                <Card.Divider />

                <DropDownPicker
                    items={retrieveCat1()}
                    defaultIndex={0}
                    containerStyle={{ height: 40 }}
                    onChangeItem={item => setLevel({
                        level_1: item.value,
                        level_2: -1,
                        level_3: -1
                    })}
                />
            </Card>

            {level.level_1 != -1 ? (
                <>
                <Card key='2'>
                    <Card.Title>Categoria 2</Card.Title>
                    <Card.Divider />

                    <DropDownPicker
                        items={retrieveCat2(level.level_1)}
                        defaultIndex={0}
                        containerStyle={{ height: 40 }}
                        onChangeItem={item => setLevel({
                            level_1: level.level_1,
                            level_2: item.value,
                            level_3: -1
                        })}
                    />
                </Card>
                </>
            ) : (
                <>
                </>
            )}

            {level.level_2 != -1 ? (
                <>
                <Card key='3'>
                    <Card.Title>Categoria 3</Card.Title>
                    <Card.Divider />

                    <DropDownPicker
                        items={retrieveCat3(level.level_2)}
                        defaultIndex={0}
                        containerStyle={{ height: 40 }}
                        onChangeItem={item => setLevel({
                            level_1: level.level_1,
                            level_2: level.level_2,
                            level_3: item.value
                        })}
                    />
                </Card>
                </>
            ) : (
                <>
                </>
            )}

        </View>
    );

}
