import React, {Component} from 'react';
import {RoomContext} from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

class FeaturedRooms extends Component {
    static contextType = RoomContext
    state = { 
        
     }
    render() { 
        let {loading, featuredRooms: rooms} = this.context
        rooms = rooms.map((room => {
            return(
                <Room room={room} key={room.id} />
            )
        }));
        
       
        return ( 
            <section className="feature-rooms">
               <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> :rooms  }
                </div>      
            </section>
         );
    }
}
 
export default FeaturedRooms; 