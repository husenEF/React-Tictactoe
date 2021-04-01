import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

const delay = (t = 2) =>
  new Promise(resolve => setTimeout(() => resolve(), t * 1000));
class App2 extends Component {
  state = {
    gameBox: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    player: 1,
    aiLoading: false,
  };

  componentDidMount() {
    // this.setDraw();
    this.resetGames();
  }

  resetGames = () =>
    this.setState({
      gameBox: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    });

  setDraw = () => {
    this.setState({
      gameBox: [
        [-1, 1, 0],
        [1, -1, 1],
        [1, -1, 0],
      ],
    });
  };

  Icon = (r, c) => {
    //get value by posistion
    const {gameBox} = this.state;
    const value = gameBox[r][c];
    switch (value) {
      case 1:
        return <Text style={{fontSize: 30}}>X</Text>;
      case -1:
        return <Text style={{fontSize: 30}}>O</Text>;
      case 0:
      default:
        return null;
    }
  };

  onBoxClick = (r, c) => {
    const {gameBox, player} = this.state;
    const theBoxPosition = gameBox;
    const checkValue = theBoxPosition[r][c];
    if (checkValue !== 0) {
      return;
    }

    //set value by position
    theBoxPosition[r][c] = player === 1 ? 1 : -1;
    this.setState(
      {gameBox: theBoxPosition, player: player === 1 ? 2 : 1},
      () => {
        const w = this.checkWinner();
        // console.log({w});
        if (w === 'full') {
          Alert.alert('Draw', 'permainan Seri', [
            {text: 'Mulai Lagi', onPress: () => this.resetGames()},
          ]);
        } else if (w === 1) {
          Alert.alert('Pemain X menang', 'permainan dimenangakan pemain X', [
            {text: 'Mulai Lagi', onPress: () => this.resetGames()},
          ]);
        } else if (w === 0) {
          Alert.alert('Pemain O menang', 'permainan dimenangakan pemain O', [
            {text: 'Mulai Lagi', onPress: () => this.resetGames()},
          ]);
        }
      },
    );
  };

  shouldComponentUpdate(_nextProps, nextState) {
    const {player} = nextState;
    const {player: currentPlayer} = this.state;
    // if (player === 2 && currentPlayer === 1) {
    //   this.runAI();
    // }
    return nextState;
  }

  runAI = async () => {
    this.setState({aiLoading: true});
    await delay(3);
    this.setState({aiLoading: false});
  };

  checkWinner = () => {
    const {gameBox} = this.state;
    let total;

    //check row
    for (let i = 0; i < 3; i++) {
      //check r
      total = gameBox[i][0] + gameBox[i][1] + gameBox[i][2];
      // console.log({i: total === 3});
      if (total === 3) {
        return 1;
      } else if (total === -3) {
        return 0;
      }

      //check col
      for (let a = 0; a < 3; a++) {
        total = gameBox[0][a] + gameBox[1][a] + gameBox[2][a];
        // console.log({a: total, b: total === 3});
        if (total === 3) {
          return 1;
        } else if (total === -3) {
          return 0;
        }
      }

      //check diagonal 1
      total = gameBox[0][0] + gameBox[1][1] + gameBox[2][2];
      if (total === 3) {
        return 1;
      } else if (total === -3) {
        return 0;
      }

      //check diagonal 2
      total = gameBox[0][2] + gameBox[1][1] + gameBox[2][0];
      if (total === 3) {
        return 1;
      } else if (total === -3) {
        return 0;
      }
    }
    // console.log({gameBox});

    const full = gameBox.find(e => {
      return e.some(b => b === 0);
    });
    return full === undefined ? 'full' : '';
  };

  render() {
    const {aiLoading} = this.state;
    return (
      <View style={Styles.container}>
        <Text
          style={{
            flex: 1,
            fontSize: 25,
            textAlignVertical: 'center',
          }}>
          Main Yuk
        </Text>
        <View style={{flex: 7}}>
          <View style={Styles.boxContainer}>
            <TouchableOpacity
              onPress={() => this.onBoxClick(0, 0)}
              style={[Styles.box, {borderLeftWidth: 0, borderTopWidth: 0}]}>
              {this.Icon(0, 0)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onBoxClick(0, 1)}
              style={[Styles.box, {borderTopWidth: 0}]}>
              {this.Icon(0, 1)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onBoxClick(0, 2)}
              style={[Styles.box, {borderRightWidth: 0, borderTopWidth: 0}]}>
              {this.Icon(0, 2)}
            </TouchableOpacity>
          </View>
          <View style={Styles.boxContainer}>
            <TouchableOpacity
              onPress={() => this.onBoxClick(1, 0)}
              style={[Styles.box, {borderLeftWidth: 0}]}>
              {this.Icon(1, 0)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onBoxClick(1, 1)}
              style={[Styles.box]}>
              {this.Icon(1, 1)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onBoxClick(1, 2)}
              style={[Styles.box, {borderRightWidth: 0}]}>
              {this.Icon(1, 2)}
            </TouchableOpacity>
          </View>
          <View style={Styles.boxContainer}>
            <TouchableOpacity
              onPress={() => this.onBoxClick(2, 0)}
              style={[Styles.box, {borderLeftWidth: 0, borderBottomWidth: 0}]}>
              {this.Icon(2, 0)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onBoxClick(2, 1)}
              style={[Styles.box, {borderBottomWidth: 0}]}>
              {this.Icon(2, 1)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onBoxClick(2, 2)}
              style={[Styles.box, {borderBottomWidth: 0, borderRightWidth: 0}]}>
              {this.Icon(2, 2)}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              // alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {aiLoading && (
              <>
                <ActivityIndicator color="grey" />
                <Text>Ai Loading...</Text>
              </>
            )}
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => this.resetGames()}>
              <Text>Mulai Lagi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default App2;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
  },
  box: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
