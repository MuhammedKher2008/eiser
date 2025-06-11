import ShoppingCartCss from "./shoppingCart.module.css";
import cart1 from "./cart-1.jpg";

function ShoppingCart() {
  return (
    <>
      <div className={ShoppingCartCss.tanitim}>
        <h3 className={ShoppingCartCss.tanitimtitle}>cart</h3>
        <p className={ShoppingCartCss.paragraf}>
          Very us move be blessed multiply night
        </p>
        <span className={ShoppingCartCss.tanitimbolum}>Home / cart</span>
      </div>
      <table className={ShoppingCartCss.table}>
        <thead className={ShoppingCartCss.thead}>
          <tr>
            <th className={ShoppingCartCss.product}>product</th>
            <th>price </th>
            <th>quantity</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img className={ShoppingCartCss.img} src={cart1} alt="" />
              <span className={ShoppingCartCss.span}>
                Minimalistic shop for multipurpose use
              </span>
            </td>
            <td className={ShoppingCartCss.price}>
              <h5>$360</h5>
            </td>
            <td>
              <input
                className={ShoppingCartCss.inpum}
                min={0}
                type="number"
                name=""
                id=""
              />
            </td>
            <td className={ShoppingCartCss.price}>
              <h5>$720</h5>
            </td>
          </tr>
          <tr>
            <td>
              <img className={ShoppingCartCss.img} src={cart1} alt="" />
              <span className={ShoppingCartCss.span}>
                Minimalistic shop for multipurpose use
              </span>
            </td>
            <td className={ShoppingCartCss.price}>
              <h5>$360</h5>
            </td>
            <td>
              <input
                className={ShoppingCartCss.inpum}
                min={0}
                type="number"
                name=""
                id=""
              />
            </td>
            <td className={ShoppingCartCss.price}>
              <h5>$720</h5>
            </td>
          </tr>
          <tr>
            <td>
              <img className={ShoppingCartCss.img} src={cart1} alt="" />
              <span className={ShoppingCartCss.span}>
                Minimalistic shop for multipurpose use
              </span>
            </td>
            <td className={ShoppingCartCss.price}>
              <h5>$360</h5>
            </td>
            <td>
              <input
                className={ShoppingCartCss.inpum}
                min={0}
                type="number"
                name=""
                id=""
              />
            </td>
            <td className={ShoppingCartCss.price}>
              <h5>$720</h5>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={ShoppingCartCss.cizgi1}></div>
      <button className={ShoppingCartCss.updateBtn}>update cart</button>
      <input
        placeholder="coupon code"
        className={ShoppingCartCss.couponInp}
        type="text"
        name=""
        id=""
      />
      <button className={ShoppingCartCss.applyBtn}>apply</button>
      <button className={ShoppingCartCss.closeBtn}>close coupon</button>
      <div className={ShoppingCartCss.cizgi2}></div>
      <h5 className={ShoppingCartCss.subtotalTitle}>Subtotal</h5>
      <b className={ShoppingCartCss.subtotal}>$2160</b>
      <div className={ShoppingCartCss.cizgi3}></div>
      <h5 className={ShoppingCartCss.shippingTitle}>shipping</h5>
      <div className={ShoppingCartCss.firstradio}>
        <label htmlFor="">flat rate:$5.00 </label>
        <input type="radio" name="1" id="" />
      </div>
      <div className={ShoppingCartCss.firstradio}>
        <label htmlFor="">free shipping:$5.00 </label>
        <input type="radio" name="1" id="" />
      </div>
      <div className={ShoppingCartCss.firstradio}>
        <label htmlFor="">flat rate:$10.00 </label>
        <input type="radio" name="1" id="" />
      </div>
      <div className={ShoppingCartCss.firstradio}>
        <label htmlFor="">localdelivery:$2.00 </label>
        <input type="radio" name="1" id="" />
      </div>
      <p className={ShoppingCartCss.calculate}>calculate shipping</p>
      <select className={ShoppingCartCss.country} name="" id="">
        <option value="">bangladesh</option>
        <option value="">india</option>
        <option value="">pakistan</option>
      </select>
      <select className={ShoppingCartCss.country} name="" id="">
        <option value="">select a state</option>
        <option value="">select a state</option>
        <option value="">select a state</option>
      </select>
      <button className={ShoppingCartCss.updateDetailsBtn}>
        update details
      </button>
      <div className={ShoppingCartCss.cizgi4}></div>
      <button className={ShoppingCartCss.contiue}>continue shopping</button>
      <button className={ShoppingCartCss.checkout}>proceed to chekout</button>

      <div className={ShoppingCartCss.footer}>
        <h3 className={ShoppingCartCss.footerul1Title}>Top Products</h3>
        <ul className={ShoppingCartCss.footerul1}>
          <li className={ShoppingCartCss.footerul1li}>Managed Website</li>
          <li className={ShoppingCartCss.footerul1li}>Manage Reputation</li>
          <li className={ShoppingCartCss.footerul1li}>Power Tools</li>
          <li className={ShoppingCartCss.footerul1li}>Marketing Service</li>
        </ul>
        <h3 className={ShoppingCartCss.footerul2Title}>Quick Links</h3>
        <ul className={ShoppingCartCss.footerul2}>
          <li className={ShoppingCartCss.footerul1li}>jobs</li>
          <li className={ShoppingCartCss.footerul1li}>Brand Assets</li>
          <li className={ShoppingCartCss.footerul1li}>Investor Relations</li>
          <li className={ShoppingCartCss.footerul1li}>Terms of Service</li>
        </ul>
        <h3 className={ShoppingCartCss.footerul3Title}>Features</h3>
        <ul className={ShoppingCartCss.footerul3}>
          <li className={ShoppingCartCss.footerul1li}>jobs</li>
          <li className={ShoppingCartCss.footerul1li}>Brand Assets</li>
          <li className={ShoppingCartCss.footerul1li}>Investor Relations</li>
          <li className={ShoppingCartCss.footerul1li}>Terms of Service</li>
        </ul>
        <h3 className={ShoppingCartCss.footerul4Title}>Resources</h3>
        <ul className={ShoppingCartCss.footerul4}>
          <li className={ShoppingCartCss.footerul1li}>Guides</li>
          <li className={ShoppingCartCss.footerul1li}>Research</li>
          <li className={ShoppingCartCss.footerul1li}>Experts</li>
          <li className={ShoppingCartCss.footerul1li}>Agencies</li>
        </ul>
        <h3 className={ShoppingCartCss.newsletter}>Newsletter</h3>
        <p className={ShoppingCartCss.newsletterText}>
          You can trust us. we only send promo offers,
        </p>
        <input
          className={ShoppingCartCss.newsletterInp}
          placeholder="your email address"
          type="email"
          name=""
          id=""
        />
        <button className={ShoppingCartCss.subbtn}>subscribe</button>
        <p className={ShoppingCartCss.copyrightmessage}>
          Copyright ©2025 All rights reserved | This template is made with
        </p>
        <i class={`fa-regular fa-heart ${ShoppingCartCss.copyrighticon}`}></i>
        <p className={ShoppingCartCss.by}>
          by <span className={ShoppingCartCss.bycolor}>Colorlib</span>
        </p>

        <div className={ShoppingCartCss.footericon1}>
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className={ShoppingCartCss.footericon2}>
          <i className={`fa-brands fa-twitter`}></i>
        </div>
        <div className={ShoppingCartCss.footericon3}>
          <i class="fa-brands fa-dribbble"></i>{" "}
        </div>
        <div className={ShoppingCartCss.footericon4}>
          <i class="fa-brands fa-behance"></i>{" "}
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
