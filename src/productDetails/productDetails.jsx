import ProductDetailscss from "./productDetails.module.css";
import bigpage from "./s-product-1.jpg";
import smallpage1 from "./s-product-s-2.jpg";
import smallpage2 from "./s-product-s-3.jpg";
import smallpage3 from "./s-product-s-4.jpg";
import birincikisi from "./review-1.png";
import ikincikisi from "./review-2.png";
import ucuncukisi from "./review-3.png";

function ProductDetails() {
  return (
    <>
      <div className={ProductDetailscss.tanitim}>
        <h3 className={ProductDetailscss.tanitimtitle}>product Details</h3>
        <p className={ProductDetailscss.paragraf}>
          Very us move be blessed multiply night
        </p>
        <span className={ProductDetailscss.tanitimbolum}>
          Home / product details
        </span>
      </div>
      <div className={ProductDetailscss.serit}>
        <select name="" id="" className={ProductDetailscss.seritoptin}>
          <option value="Default sorting">Default sorting</option>
          <option value="Default sorting">Default sorting1</option>
          <option value="Default sorting">Default sorting2</option>
        </select>
        <select name="" id="" className={ProductDetailscss.seritoptin2}>
          <option value="show12">show 12</option>
          <option value="show14">show 14</option>
          <option value="show16">show 16</option>
        </select>
      </div>
      <img className={ProductDetailscss.bigimg} src={bigpage} alt="" />
      <div className={ProductDetailscss.smallimages}>
        <img src={smallpage1} alt="" />
        <img src={smallpage2} alt="" />
        <img src={smallpage3} alt="" />
      </div>
      <div className={ProductDetailscss.bilgiler}>
        <h3 className={ProductDetailscss.bilgilerTitle}>
          Faded SkyBlu Denim Jeans
        </h3>
        <h3 className={ProductDetailscss.bilgilerPrice}>$149.99</h3>
        <span className={ProductDetailscss.bilgilerCategory}>category</span>
        <span className={ProductDetailscss.bilgilerTheCategory}>
          : household
        </span>
        <span className={ProductDetailscss.bilgilerAvailibility}>
          Availibility
        </span>
        <span className={ProductDetailscss.bilgilerTheAvailibility}>
          : in stock
        </span>
        <hr className={ProductDetailscss.bilgilerCizgi} />
        <p className={ProductDetailscss.bilgilerText}>
          Mill Oil is an innovative oil filled radiator with the most modern
          technology. If you are looking for something that can make your
          interior look awesome, and at the same time give you the pleasant warm
          feeling during the winter.
        </p>
        <label className={ProductDetailscss.Quantity} htmlFor="">
          Quantity:
        </label>
        <input
          className={ProductDetailscss.QuantityInp}
          type="number"
          min={0}
          max={12}
          name=""
          id=""
        />
        <button className={ProductDetailscss.bilgilerBtn}>add to cart</button>
        <button className={ProductDetailscss.bilgilerICon1div}>
          <i class={`fa-regular fa-gem ${ProductDetailscss.bilgilerIcon1}`}></i>
        </button>
        <button className={ProductDetailscss.bilgilerICon2div}>
          <i
            class={`fa-regular fa-heart ${ProductDetailscss.bilgilerIcon2}`}
          ></i>
        </button>
      </div>
      <div className={ProductDetailscss.yorumSerit}>
        <div className={ProductDetailscss.yorumSeritBolumleri}>
          <button className={ProductDetailscss.yorumSeritBtn}>
            description
          </button>
          <button className={ProductDetailscss.yorumSeritBtn}>
            specification
          </button>
          <button className={ProductDetailscss.yorumSeritBtn}>comments</button>
          <button className={ProductDetailscss.yorumSeritBtnSecili}>
            reviews
          </button>
        </div>
      </div>
      <div className={ProductDetailscss.yorumBolumu}>
        <div className={ProductDetailscss.overall}>
          <h4 className={ProductDetailscss.overalltitle}>overall</h4>
          <h1 className={ProductDetailscss.Evaluate}>4.0</h1>
          <p className={ProductDetailscss.reviewsnumber}>(03 reviews)</p>
        </div>
        <h3 className={ProductDetailscss.reviewsTitle}>based on 3 reviews</h3>
        <div className={ProductDetailscss.fivestar}>
          <p className={ProductDetailscss.fivestartitle}>5 star</p>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <p className={ProductDetailscss.fivestartext}>01</p>
        </div>
        <div className={ProductDetailscss.fivestar}>
          <p className={ProductDetailscss.fivestartitle}>4 star</p>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <p className={ProductDetailscss.fivestartext}>01</p>
        </div>
        <div className={ProductDetailscss.fivestar}>
          <p className={ProductDetailscss.fivestartitle}>3 star</p>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <p className={ProductDetailscss.fivestartext}>01</p>
        </div>
        <div className={ProductDetailscss.fivestar}>
          <p className={ProductDetailscss.fivestartitle}>2 star</p>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <p className={ProductDetailscss.fivestartext}>01</p>
        </div>
        <div className={ProductDetailscss.fivestar}>
          <p className={ProductDetailscss.fivestartitle}>1 star</p>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <i class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}></i>
          <p className={ProductDetailscss.fivestartext}>01</p>
        </div>
        <div className={ProductDetailscss.addreview}>
          <h3 className={ProductDetailscss.addreviewTitle}>Add a Review</h3>
          <div className={ProductDetailscss.yourRaiting}>
            <p className={ProductDetailscss.fivestartitle}>your raiting</p>
            <i
              class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}
            ></i>
            <i
              class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}
            ></i>
            <i
              class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}
            ></i>
            <i
              class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}
            ></i>
            <i
              class={`fa-solid fa-star ${ProductDetailscss.fivestarstars}`}
            ></i>
            <p className={ProductDetailscss.fivestartext}> Outstanding</p>
          </div>
          <input
            type="text"
            className={ProductDetailscss.firstInp}
            placeholder="your full name"
            name=""
            id=""
          />
          <input
            type="text"
            className={ProductDetailscss.firstInp}
            placeholder="email address"
            name=""
            id=""
          />
          <input
            type="text"
            className={ProductDetailscss.firstInp}
            placeholder="phone number"
            name=""
            id=""
          />
          <textarea
            name=""
            placeholder="Review"
            className={ProductDetailscss.firsttextarea}
            id=""
          ></textarea>
          <button className={ProductDetailscss.addreviewBtn}>submit now</button>
        </div>
        <div className={ProductDetailscss.ilkkisi}>
          <img src={birincikisi} alt="" />
          <h5 className={ProductDetailscss.birincikisiIsim}>Blake Ruiz</h5>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <p className={ProductDetailscss.birincikisiYorum}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
        </div>
        <div className={ProductDetailscss.ilkkisi}>
          <img src={ikincikisi} alt="" />
          <h5 className={ProductDetailscss.birincikisiIsim}>Blake Ruiz</h5>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <p className={ProductDetailscss.birincikisiYorum}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
        </div>
        <div className={ProductDetailscss.ilkkisi}>
          <img src={ucuncukisi} alt="" />
          <h5 className={ProductDetailscss.birincikisiIsim}>Blake Ruiz</h5>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <i
            class={`fa-solid fa-star ${ProductDetailscss.Birincikisistars}`}
          ></i>
          <p className={ProductDetailscss.birincikisiYorum}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
        </div>
      </div>
      <div className={ProductDetailscss.footer}>
        <h3 className={ProductDetailscss.footerul1Title}>Top Products</h3>
        <ul className={ProductDetailscss.footerul1}>
          <li className={ProductDetailscss.footerul1li}>Managed Website</li>
          <li className={ProductDetailscss.footerul1li}>Manage Reputation</li>
          <li className={ProductDetailscss.footerul1li}>Power Tools</li>
          <li className={ProductDetailscss.footerul1li}>Marketing Service</li>
        </ul>
        <h3 className={ProductDetailscss.footerul2Title}>Quick Links</h3>
        <ul className={ProductDetailscss.footerul2}>
          <li className={ProductDetailscss.footerul1li}>jobs</li>
          <li className={ProductDetailscss.footerul1li}>Brand Assets</li>
          <li className={ProductDetailscss.footerul1li}>Investor Relations</li>
          <li className={ProductDetailscss.footerul1li}>Terms of Service</li>
        </ul>
        <h3 className={ProductDetailscss.footerul3Title}>Features</h3>
        <ul className={ProductDetailscss.footerul3}>
          <li className={ProductDetailscss.footerul1li}>jobs</li>
          <li className={ProductDetailscss.footerul1li}>Brand Assets</li>
          <li className={ProductDetailscss.footerul1li}>Investor Relations</li>
          <li className={ProductDetailscss.footerul1li}>Terms of Service</li>
        </ul>
        <h3 className={ProductDetailscss.footerul4Title}>Resources</h3>
        <ul className={ProductDetailscss.footerul4}>
          <li className={ProductDetailscss.footerul1li}>Guides</li>
          <li className={ProductDetailscss.footerul1li}>Research</li>
          <li className={ProductDetailscss.footerul1li}>Experts</li>
          <li className={ProductDetailscss.footerul1li}>Agencies</li>
        </ul>
        <h3 className={ProductDetailscss.newsletter}>Newsletter</h3>
        <p className={ProductDetailscss.newsletterText}>
          You can trust us. we only send promo offers,
        </p>
        <input
          className={ProductDetailscss.newsletterInp}
          placeholder="your email address"
          type="email"
          name=""
          id=""
        />
        <button className={ProductDetailscss.subbtn}>subscribe</button>
        <p className={ProductDetailscss.copyrightmessage}>
          Copyright ©2025 All rights reserved | This template is made with
        </p>
        <i class={`fa-regular fa-heart ${ProductDetailscss.copyrighticon}`}></i>
        <p className={ProductDetailscss.by}>
          by <span className={ProductDetailscss.bycolor}>Colorlib</span>
        </p>

        <div className={ProductDetailscss.footericon1}>
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className={ProductDetailscss.footericon2}>
          <i className={`fa-brands fa-twitter`}></i>
        </div>
        <div className={ProductDetailscss.footericon3}>
          <i class="fa-brands fa-dribbble"></i>{" "}
        </div>
        <div className={ProductDetailscss.footericon4}>
          <i class="fa-brands fa-behance"></i>{" "}
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
