// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component - It is a js function that returns some amout of jsx
const App = () => {
    return (
        // <Text>Some text</Text>
        <Header headerText={'Albums!'} />
    );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);