import TrackingCss from "./tracking.module.css";

function Tracking() {
  return (
    <>
      <div className={TrackingCss.tanitim}>
        <h3 className={TrackingCss.tanitimtitle}>Order Tracking</h3>
        <p className={TrackingCss.paragraf}>
          Very us move be blessed multiply night
        </p>
        <span className={TrackingCss.tanitimbolum}>Home / Order Tracking</span>
      </div>
      <p className={TrackingCss.baslik}>
        To track your order please enter your Order ID in the box below and
        press the "Track" button. This was given to you on your receipt and in
        the confirmation email you should have received.
      </p>
      <input className={TrackingCss.orderid} placeholder="order id" type="text" name="" id="" />
      <input className={TrackingCss.email} placeholder="billing email address" type="text" name="" id="" />
      <button className={TrackingCss.btn}>track order</button>

       <div className={TrackingCss.footer}>
                    <h3 className={TrackingCss.footerul1Title}>Top Products</h3>
                    <ul className={TrackingCss.footerul1}>
                      <li className={TrackingCss.footerul1li}>Managed Website</li>
                      <li className={TrackingCss.footerul1li}>Manage Reputation</li>
                      <li className={TrackingCss.footerul1li}>Power Tools</li>
                      <li className={TrackingCss.footerul1li}>Marketing Service</li>
                    </ul>
                    <h3 className={TrackingCss.footerul2Title}>Quick Links</h3>
                    <ul className={TrackingCss.footerul2}>
                      <li className={TrackingCss.footerul1li}>jobs</li>
                      <li className={TrackingCss.footerul1li}>Brand Assets</li>
                      <li className={TrackingCss.footerul1li}>Investor Relations</li>
                      <li className={TrackingCss.footerul1li}>Terms of Service</li>
                    </ul>
                    <h3 className={TrackingCss.footerul3Title}>Features</h3>
                    <ul className={TrackingCss.footerul3}>
                      <li className={TrackingCss.footerul1li}>jobs</li>
                      <li className={TrackingCss.footerul1li}>Brand Assets</li>
                      <li className={TrackingCss.footerul1li}>Investor Relations</li>
                      <li className={TrackingCss.footerul1li}>Terms of Service</li>
                    </ul>
                    <h3 className={TrackingCss.footerul4Title}>Resources</h3>
                    <ul className={TrackingCss.footerul4}>
                      <li className={TrackingCss.footerul1li}>Guides</li>
                      <li className={TrackingCss.footerul1li}>Research</li>
                      <li className={TrackingCss.footerul1li}>Experts</li>
                      <li className={TrackingCss.footerul1li}>Agencies</li>
                    </ul>
                    <h3 className={TrackingCss.newsletter}>Newsletter</h3>
                    <p className={TrackingCss.newsletterText}>
                      You can trust us. we only send promo offers,
                    </p>
                    <input
                      className={TrackingCss.newsletterInp}
                      placeholder="your email address"
                      type="email"
                      name=""
                      id=""
                    />
                    <button className={TrackingCss.subbtn}>subscribe</button>
                    <p className={TrackingCss.copyrightmessage}>
                      Copyright ©2025 All rights reserved | This template is made with
                    </p>
                    <i class={`fa-regular fa-heart ${TrackingCss.copyrighticon}`}></i>
                    <p className={TrackingCss.by}>
                      by <span className={TrackingCss.bycolor}>Colorlib</span>
                    </p>
            
                    <div className={TrackingCss.footericon1}>
                      <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className={TrackingCss.footericon2}>
                      <i className={`fa-brands fa-twitter`}></i>
                    </div>
                    <div className={TrackingCss.footericon3}>
                      <i class="fa-brands fa-dribbble"></i>{" "}
                    </div>
                    <div className={TrackingCss.footericon4}>
                      <i class="fa-brands fa-behance"></i>{" "}
                    </div>
                  </div>
    </>
  );
}

export default Tracking;
