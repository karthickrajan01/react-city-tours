import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';


class TourList extends Component {
    state = {
        tours: tourData
    };

    removeTour = id => {
        const { tours } = this.state;
        const newData = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: newData
        })
    };

    render() {
        const { tours } = this.state;

        return (
            <section className="tour-list">
                {tours.map(tour => {
                    return <Tour key={tour.id}
                        tour={tour}
                        removeTours ={this.removeTour}/>
                })}
            </section>
        );
    }
}

export default TourList;