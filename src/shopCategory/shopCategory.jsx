import { useState } from "react";
import ShopCategorycss from "./shopCategory.module.css";
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i4 from "./i4.jpg";
import i5 from "./i5.jpg";
import i6 from "./i6.jpg";
import i7 from "./i7.jpg";
import i8 from "./i8.jpg";
import i9 from "./i2 (1).jpg";

function ShopCategory() {
  return (
    <>
      <div className={ShopCategorycss.tanitim}>
        <h3 className={ShopCategorycss.tanitimtitle}>shop category</h3>
        <p className={ShopCategorycss.paragraf}>
          Very us move be blessed multiply night
        </p>
        <span className={ShopCategorycss.tanitimbolum}>
          Home / Shop / Women Fashion
        </span>
      </div>
      <div className={ShopCategorycss.serit}>
        <select name="" id="" className={ShopCategorycss.seritoptin}>
          <option value="Default sorting">Default sorting</option>
          <option value="Default sorting">Default sorting1</option>
          <option value="Default sorting">Default sorting2</option>
        </select>
        <select name="" id="" className={ShopCategorycss.seritoptin2}>
          <option value="show12">show 12</option>
          <option value="show14">show 14</option>
          <option value="show16">show 16</option>
        </select>
      </div>
      <div className={ShopCategorycss.BrowseCategories}>
        <h3 className={ShopCategorycss.BrowseCategoriesTitle}>
          Browse Categories
        </h3>

        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            frozen fish
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            dried fish
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            fresh fish
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            meat alternatives
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            fresh fish
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            meat alternatives
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            meat
          </label>
        </div>
      </div>
      <div className={ShopCategorycss.ProductBrand}>
        <h3 className={ShopCategorycss.BrowseCategoriesTitle}>Product Brand</h3>

        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            apple
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            asus
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            gionee
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            micromax
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            samsung
          </label>
        </div>
      </div>
      <div className={ShopCategorycss.color}>
        <h3 className={ShopCategorycss.BrowseCategoriesTitle}>color filter</h3>

        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            black
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            black leather
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            black with red
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            gold
          </label>
        </div>
        <div className={ShopCategorycss.BrowseCategoriesInp1}>
          <input
            className={ShopCategorycss.BrowseCategoriesinp1}
            type="radio"
            name=""
            id=""
          />
          <label className={ShopCategorycss.BrowseCategorieslabel1} htmlFor="">
            spacegrey
          </label>
        </div>
      </div>
      <div className={ShopCategorycss.price}>
        <h3 className={ShopCategorycss.BrowseCategoriesTitle}>price filter</h3>
        <input className={ShopCategorycss.range} type="range" name="" id="" />
        <p className={ShopCategorycss.pricetext}>price : 10$ 500$</p>
      </div>
      <div className={ShopCategorycss.cardallrow1}>
        <div className={ShopCategorycss.inscard4}>
          <img className={ShopCategorycss.ayakkabiphoto} src={i1} alt="" />
          <p className={ShopCategorycss.inscard4title}>adidas sport shoes</p>
          <p className={ShopCategorycss.inscard4fiyat}>$25.00</p>
          <p className={ShopCategorycss.inscard4indirimi}>$35.00</p>
        </div>
        <div className={ShopCategorycss.inscard4}>
          <img className={ShopCategorycss.ayakkabiphoto} src={i2} alt="" />
          <p className={ShopCategorycss.inscard4title}>adidas sport shoes</p>
          <p className={ShopCategorycss.inscard4fiyat}>$25.00</p>
          <p className={ShopCategorycss.inscard4indirimi}>$35.00</p>
        </div>
        <div className={ShopCategorycss.inscard4}>
          <img className={ShopCategorycss.ayakkabiphoto} src={i3} alt="" />
          <p className={ShopCategorycss.inscard4title}>adidas sport shoes</p>
          <p className={ShopCategorycss.inscard4fiyat}>$25.00</p>
          <p className={ShopCategorycss.inscard4indirimi}>$35.00</p>
        </div>
      </div>
      <div className={ShopCategorycss.cardallrow2}>
        <div className={ShopCategorycss.inscard4}>
          <img className={ShopCategorycss.ayakkabiphoto} src={i4} alt="" />
          <p className={ShopCategorycss.inscard4title}>adidas sport shoes</p>
          <p className={ShopCategorycss.inscard4fiyat}>$25.00</p>
          <p className={ShopCategorycss.inscard4indirimi}>$35.00</p>
        </div>
        <div className={ShopCategorycss.inscard4}>
          <img className={ShopCategorycss.ayakkabiphoto} src={i5} alt="" />
          <p className={ShopCategorycss.inscard4title}>adidas sport shoes</p>
          <p className={ShopCategorycss.inscard4fiyat}>$25.00</p>
          <p className={ShopCategorycss.inscard4indirimi}>$35.00</p>
        </div>
        <div className={ShopCategorycss.inscard4}>
          <img className={ShopCategorycss.ayakkabiphoto} src={i6} alt="" />
          <p className={ShopCategorycss.inscard4title}>adidas sport shoes</p>
          <p className={ShopCategorycss.inscard4fiyat}>$25.00</p>
          <p className={ShopCategorycss.inscard4indirimi}>$35.00</p>
        </div>
      </div>
      <div className={ShopCategorycss.cardallrow3}>
        <div className={ShopCategorycss.inscard4}>
          <img className={ShopCategorycss.ayakkabiphoto} src={i7} alt="" />
          <p className={ShopCategorycss.inscard4title}>adidas sport shoes</p>
          <p className={ShopCategorycss.inscard4fiyat}>$25.00</p>
          <p className={ShopCategorycss.inscard4indirimi}>$35.00</p>
        </div>
        <div className={ShopCategorycss.inscard4}>
          <img className={ShopCategorycss.ayakkabiphoto} src={i8} alt="" />
          <p className={ShopCategorycss.inscard4title}>adidas sport shoes</p>
          <p className={ShopCategorycss.inscard4fiyat}>$25.00</p>
          <p className={ShopCategorycss.inscard4indirimi}>$35.00</p>
        </div>
        <div className={ShopCategorycss.inscard4}>
          <img className={ShopCategorycss.ayakkabiphoto} src={i9} alt="" />
          <p className={ShopCategorycss.inscard4title}>adidas sport shoes</p>
          <p className={ShopCategorycss.inscard4fiyat}>$25.00</p>
          <p className={ShopCategorycss.inscard4indirimi}>$35.00</p>
        </div>
      </div>
       <div className={ShopCategorycss.footer}>
              <h3 className={ShopCategorycss.footerul1Title}>Top Products</h3>
              <ul className={ShopCategorycss.footerul1}>
                <li className={ShopCategorycss.footerul1li}>Managed Website</li>
                <li className={ShopCategorycss.footerul1li}>Manage Reputation</li>
                <li className={ShopCategorycss.footerul1li}>Power Tools</li>
                <li className={ShopCategorycss.footerul1li}>Marketing Service</li>
              </ul>
              <h3 className={ShopCategorycss.footerul2Title}>Quick Links</h3>
              <ul className={ShopCategorycss.footerul2}>
                <li className={ShopCategorycss.footerul1li}>jobs</li>
                <li className={ShopCategorycss.footerul1li}>Brand Assets</li>
                <li className={ShopCategorycss.footerul1li}>Investor Relations</li>
                <li className={ShopCategorycss.footerul1li}>Terms of Service</li>
              </ul>
              <h3 className={ShopCategorycss.footerul3Title}>Features</h3>
              <ul className={ShopCategorycss.footerul3}>
                <li className={ShopCategorycss.footerul1li}>jobs</li>
                <li className={ShopCategorycss.footerul1li}>Brand Assets</li>
                <li className={ShopCategorycss.footerul1li}>Investor Relations</li>
                <li className={ShopCategorycss.footerul1li}>Terms of Service</li>
              </ul>
              <h3 className={ShopCategorycss.footerul4Title}>Resources</h3>
              <ul className={ShopCategorycss.footerul4}>
                <li className={ShopCategorycss.footerul1li}>Guides</li>
                <li className={ShopCategorycss.footerul1li}>Research</li>
                <li className={ShopCategorycss.footerul1li}>Experts</li>
                <li className={ShopCategorycss.footerul1li}>Agencies</li>
              </ul>
              <h3 className={ShopCategorycss.newsletter}>Newsletter</h3>
              <p className={ShopCategorycss.newsletterText}>
                You can trust us. we only send promo offers,
              </p>
              <input
                className={ShopCategorycss.newsletterInp}
                placeholder="your email address"
                type="email"
                name=""
                id=""
              />
              <button className={ShopCategorycss.subbtn}>subscribe</button>
              <p className={ShopCategorycss.copyrightmessage}>
                Copyright ©2025 All rights reserved | This template is made with
              </p>
              <i class={`fa-regular fa-heart ${ShopCategorycss.copyrighticon}`}></i>
              <p className={ShopCategorycss.by}>
                by <span className={ShopCategorycss.bycolor}>Colorlib</span>
              </p>
      
              <div className={ShopCategorycss.footericon1}>
                <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div className={ShopCategorycss.footericon2}>
                <i className={`fa-brands fa-twitter`}></i>
              </div>
              <div className={ShopCategorycss.footericon3}>
                <i class="fa-brands fa-dribbble"></i>{" "}
              </div>
              <div className={ShopCategorycss.footericon4}>
                <i class="fa-brands fa-behance"></i>{" "}
              </div>
            </div>
    </>
  );
}

export default ShopCategory;
