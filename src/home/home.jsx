import homecss from "./home.module.css";
import ayakkabi from "./f-p-1.jpg";
import canta from "./f-p-2.jpg";
import saat from "./f-p-3.jpg";
import indirimadam from "./sahil-moosa-m1MRYp556Ew-unsplash-removebg-preview.png";
import bigcardimg from "./new-product1.png";
import n1 from "./n1.jpg";
import n2 from "./n2.jpg";
import n3 from "./n3.jpg";
import n4 from "./n4.jpg";
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i4 from "./i4.jpg";
import i5 from "./i5.jpg";
import i6 from "./i6.jpg";
import i7 from "./i7.jpg";
import i8 from "./i8.jpg";
import b1 from "./b1.jpg";
import b2 from "./b2.jpg";
import b3 from "./b3.jpg";
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
      <div className={homecss.Inspired}>
        <h2 className={homecss.InspiredTitle}>Inspired products</h2>
        <p className={homecss.InspiredText}>
          Bring called seed first of third give itself now ment
        </p>
        <div className={homecss.InspiredCardRow1}>
          <div className={homecss.inscard4}>
            <img className={homecss.ayakkabiphoto} src={i1} alt="" />
            <p className={homecss.inscard4title}>adidas sport shoes</p>
            <p className={homecss.inscard4fiyat}>$25.00</p>
            <p className={homecss.inscard4indirimi}>$35.00</p>
          </div>
          <div className={homecss.inscard4}>
            <img className={homecss.ayakkabiphoto} src={i2} alt="" />
            <p className={homecss.inscard4title}>adidas sport shoes</p>
            <p className={homecss.inscard4fiyat}>$25.00</p>
            <p className={homecss.inscard4indirimi}>$35.00</p>
          </div>
          <div className={homecss.inscard4}>
            <img className={homecss.ayakkabiphoto} src={i3} alt="" />
            <p className={homecss.inscard4title}>adidas sport shoes</p>
            <p className={homecss.inscard4fiyat}>$25.00</p>
            <p className={homecss.inscard4indirimi}>$35.00</p>
          </div>
          <div className={homecss.inscard4}>
            <img className={homecss.ayakkabiphoto} src={i4} alt="" />
            <p className={homecss.inscard4title}>adidas sport shoes</p>
            <p className={homecss.inscard4fiyat}>$25.00</p>
            <p className={homecss.inscard4indirimi}>$35.00</p>
          </div>
        </div>
        <div className={homecss.InspiredCardRow2}>
          <div className={homecss.inscard4}>
            <img className={homecss.ayakkabiphoto} src={i5} alt="" />
            <p className={homecss.inscard4title}>adidas sport shoes</p>
            <p className={homecss.inscard4fiyat}>$25.00</p>
            <p className={homecss.inscard4indirimi}>$35.00</p>
          </div>
          <div className={homecss.inscard4}>
            <img className={homecss.ayakkabiphoto} src={i6} alt="" />
            <p className={homecss.inscard4title}>adidas sport shoes</p>
            <p className={homecss.inscard4fiyat}>$25.00</p>
            <p className={homecss.inscard4indirimi}>$35.00</p>
          </div>
          <div className={homecss.inscard4}>
            <img className={homecss.ayakkabiphoto} src={i7} alt="" />
            <p className={homecss.inscard4title}>adidas sport shoes</p>
            <p className={homecss.inscard4fiyat}>$25.00</p>
            <p className={homecss.inscard4indirimi}>$35.00</p>
          </div>
          <div className={homecss.inscard4}>
            <img className={homecss.ayakkabiphoto} src={i8} alt="" />
            <p className={homecss.inscard4title}>adidas sport shoes</p>
            <p className={homecss.inscard4fiyat}>$25.00</p>
            <p className={homecss.inscard4indirimi}>$35.00</p>
          </div>
        </div>
      </div>
      <div className={homecss.blog}>
        <h2 className={homecss.BlogTitle}>latest blog</h2>
        <p className={homecss.BlogText}>
          Bring called seed first of third give itself now ment
        </p>
        <div className={homecss.blogcards}>
          <div className={homecss.blogCard1}>
            <img src={b1} alt="" />
            <p className={homecss.byadmintext}>by admin</p>
            <i className={`fa-regular fa-comment ${homecss.blogCard1icon}`}></i>
            <span className={homecss.blogCard1commentnumber}>2 comments</span>
            <h4 className={homecss.blogCard1Title}>
              Ford clever bed stops your sleeping partner hogging the whole
            </h4>
            <p className={homecss.blogcard1parg}>
              Let one fifth i bring fly to divided face for bearing the divide
              unto seed winged divided light Forth.
            </p>
            <h6 className={homecss.learnmore}>learn more</h6>
            <i class={`fa-solid fa-arrow-right  ${homecss.arrow}`}></i>
          </div>
          <div className={homecss.blogCard1}>
            <img src={b2} alt="" />
            <p className={homecss.byadmintext}>by admin</p>
            <i className={`fa-regular fa-comment ${homecss.blogCard1icon}`}></i>
            <span className={homecss.blogCard1commentnumber}>2 comments</span>
            <h4 className={homecss.blogCard1Title}>
              Ford clever bed stops your sleeping partner hogging the whole
            </h4>
            <p className={homecss.blogcard1parg}>
              Let one fifth i bring fly to divided face for bearing the divide
              unto seed winged divided light Forth.
            </p>
            <h6 className={homecss.learnmore}>learn more</h6>
            <i class={`fa-solid fa-arrow-right  ${homecss.arrow}`}></i>
          </div>
          <div className={homecss.blogCard1}>
            <img src={b3} alt="" />
            <p className={homecss.byadmintext}>by admin</p>
            <i className={`fa-regular fa-comment ${homecss.blogCard1icon}`}></i>
            <span className={homecss.blogCard1commentnumber}>2 comments</span>
            <h4 className={homecss.blogCard1Title}>
              Ford clever bed stops your sleeping partner hogging the whole
            </h4>
            <p className={homecss.blogcard1parg}>
              Let one fifth i bring fly to divided face for bearing the divide
              unto seed winged divided light Forth.
            </p>
            <h6 className={homecss.learnmore}>learn more</h6>
            <i class={`fa-solid fa-arrow-right  ${homecss.arrow}`}></i>
          </div>
        </div>
      </div>
      <div className={homecss.footer}>
        <h3 className={homecss.footerul1Title}>Top Products</h3>
        <ul className={homecss.footerul1}>
          <li className={homecss.footerul1li}>Managed Website</li>
          <li className={homecss.footerul1li}>Manage Reputation</li>
          <li className={homecss.footerul1li}>Power Tools</li>
          <li className={homecss.footerul1li}>Marketing Service</li>
        </ul>
        <h3 className={homecss.footerul2Title}>Quick Links</h3>
        <ul className={homecss.footerul2}>
          <li className={homecss.footerul1li}>jobs</li>
          <li className={homecss.footerul1li}>Brand Assets</li>
          <li className={homecss.footerul1li}>Investor Relations</li>
          <li className={homecss.footerul1li}>Terms of Service</li>
        </ul>
        <h3 className={homecss.footerul3Title}>Features</h3>
        <ul className={homecss.footerul3}>
          <li className={homecss.footerul1li}>jobs</li>
          <li className={homecss.footerul1li}>Brand Assets</li>
          <li className={homecss.footerul1li}>Investor Relations</li>
          <li className={homecss.footerul1li}>Terms of Service</li>
        </ul>
        <h3 className={homecss.footerul4Title}>Resources</h3>
        <ul className={homecss.footerul4}>
          <li className={homecss.footerul1li}>Guides</li>
          <li className={homecss.footerul1li}>Research</li>
          <li className={homecss.footerul1li}>Experts</li>
          <li className={homecss.footerul1li}>Agencies</li>
        </ul>
        <h3 className={homecss.newsletter}>Newsletter</h3>
        <p className={homecss.newsletterText}>
          You can trust us. we only send promo offers,
        </p>
        <input
          className={homecss.newsletterInp}
          placeholder="your email address"
          type="email"
          name=""
          id=""
        />
        <button className={homecss.subbtn}>subscribe</button>
        <p className={homecss.copyrightmessage}>
          Copyright ©2025 All rights reserved | This template is made with
        </p>
        <i class={`fa-regular fa-heart ${homecss.copyrighticon}`}></i>
        <p className={homecss.by}>
          by <span className={homecss.bycolor}>Colorlib</span>
        </p>

        <div className={homecss.footericon1}>
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className={homecss.footericon2}>
          <i className={`fa-brands fa-twitter`}></i>
        </div>
        <div className={homecss.footericon3}>
          <i class="fa-brands fa-dribbble"></i>{" "}
        </div>
        <div className={homecss.footericon4}>
          <i class="fa-brands fa-behance"></i>{" "}
        </div>
      </div>
    </>
  );
}

export default Home;
