import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component{
    constructor(){
        super()
        this.state={
            Robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json()
        .then(user=> this.setState({Robots: user})));
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const {Robots,searchfield} = this.state;
        const filteredRobots=Robots.filter(Robot =>{
            return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !Robots.length?
             <h1>Loading...</h1>:
             (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox  searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                             <CardList Robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
             );
        }
    }
export default App;