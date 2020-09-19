import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__conatiner">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Amazon_cover" />

                <div className="home__row">
                    {/*Product X 2*/}
                    <Product
                        id="12564343343"
                        title="The Lean Startup"
                        price={29.99}
                        image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
                        rating={5}
                    />
                    <Product />
                </div>

                <div className="home__row">
                    {/*Product X 3*/}
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    {/*Product*/}
                    <Product />
                </div>

            </div>
        </div>
    )
};

export default Home;