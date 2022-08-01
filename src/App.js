import './App.css'
import Header from '../src/Components/Header/Header'
import Newsfeed from './Components/Newsfeed/Newsfeed'
import Stats from './Components/Stats/Stats'

function App() {
    return (
        <div className="App">
            <div className="app_header">{/* <Header></Header> */}</div>
            <Header></Header>
            <div className="app_body">
                <div className="app_container">
                    <Newsfeed></Newsfeed>
                    <Stats></Stats>
                </div>
            </div>
        </div>
    )
}

export default App
