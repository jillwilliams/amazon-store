import React from 'react';
import './Home.css';
import Hero from './images/hero.png';
import Product from './Product';
import Mulan from './images/mulan.png';
import Coppertone from './images/coppertone-gloves.png';
import Denver from './images/denver-mask.png';
import Headphones from './images/headphones.png';
import Gamers from './images/switch.png';
import Polaroid from './images/polaroid.png';
import Flip from './images/zflip.png';
import Windows from './images/windows.png';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src={Hero} alt="hero" className="home_image" />
                <div className="home_row">
                    <Product id="132684" title="Mulan DVD/Blue-Ray" price={25.99} rating={5} image={Mulan} />
                    <Product id="297746" title="Coppertone Compression Gloves" price={19.99} rating={4} image={Coppertone} />
                </div>
                <div className="home_row">
                    <Product id="779896" title="Denver Broncos Face Mask" price={39.99} rating={5} image={Denver} />
                    <Product id="856226" title="Samsung Galaxy Z Flip 5G - Mystic Bronze, 256GB" price={899.99} rating={5} image={Flip} />
                    <Product id="345862" title="Gaming Headphones for PS, PC" price={25.99} rating={3} image={Headphones} />
                </div>
                <div className="home_row">
                    <Product id="967243" title="Polaroid Camera" price={79.99} rating={4} image={Polaroid} />
                    <Product id="973456" title="Windows Laptop" price={469.99} rating={3} image={Windows} />
                </div>
                <div className="home_row">
                    <Product id="556948" title="Nintendo Switch Lite External Controller" price={69.99} rating={2} image={Gamers} />
                </div>
            </div>
        </div>
    );
}

export default Home;
