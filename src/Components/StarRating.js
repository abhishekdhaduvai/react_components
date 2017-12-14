import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { starEmpty } from 'react-icons-kit/icomoon/starEmpty';

class StarRating extends Component{

    state = {
        rated: false,
    }

    componentDidMount(){
        const { max } = this.props;
        for(let i=1; i<=max; i++){
            this.setState({["state"+i]: false});
        }
    }

    hoverIcon = (rating) => {
        for(let i=1; i<=rating; i++){
            this.setState({["star_"+i]: true});
        }
    }

    noHoverIcon = (rating) => {
        const { rated } = this.state;
        if(!rated){
            for(let i=1; i<=rating; i++){
                this.setState({["star_"+i]: false});
            }
        }
        else{
            for(let i=rated+1; i<=rating; i++){
                this.setState({["star_"+i]: false});
            }
        }
    }

    selectRating = (rating) =>{
        for(let i=1; i<=rating; i++){
            this.setState({["star_"+i]: true});
        }
        //Updating the component state with the selected rating.
        this.setState({rated: rating});
        console.log("Rating = ",rating);

        for(let i=rating+1; i<=this.props.max; i++){
            this.setState({["star_"+i]: false});
        }
    }

    render(){
        const { max } = this.props;
        var stars = [];
        for(var i=1; i<=max; i++){
            stars.push(
                <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 51 48"
                    id={"star_"+i}
                    key={i}
                    style={{}}
                    onMouseEnter={(e) => this.hoverIcon(Number(e.target.id.slice(-1)))}
                    onMouseLeave={(e) => {this.noHoverIcon(Number(e.target.id.slice(-1)))}}
                    onClick={(e) => {this.selectRating(Number(e.target.id.slice(-1)))}}>
                    {this.state["star_"+i] ? 
                        <path
                            id={"star_"+i}
                            fill="#febf00" 
                            stroke="#000" 
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/> 
                        : 
                        <path
                            fill="none" 
                            stroke="#000" 
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>}
                </svg>
            );
        }
        return(
            <div>
                {stars}
                <div>Rating selected: {this.state.rated}</div>
            </div>
        )
    }
}

export default StarRating;