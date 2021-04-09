import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import {Link} from 'react-router-dom'
import FeaturedRooms from '../components/FeaturedRooms'


const Home = () => {
    console.log(process.env.CONTENTFUL_SPACE)
    return (
        <div>
            <Hero> 
                <Banner title="luxurios rooms" subtitle="delux rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </div>
    )
}

export default Home;  