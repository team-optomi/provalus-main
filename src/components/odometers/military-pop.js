import React, { Component} from "react"
import styled from 'styled-components'
import Odometer from 'react-odometerjs'

class MilitaryPop extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            odometerValue: 0
        };
    }

    componentDidMount() {
        this.setState({ odometerValue: 600 });
    }

    render() {
        const { odometerValue } = this.state;
        return (
            <OdometerBlock>
                <Odometer
                    format="d"
                    duration={ 500 }
                    value={ odometerValue }
                />
            </OdometerBlock>
        );
    }

}

const OdometerBlock = styled.div`
    .odometer-digit {
        color: #fff;
    }
`

export default MilitaryPop