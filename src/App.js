import React from 'react';
import Image from './Imgs/profile.jpg'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
                count:0,


      Person: {
        fullName: "Leila Ben Chaalia",
        bio: "Licencié en réseaux",
        imgSrc: Image,
        profession: "Technicienne informatique ",
      },
    };

    this.clickHandler = () => {
      this.setState({ show: !this.state.show });
    };
  }

  render() {
    if (this.state.show)
      return (
        <div className="container">
        <h1 id="count">{this.state.count}</h1>
          <button className="btn btn-primary" onClick={this.clickHandler}>
            Hide
          </button>
          <br />
          <img src={Image} alt="image peronel" width="500" height="400" />
          <h2>{this.state.Person.fullName}</h2>
          <h2>{this.state.Person.bio}</h2>
          <h2>{this.state.Person.profession}</h2>
          
        </div>
      );
    else
      return (
        <div className="container">
          <button className="btn btn-primary" onClick={this.clickHandler}>
            Show
          </button>
        </div>
      );
      }
  componentDidMount(){
    setInterval(()=>{
        this.setState({count : this.state.count +1})
    },1000)
  }
  componentWillUnmount(){
    console.log("component will unmount")
  }


}

export default App;