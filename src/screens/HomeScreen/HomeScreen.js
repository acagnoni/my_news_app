import React, {useState, useCallback} from 'react'

import { Header } from 'react-native-elements'
import { View, Text, Image, AppRegistry } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ReactTinyLink } from 'react-tiny-link'

import firebase, { analytics } from 'firebase' // import the sdk

const SharedItem = {
    mimeType: String,
    data: String,
    extraData: analytics,
}

const Test = () => {
    const [sharedData, setSharedData] = setState(null);

    const handleShare = useCallback((item) => {

        if (item === null) {
            return;
        }

        console.log(item);

    })

}

AppRegistry.registerComponent("Test", ()=> Test);

export default function HomeScreen({ route, navigation }) {
    const { screen, params } = route.params;

    const onAddClick = () => {
        navigation.navigate('Catalog', {
            screen: 'Catalog',
            params: params
        })
    }


    const retrieveCards = (id) => {

        const cardList = []
        firebase.firestore().collection('carts').doc(params.id)
            .get()
            .then(firestoreDocument => {
                if (!firestoreDocument.exists) {
                    return cardList

                }
                const card = firestoreDocument.data()['cart']
                if (card.length == 0) {
                    return cardList
                }
                card.array.forEach(element => {
                    cartList.push({
                        key: element.key,
                        name: element.name,

                    })

                })
            })
        return cardList
    }

    return (
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={
                    <Button
                        title="+" onPress={onAddClick}
                    />
                }
            />
            {
                retrieveCards(params.id).map((u, i) => {
                    <Card key={i}>
                        <Card.Title>CARD WITH DIVIDER</Card.Title>
                        <Card.Divider />

                        <Image
                            resizeMode="cover"
                            source={{ uri: u.key }}
                        />
                        <Text>{u.qty}</Text>

                    </Card>
                })
            }
             <Card key='10'>
                        <Card.Title>Amazon</Card.Title>
                        <Card.Divider />
            <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
            />
            </Card>

        </View>
    )
}