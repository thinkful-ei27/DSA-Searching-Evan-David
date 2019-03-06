import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    dataArr: [
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5
    ],
    inputNum: '',
    returnString: ''
  };
  _linearSearch(num) {
    let arr = this.state.dataArr;

    for (let i = 0; i < this.state.dataArr.length; i++) {
      if (arr[i] === num) {
        this.setState({ returnString: 'I found it in ' + (i + 1) + ' tries' });
        return i;
      }
    }
    this.setState({ returnString: 'That does not exist' });
  }

  binarySearch(arr, value, start = 0, end = arr.length - 1, counter = 0) {
    let index = Math.floor((start + end) / 2);

    let element = arr[index];
    if (start > end) {
      this.setState({ returnString: `could not find ${value}` });
      return -1;
    }

    if (element === value) {
      this.setState({ returnString: `Found ${value} in ${counter} tries` });
      return index;
    } else if (element < value) {
      return this.binarySearch(arr, value, index + 1, end, counter + 1);
    } else if (element > value) {
      return this.binarySearch(arr, value, start, index - 1, counter + 1);
    }
  }

  handleInput(e) {
    let number = Number(e.target.value);
    return this.setState({ inputNum: number });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="enter number"
          onChange={e => this.handleInput(e)}
        />
        <button onClick={e => this._linearSearch(this.state.inputNum)}>
          Linear Search
        </button>
        <button
          onClick={() =>
            this.binarySearch(
              this.state.dataArr.sort((a, b) => a - b),
              this.state.inputNum
            )
          }
        >
          Binary Search
        </button>
        <div>{this.state.returnString}</div>
      </div>
    );
  }
}

export default App;
