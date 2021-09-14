import React, {Component} from "react";
// StackNavigator用于实现各个页面间的跳转。TabNavigator切换组件，实现同一页面上不同界面的切换。
import Box from "./pages/index/index";
import "./test"
 class App extends Component {
    render() {
        return (
          <div>
              <Box />
          </div> 
        );
    }
}

export default App






