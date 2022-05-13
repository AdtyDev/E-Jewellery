import React from "react"
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
            className="home__image"
            src="https://www.silvesto.com/wp-content/uploads/2022/03/banner-2.jpg" 
            alt=""
            />

            <div className="home__row">
                {/* Product 1*/}
                <Product 
                id="1234561"
                title='Bracelet for men' 
                price={700.00}
                image="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-gold-finish-men-s-chain-bracelet-140831-m.jpg"
                rating={5}/> 
                {/* Product 2*/}
                <Product 
                id="1234562"
                title='Pendant'
                price={450}
                image="https://ae01.alicdn.com/kf/H1ef6c54eab354368a667d3ead5afae64m.jpg"
                rating={5}/>
            </div>

            <div className="home__row">
                {/* Product 3*/}
                <Product 
                id="1234563"
                title='Necklace'
                price={1200}
                image="https://i5.walmartimages.com/asr/9d59b505-4377-487e-8809-b1a04598293e.c4cf33008143584fdf4ef0ae1b1c79ad.jpeg"
                rating={4}
                />

                {/* Product 4*/}
                <Product 
                id="1234564"
                title='Earrings'
                price={300}
                image="https://everstylish.com/pub/media/catalog/product/cache/689aad3dff30df62a7b33021fe130799/j/e/jew1101818-e.jpg"
                rating={5}/>

                {/* Product 5*/}
                <Product 
                id="1234565"
                title ='Rings for Females'
                price={200}
                image="https://i.pinimg.com/736x/38/5e/ff/385eff3ed8f4f45ea71bbf07724985a2.jpg"
                rating={5}/>
            </div>

            <div className="home__row">
                {/* Product 6*/}
                <Product 
                id="1234566"
                title='Rings for Males'
                price={150}
                image="https://cdn.thegentlemansjournal.com/wp-content/uploads/2021/06/best-rings-for-men-signet-2-624x728-c-center.jpg"
                rating={5}
                />
            </div>
        </div>
    </div>
  )
}

export default Home;