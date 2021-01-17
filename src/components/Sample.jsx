import React, { Component } from 'react';

class Sample extends  Component {
    state={
        name: "Navin",
    };
    render() {
        return (
            <h1>Hello This is {this.state.name}.</h1>
        );
    }
};

export default Sample;
