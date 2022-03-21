
import React, { Component } from 'react';
export default class Box extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            name: 'lipp',
            age: '131'
        }
    }
    render() {
        return <div class="box"> //注意 最外层元素有且只有一个（必须有，而且只能有一个）
            <span>我的名字是{this.state.name}</span><br />
            <span>我今年{this.state.age}岁</span>
        </div>
    }
}