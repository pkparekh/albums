import React from 'react';
import{ Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    // destructuring the prop and its properties which are used in this component
    const { title, artist, thumbnail_image, image, url } = album;
    // destructuring the styles object
    const {
        headerContentStyle,
        headerTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    // used static urls for restriction concerns in office
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        // source={{ uri: thumbnail_image }}
                        source={{ uri: 'https://media.pitchfork.com/photos/5929c375eb335119a49ed6f6/1:1/w_320/d17fe61e.jpg' }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    // source={{ uri: image }}
                    source={{ uri: 'https://media.pitchfork.com/photos/5929c375eb335119a49ed6f6/1:1/w_320/d17fe61e.jpg' }}
                />
            </CardSection>

            <CardSection>
                {/* <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button> */}
                <Button onPress={() => Linking.openURL('https://google.com')}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 20
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;