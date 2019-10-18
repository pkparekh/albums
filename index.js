// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component - It is a js function that returns some amout of jsx
const App = () => {
    return (
        <Text>Some text</Text>
    );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);