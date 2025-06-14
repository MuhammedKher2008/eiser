import contactcss from "./contact.module.css";

function Contact() {
  return (
    <>
      <div className={contactcss.tanitim}>
        <h3 className={contactcss.tanitimtitle}>Contact Us</h3>
        <p className={contactcss.paragraf}>
          Very us move be blessed multiply night
        </p>
        <span className={contactcss.tanitimbolum}>Home / Contact Us</span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774408.5056618688!2d-73.32015495505023!3d40.69526589685936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2str!4v1749907740903!5m2!1sar!2str"
        allowfullscreen=""
        className={contactcss.themap}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>{" "}
      <h3 className={contactcss.title}>get in touch</h3>
      <textarea
        placeholder="message"
        name=""
        className={contactcss.textarea}
        id=""
      ></textarea>
      <input
        className={contactcss.input1}
        placeholder="enter your name"
        type="text"
        name=""
        id=""
      />
      <input
        className={contactcss.input2}
        placeholder="enter email address"
        type="text"
        name=""
        id=""
      />
      <input
        className={contactcss.input3}
        placeholder="enter subject address"
        type="text"
        name=""
        id=""
      />
      <button className={contactcss.btn}>send message</button>
      <div className={contactcss.home}>
        <i class={`fa-solid fa-house  ${contactcss.house}`}></i>
        <h4 className={contactcss.homeTitle}>Buttonwood, California.</h4>
        <p className={contactcss.homeText}>Rosemead, CA 91770</p>
      </div>
      <div className={contactcss.phone}>
        <i class={`fa-solid fa-phone  ${contactcss.phonei}`}></i>
        <h4 className={contactcss.phoneTitle}>00 (440) 9865 562</h4>
        <p className={contactcss.phoneText}>Mon to Fri 9am to 6pm</p>
      </div>
      <div className={contactcss.mail}>
        <i class={`fa-solid fa-envelope  ${contactcss.maili}`}></i>
        <h4 className={contactcss.mailTitle}>support@colorlib.com</h4>
        <p className={contactcss.mailText}>Send us your query anytime!</p>
      </div>
      <div className={contactcss.footer}>
                    <h3 className={contactcss.footerul1Title}>Top Products</h3>
                    <ul className={contactcss.footerul1}>
                      <li className={contactcss.footerul1li}>Managed Website</li>
                      <li className={contactcss.footerul1li}>Manage Reputation</li>
                      <li className={contactcss.footerul1li}>Power Tools</li>
                      <li className={contactcss.footerul1li}>Marketing Service</li>
                    </ul>
                    <h3 className={contactcss.footerul2Title}>Quick Links</h3>
                    <ul className={contactcss.footerul2}>
                      <li className={contactcss.footerul1li}>jobs</li>
                      <li className={contactcss.footerul1li}>Brand Assets</li>
                      <li className={contactcss.footerul1li}>Investor Relations</li>
                      <li className={contactcss.footerul1li}>Terms of Service</li>
                    </ul>
                    <h3 className={contactcss.footerul3Title}>Features</h3>
                    <ul className={contactcss.footerul3}>
                      <li className={contactcss.footerul1li}>jobs</li>
                      <li className={contactcss.footerul1li}>Brand Assets</li>
                      <li className={contactcss.footerul1li}>Investor Relations</li>
                      <li className={contactcss.footerul1li}>Terms of Service</li>
                    </ul>
                    <h3 className={contactcss.footerul4Title}>Resources</h3>
                    <ul className={contactcss.footerul4}>
                      <li className={contactcss.footerul1li}>Guides</li>
                      <li className={contactcss.footerul1li}>Research</li>
                      <li className={contactcss.footerul1li}>Experts</li>
                      <li className={contactcss.footerul1li}>Agencies</li>
                    </ul>
                    <h3 className={contactcss.newsletter}>Newsletter</h3>
                    <p className={contactcss.newsletterText}>
                      You can trust us. we only send promo offers,
                    </p>
                    <input
                      className={contactcss.newsletterInp}
                      placeholder="your email address"
                      type="email"
                      name=""
                      id=""
                    />
                    <button className={contactcss.subbtn}>subscribe</button>
                    <p className={contactcss.copyrightmessage}>
                      Copyright ©2025 All rights reserved | This template is made with
                    </p>
                    <i class={`fa-regular fa-heart ${contactcss.copyrighticon}`}></i>
                    <p className={contactcss.by}>
                      by <span className={contactcss.bycolor}>Colorlib</span>
                    </p>
            
                    <div className={contactcss.footericon1}>
                      <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className={contactcss.footericon2}>
                      <i className={`fa-brands fa-twitter`}></i>
                    </div>
                    <div className={contactcss.footericon3}>
                      <i class="fa-brands fa-dribbble"></i>{" "}
                    </div>
                    <div className={contactcss.footericon4}>
                      <i class="fa-brands fa-behance"></i>{" "}
                    </div>
                  </div>
    </>
  );
}

export default Contact;
