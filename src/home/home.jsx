import homecss from "./home.module.css";
import ayakkabi from "./f-p-1.jpg";
import canta from "./f-p-2.jpg";
import saat from "./f-p-3.jpg";
import indirimadam from "./sahil-moosa-m1MRYp556Ew-unsplash-removebg-preview.png";
import bigcardimg from "./new-product1.png";
import n1 from "./n1.jpg";
import n2 from "./n2.jpg";
import n3 from "./n3.jpg";
import n4 from "./n4.jpg"
function Home() {
  return (
    <>
      <div className={homecss.firstpartinhomepage}>
        <h4 className={homecss.firstpartfirsttext}>men collection</h4>
        <h2 className={homecss.titlefirtspage}>
          <span className={homecss.show}>show</span>your personal{" "}
          <span className={homecss.style}>style</span>
        </h2>
        <p className={homecss.firstpagetext}>
          Fowl saw dry which a above together place.
        </p>
        <button className={homecss.firstpagebutton}>view collection</button>
      </div>
      <div className={homecss.cardlar}>
        <div className={homecss.cardContainer}>
          <div className={homecss.card}>
            <i className={`fa-solid fa-dollar-sign ${homecss.carddd}`}></i>{" "}
            <h3 className={homecss.cardTitle}>
              <a className={homecss.cardTitleLink} href="#">
                Money back gurantee
              </a>
            </h3>
            <p className={homecss.cardText}>Shall open divide a one</p>
          </div>
          <div className={homecss.card}>
            <i class={`fa-solid fa-truck-fast ${homecss.carddd}`}></i>
            <h3 className={homecss.cardTitle2}>
              <a className={homecss.cardTitleLink} href="#">
                free delivery
              </a>
            </h3>
            <p className={homecss.cardText}>Shall open divide a one</p>
          </div>
          <div className={homecss.card}>
            <i class={`fa-solid fa-headset ${homecss.carddd}`}></i>{" "}
            <h3 className={homecss.cardTitle3}>
              <a className={homecss.cardTitleLink} href="#">
                alway support
              </a>
            </h3>
            <p className={homecss.cardText}>Shall open divide a one</p>
          </div>
          <div className={homecss.card}>
            <i class={`fa-solid fa-shield-halved ${homecss.carddd}`}></i>{" "}
            <h3 className={homecss.cardTitle4}>
              <a className={homecss.cardTitleLink} href="#">
                secure payment
              </a>
            </h3>
            <p className={homecss.cardText}>Shall open divide a one</p>
          </div>
        </div>
      </div>
      <div className={homecss.featuredProduct}>
        <h2 className={homecss.featuredProductTitle}>Featured product</h2>
        <p className={homecss.featuredProductText}>
          Bring called seed first of third give itself now ment
        </p>

        <div className={homecss.featuredProductCards}>
          <div className={homecss.featuredProductCard1}>
            <img className={homecss.ayakkabiphoto} src={ayakkabi} alt="" />
            <p className={homecss.featuredProductCard1Title}>
              Latest men’s sneaker
            </p>
            <p className={homecss.featuredProductCard1Fiyat}>$25.00</p>
            <p className={homecss.featuredProductCard1IndirimliFiyat}>$35.00</p>
          </div>
          <div className={homecss.featuredProductCard1}>
            <img className={homecss.ayakkabiphoto} src={canta} alt="" />
            <p className={homecss.featuredProductCard1Title}>
              red woman purses
            </p>
            <p className={homecss.featuredProductCard1Fiyat}>$25.00</p>
            <p className={homecss.featuredProductCard1IndirimliFiyat}>$35.00</p>
          </div>
          <div className={homecss.featuredProductCard1}>
            <img className={homecss.ayakkabiphoto} src={saat} alt="" />
            <p className={homecss.featuredProductCard1Title}>
              Men stylist Smart Watch
            </p>
            <p className={homecss.featuredProductCard1Fiyat}>$25.00</p>
            <p className={homecss.featuredProductCard1IndirimliFiyat}>$35.00</p>
          </div>
        </div>
      </div>
      <div className={homecss.indirim}>
        <img className={homecss.indirimadam} src={indirimadam} alt="" />
        <p className={homecss.indirimText}>all men’s collection</p>
        <h1 className={homecss.indirimTitle}>50% off</h1>
        <button className={homecss.indirimBtn}>discover now</button>
        <p className={homecss.indirimtime}>Limited Time Offer</p>
      </div>
      <div className={homecss.new}>
        <h2 className={homecss.featuredProductTitle}>new products</h2>
        <p className={homecss.featuredProductText}>
          Bring called seed first of third give itself now ment
        </p>
        <div className={homecss.newBigCard}>
          <p className={homecss.newBigCardText}>collection of 2019</p>
          <h2 className={homecss.newBigCardTitle}>Men’s summer t-shirt</h2>
          <img className={homecss.bigcardimg} src={bigcardimg} alt="" />
          <p className={homecss.newBigCardPrice}>$120.70</p>
          <button className={homecss.newBigCardBtn}>add to cart</button>
        </div>
        <div className={homecss.newcard1}>
          <img className={homecss.ayakkabiphoto} src={n1} alt="" />
          <p className={homecss.newcard1title}>nike latest sneaker</p>
          <p className={homecss.newcard1fiyat}>$25.00</p>
          <p className={homecss.newcard1indirimi}>$35.00</p>
        </div>
        <div className={homecss.newcard2}>
          <img className={homecss.ayakkabiphoto} src={n2} alt="" />
          <p className={homecss.newcard2title}>quartz hang watch</p>
          <p className={homecss.newcard2fiyat}>$25.00</p>
          <p className={homecss.newcard2indirimi}>$35.00</p>
        </div>
        <div className={homecss.newcard3}>
          <img className={homecss.ayakkabiphoto} src={n3} alt="" />
          <p className={homecss.newcard3title}>Men’s denim jeans</p>
          <p className={homecss.newcard3fiyat}>$25.00</p>
          <p className={homecss.newcard3indirimi}>$35.00</p>
        </div>
        <div className={homecss.newcard4}>
          <img className={homecss.ayakkabiphoto} src={n4} alt="" />
          <p className={homecss.newcard4title}>adidas sport shoes</p>
          <p className={homecss.newcard4fiyat}>$25.00</p>
          <p className={homecss.newcard4indirimi}>$35.00</p>
        </div>
      </div>
    </>
  );
}

export default Home;
