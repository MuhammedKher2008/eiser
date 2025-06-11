import ProductChekoutCss from "./productChekout.module.css";
import cards from "./card.jpg";

function ProductChekout() {
  return (
    <>
      <div className={ProductChekoutCss.tanitim}>
        <h3 className={ProductChekoutCss.tanitimtitle}>Product Checkout</h3>
        <p className={ProductChekoutCss.paragraf}>
          Very us move be blessed multiply night
        </p>
        <span className={ProductChekoutCss.tanitimbolum}>
          Home / Product Checkout
        </span>
      </div>
      <div className={ProductChekoutCss.loginPart}>
        <div className={ProductChekoutCss.LoginSerit}>
          <h3 className={ProductChekoutCss.loginSeritTitle}>
            Returning Customer?
          </h3>
          <a className={ProductChekoutCss.loginSeritLink} href="#">
            {" "}
            Click here to login
          </a>
        </div>
        <p className={ProductChekoutCss.LoginText}>
          If you have shopped with us before, please enter your details in the
          boxes below. If you are a new customer, please proceed to the Billing
          & Shipping section.
        </p>
        <input
          className={ProductChekoutCss.loginNameInp}
          type="text"
          name=""
          id=""
          placeholder="username or email"
        />
        <input
          className={ProductChekoutCss.loginNameInp}
          type="text"
          name=""
          id=""
          placeholder="password"
        />
        <button className={ProductChekoutCss.loginBtn}>send message</button>
        <input
          className={ProductChekoutCss.loginCheck}
          type="checkbox"
          name=""
          id=""
        />
        <label className={ProductChekoutCss.LoginCheckLabel} htmlFor="">
          {" "}
          Remember me
        </label>
        <p className={ProductChekoutCss.LoginForgetPassword}>
          Lost your passsword
        </p>
      </div>
      <div className={ProductChekoutCss.loginPart}>
        <div className={ProductChekoutCss.LoginSerit}>
          <h3 className={ProductChekoutCss.loginSeritTitle}>Have a coupon?</h3>
          <a className={ProductChekoutCss.loginSeritLink} href="#">
            {" "}
            Click here to enter your code
          </a>
        </div>

        <input
          className={ProductChekoutCss.CuponInp}
          type="text"
          name=""
          id=""
          placeholder="enter coupon code"
        />

        <button className={ProductChekoutCss.cuponBtn}>apply coupon </button>
      </div>
      <div className={ProductChekoutCss.billing}>
        <h3 className={ProductChekoutCss.billingTitle}>Billing Details</h3>
        <hr />
        <input
          placeholder="first name "
          className={ProductChekoutCss.nameInp}
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="last name"
          className={ProductChekoutCss.nameInp}
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="company name"
          className={ProductChekoutCss.companyinp}
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="first name "
          className={ProductChekoutCss.hakkindaInp}
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="last name"
          className={ProductChekoutCss.hakkindaInp}
          type="text"
          name=""
          id=""
        />
        <select className={ProductChekoutCss.country} name="" id="">
          <option value="country">country</option>
          <option value="country">country</option>
          <option value="country">country</option>
        </select>
        <input
          placeholder="address line 01"
          className={ProductChekoutCss.address1inp}
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="address line 02"
          className={ProductChekoutCss.address2inp}
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="town/city"
          className={ProductChekoutCss.cityinp}
          type="text"
          name=""
          id=""
        />
        <select className={ProductChekoutCss.district} name="" id="">
          <option value="district">district</option>
          <option value="district">district</option>
          <option value="district">district</option>
        </select>
        <input
          placeholder="postcode/zip"
          className={ProductChekoutCss.postcodeinp}
          type="text"
          name=""
          id=""
        />
        <input
          className={ProductChekoutCss.check}
          type="checkbox"
          name=""
          id=""
        />
        <label className={ProductChekoutCss.checkLabel} htmlFor="">
          {" "}
          Create an account?
        </label>
      </div>
      <div className={ProductChekoutCss.shipping}>
        <h3 className={ProductChekoutCss.shippingTitle}>Billing Details</h3>
        <hr />
        <input
          className={ProductChekoutCss.check2}
          type="checkbox"
          name=""
          id=""
        />
        <label className={ProductChekoutCss.check2Label} htmlFor="">
          {" "}
          Ship to a different address?
        </label>
        <textarea
          placeholder="order notes"
          className={ProductChekoutCss.ordernotes}
          name=""
          id=""
        ></textarea>
      </div>
      <div className={ProductChekoutCss.siparis}>
        <h3 className={ProductChekoutCss.yourordertitle}>your order</h3>
        <p className={ProductChekoutCss.text1}>Product</p>
        <p className={ProductChekoutCss.total1}>total</p>
        <div className={ProductChekoutCss.firstline}></div>

        <p className={ProductChekoutCss.text2}>fresh bluebery</p>
        <p className={ProductChekoutCss.tane2}>x02</p>
        <p className={ProductChekoutCss.total2}>$720</p>
        <div className={ProductChekoutCss.firstline}></div>

        <p className={ProductChekoutCss.text2}>fresh tomato</p>
        <p className={ProductChekoutCss.tane2}>x02</p>
        <p className={ProductChekoutCss.total2}>$720</p>
        <div className={ProductChekoutCss.firstline}></div>

        <p className={ProductChekoutCss.text2}>fresh brokoli</p>
        <p className={ProductChekoutCss.tane2}>x02</p>
        <p className={ProductChekoutCss.total2}>$720</p>
        <div className={ProductChekoutCss.firstline}></div>

        <p className={ProductChekoutCss.subtotal2}>subtotal</p>
        <p className={ProductChekoutCss.total2}>$2160</p>
        <div className={ProductChekoutCss.firstline}></div>

        <p className={ProductChekoutCss.subtotal2}>shipping</p>
        <p className={ProductChekoutCss.total3}>flat rate :$50</p>
        <div className={ProductChekoutCss.firstline}></div>

        <p className={ProductChekoutCss.subtotal2}>subtotal</p>
        <p className={ProductChekoutCss.total2}>$2210</p>
        <div className={ProductChekoutCss.firstline}></div>

        <input
          className={ProductChekoutCss.firstradio}
          type="radio"
          name="n"
          id=""
        />
        <label className={ProductChekoutCss.firstradiolabel} htmlFor="">
          Check payments
        </label>
        <div className={ProductChekoutCss.firstradioaciklama}>
          Please send a check to Store Name, Store Street, Store Town, Store
          State / County, Store Postcode
        </div>

        <input
          className={ProductChekoutCss.firstradio2}
          type="radio"
          name="n"
          id=""
        />
        <label className={ProductChekoutCss.firstradiolabel2} htmlFor="">
          Check payments
        </label>
        <img className={ProductChekoutCss.cards} src={cards} alt="" />
        <div className={ProductChekoutCss.firstradioaciklama2}>
          Please send a check to Store Name, Store Street, Store Town, Store
          State / County, Store Postcode
        </div>
        <input
          className={ProductChekoutCss.lastcheck}
          type="checkbox"
          name=""
          id=""
        />
        <p className={ProductChekoutCss.sozlesme}>I’ve reabtnd and accept the  <span className={ProductChekoutCss.sozlesmespan}> terms & conditions*</span></p>
        <button className={ProductChekoutCss.lastBtn}>proceed to paypal</button>
      </div>
      <div className={ProductChekoutCss.footer}>
              <h3 className={ProductChekoutCss.footerul1Title}>Top Products</h3>
              <ul className={ProductChekoutCss.footerul1}>
                <li className={ProductChekoutCss.footerul1li}>Managed Website</li>
                <li className={ProductChekoutCss.footerul1li}>Manage Reputation</li>
                <li className={ProductChekoutCss.footerul1li}>Power Tools</li>
                <li className={ProductChekoutCss.footerul1li}>Marketing Service</li>
              </ul>
              <h3 className={ProductChekoutCss.footerul2Title}>Quick Links</h3>
              <ul className={ProductChekoutCss.footerul2}>
                <li className={ProductChekoutCss.footerul1li}>jobs</li>
                <li className={ProductChekoutCss.footerul1li}>Brand Assets</li>
                <li className={ProductChekoutCss.footerul1li}>Investor Relations</li>
                <li className={ProductChekoutCss.footerul1li}>Terms of Service</li>
              </ul>
              <h3 className={ProductChekoutCss.footerul3Title}>Features</h3>
              <ul className={ProductChekoutCss.footerul3}>
                <li className={ProductChekoutCss.footerul1li}>jobs</li>
                <li className={ProductChekoutCss.footerul1li}>Brand Assets</li>
                <li className={ProductChekoutCss.footerul1li}>Investor Relations</li>
                <li className={ProductChekoutCss.footerul1li}>Terms of Service</li>
              </ul>
              <h3 className={ProductChekoutCss.footerul4Title}>Resources</h3>
              <ul className={ProductChekoutCss.footerul4}>
                <li className={ProductChekoutCss.footerul1li}>Guides</li>
                <li className={ProductChekoutCss.footerul1li}>Research</li>
                <li className={ProductChekoutCss.footerul1li}>Experts</li>
                <li className={ProductChekoutCss.footerul1li}>Agencies</li>
              </ul>
              <h3 className={ProductChekoutCss.newsletter}>Newsletter</h3>
              <p className={ProductChekoutCss.newsletterText}>
                You can trust us. we only send promo offers,
              </p>
              <input
                className={ProductChekoutCss.newsletterInp}
                placeholder="your email address"
                type="email"
                name=""
                id=""
              />
              <button className={ProductChekoutCss.subbtn}>subscribe</button>
              <p className={ProductChekoutCss.copyrightmessage}>
                Copyright ©2025 All rights reserved | This template is made with
              </p>
              <i class={`fa-regular fa-heart ${ProductChekoutCss.copyrighticon}`}></i>
              <p className={ProductChekoutCss.by}>
                by <span className={ProductChekoutCss.bycolor}>Colorlib</span>
              </p>
      
              <div className={ProductChekoutCss.footericon1}>
                <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div className={ProductChekoutCss.footericon2}>
                <i className={`fa-brands fa-twitter`}></i>
              </div>
              <div className={ProductChekoutCss.footericon3}>
                <i class="fa-brands fa-dribbble"></i>{" "}
              </div>
              <div className={ProductChekoutCss.footericon4}>
                <i class="fa-brands fa-behance"></i>{" "}
              </div>
            </div>
    </>
  );
}

export default ProductChekout;
