import BlogDetailsCss from "./blogDetails.module.css";
import post1 from "./post1.jpg";
import post2 from "./post2.jpg";
import post3 from "./post3.jpg";
import post4 from "./post4.jpg";

import widget1 from "./widget-i1.png";
import widget2 from "./widget-i2.png";
import widget3 from "./widget-i3.png";
import widget4 from "./widget-i4.png";
import widget5 from "./widget-i5.png";
import widget6 from "./widget-i6.png";

import blog1 from "./m-blog-1 (1).jpg";

import ilkkadin from "./kadin0.jpg";
import ikicikadin from "./kadinbir.jpg";

import tekadam from "./author.png";

import c1 from "./c1.png";
import c2 from "./c2.png";
import c3 from "./c3.png";

function BlogDetails() {
  return (
    <>
      <div className={BlogDetailsCss.tanitim}>
        <h3 className={BlogDetailsCss.tanitimtitle}>blog details</h3>
        <p className={BlogDetailsCss.paragraf}>
          Very us move be blessed multiply night
        </p>
        <span className={BlogDetailsCss.tanitimbolum}>
          Home / blog / blog details
        </span>
      </div>

      <img className={BlogDetailsCss.image1} src={blog1} alt="" />

      <h4 className={BlogDetailsCss.imageTitle}>
        Second divided from form fish beast made every of seas all gathered us
        saying he our
      </h4>

      <div className={BlogDetailsCss.iconlu1}>
        <i class="fa-regular fa-user"></i>
        <span className={BlogDetailsCss.iconlu1span}> travel, lifestyle</span>
        <span className={BlogDetailsCss.ayirim}>|</span>
      </div>
      <div className={BlogDetailsCss.iconlu2}>
        <i class="fa-regular fa-comment"></i>{" "}
        <span className={BlogDetailsCss.iconlu1span}> 03 comments</span>
      </div>

      <p className={BlogDetailsCss.text1}>
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower
      </p>
      <p className={BlogDetailsCss.text2}>
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower to actually sit through a
        self-imposed MCSE training. who has the willpower to actually
      </p>

      <div className={BlogDetailsCss.text3bg}>
        <div className={BlogDetailsCss.text3div}>
          <p className={BlogDetailsCss.text3}>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower to actually sit
            through a self-imposed MCSE training.
          </p>
        </div>
      </div>

      <p className={BlogDetailsCss.text4}>
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower
      </p>
      <p className={BlogDetailsCss.text5}>
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower to actually sit through a
        self-imposed MCSE training. who has the willpower to actually
      </p>
      <div className={BlogDetailsCss.cizgi1}></div>
      <i className={`fa-regular fa-heart ${BlogDetailsCss.begeni}`}></i>
      <span className={BlogDetailsCss.begenenler}>
        {" "}
        Lily and 4 people like this
      </span>
      <i class={`fa-regular fa-comments ${BlogDetailsCss.comments}`}></i>
      <span className={BlogDetailsCss.comments6}> 06 Comments</span>

      <i class={`fa-brands fa-facebook-f ${BlogDetailsCss.facebook5}`}></i>
      <i class={`fa-brands fa-twitter ${BlogDetailsCss.twitter5}`}></i>
      <i class={`fa-solid fa-basketball ${BlogDetailsCss.dribble5}`}></i>
      <i class={`fa-brands fa-wordpress ${BlogDetailsCss.wordpress5}`}></i>

      <div className={BlogDetailsCss.ilkkadin}>
        <img src={ilkkadin} alt="" />
        <span className={BlogDetailsCss.prev}>Prev Post</span>
        <h4 className={BlogDetailsCss.ilkkadintitle}>
          Space The Final Frontier
        </h4>
      </div>
      <div className={BlogDetailsCss.ikincikadin}>
        <span className={BlogDetailsCss.next}>next Post</span>
        <h4 className={BlogDetailsCss.ikincikadintitle}>Telescopes 101</h4>
        <img
          className={BlogDetailsCss.ikincikadinimg}
          src={ikicikadin}
          alt=""
        />
      </div>
      <div className={BlogDetailsCss.cizgi2}></div>
      <div className={BlogDetailsCss.tekadam}>
        <img className={BlogDetailsCss.tekadamimg} src={tekadam} alt="" />
        <h4 className={BlogDetailsCss.harvard}>Harvard milan</h4>
        <p className={BlogDetailsCss.harvardp}>
          Second divided from form fish beast made. Every of seas all gathered
          use saying you're, he our dominion twon Second divided from
        </p>
      </div>
      <div className={BlogDetailsCss.cizgi3}></div>

      <h3 className={BlogDetailsCss.commentsayisi}>05 comments</h3>
      <div className={BlogDetailsCss.comment1}>
        <img className={BlogDetailsCss.c1} src={c1} alt="" />
        <p className={BlogDetailsCss.c1text}>
          Multiply sea night grass fourth day sea lesser rule open subdue female
          fill which them Blessed, give fill lesser bearing multiply sea night
          grass fourth day sea lesser
        </p>
        <h4 className={BlogDetailsCss.c1name}>emily blunt</h4>
        <p className={BlogDetailsCss.c1date}>December 4, 2017 at 3:12 pmF</p>
        <p className={BlogDetailsCss.reply1}>reply</p>
      </div>
      <div className={BlogDetailsCss.comment2}>
        <img className={BlogDetailsCss.c1} src={c2} alt="" />
        <p className={BlogDetailsCss.c1text}>
          Multiply sea night grass fourth day sea lesser rule open subdue female
          fill which them Blessed, give fill lesser bearing multiply sea night
          grass fourth day sea lesser
        </p>
        <h4 className={BlogDetailsCss.c1name}>emily blunt</h4>
        <p className={BlogDetailsCss.c1date}>December 4, 2017 at 3:12 pmF</p>
        <p className={BlogDetailsCss.reply1}>reply</p>
      </div>
      <div className={BlogDetailsCss.comment3}>
        <img className={BlogDetailsCss.c1} src={c3} alt="" />
        <p className={BlogDetailsCss.c1text}>
          Multiply sea night grass fourth day sea lesser rule open subdue female
          fill which them Blessed, give fill lesser bearing multiply sea night
          grass fourth day sea lesser
        </p>
        <h4 className={BlogDetailsCss.c1name}>emily blunt</h4>
        <p className={BlogDetailsCss.c1date}>December 4, 2017 at 3:12 pmF</p>
        <p className={BlogDetailsCss.reply1}>reply</p>
      </div>
      <div className={BlogDetailsCss.cizgi4}></div>
      <h3 className={BlogDetailsCss.formtitle}>Leave a Reply</h3>

      <textarea
        placeholder="write comment"
        className={BlogDetailsCss.textarea}
        name=""
        id=""
      ></textarea>
      <input
        className={BlogDetailsCss.nameinp}
        placeholder="name"
        type="text"
        name=""
        id=""
      />
      <input
        placeholder="email"
        className={BlogDetailsCss.emailinp}
        type="email"
        name=""
        id=""
      />
      <input
        className={BlogDetailsCss.website}
        placeholder="website"
        type="text"
        name=""
        id=""
      />
      <button className={BlogDetailsCss.sendMessage}>send message</button>

      <div className={BlogDetailsCss.search}>
        <input
          placeholder="search keyword"
          className={BlogDetailsCss.searchInp}
          type="search"
          name=""
          id=""
        />
        <button className={BlogDetailsCss.searchBtn}>search</button>
      </div>
      <div className={BlogDetailsCss.category}>
        <h4 className={BlogDetailsCss.categoryTitle}>category</h4>
        <ul>
          <li className={BlogDetailsCss.category1}>
            {" "}
            <p>resaurant food(37)</p>
          </li>
          <li className={BlogDetailsCss.category1}>
            {" "}
            <p>Travel news (10)</p>
          </li>
          <li className={BlogDetailsCss.category1}>
            {" "}
            <p>Modern technology (03)</p>
          </li>
          <li className={BlogDetailsCss.category1}>
            {" "}
            <p>Product (11)</p>
          </li>
          <li className={BlogDetailsCss.category1}>
            {" "}
            <p>Inspiration 21</p>
          </li>
          <li className={BlogDetailsCss.category1}>
            {" "}
            <p>Health Care (21) 09</p>
          </li>
        </ul>
      </div>
      <div className={BlogDetailsCss.recent}>
        <h4 className={BlogDetailsCss.recentTitle}>recent post</h4>
        <ul>
          <li className={BlogDetailsCss.recent1}>
            {" "}
            <img src={post1} alt="" />
            <span>From life was you fish...</span>
            <p>January 12, 2019</p>
          </li>
          <li className={BlogDetailsCss.recent1}>
            {" "}
            <img src={post2} alt="" />
            <span>The Amazing Hubble</span>
            <p>02 Hours ago</p>
          </li>
          <li className={BlogDetailsCss.recent1}>
            {" "}
            <img src={post3} alt="" />
            <span>Astronomy Or Astrology</span>
            <p>03 Hours ago</p>
          </li>
          <li className={BlogDetailsCss.recent1}>
            {" "}
            <img src={post4} alt="" />
            <span>Asteroids telescope</span>
            <p>01 Hours ago</p>
          </li>
        </ul>
      </div>
      <div className={BlogDetailsCss.tag}>
        <h4 className={BlogDetailsCss.tagTitle}>recent post</h4>
        <div className={BlogDetailsCss.tagrow1}>
          <span className={BlogDetailsCss.tag1}>project</span>
          <span className={BlogDetailsCss.tag1}>love</span>
          <span className={BlogDetailsCss.tag1}>technology</span>
        </div>
        <div className={BlogDetailsCss.tagrow2}>
          <span className={BlogDetailsCss.tag2}>travel</span>
          <span className={BlogDetailsCss.tag2}>restaurant</span>
          <span className={BlogDetailsCss.tag2}>life style</span>
        </div>
        <div className={BlogDetailsCss.tagrow3}>
          <span className={BlogDetailsCss.tag2}>design</span>
          <span className={BlogDetailsCss.tag2}>illustratuion</span>
        </div>
      </div>
      <div className={BlogDetailsCss.feed}>
        <h4 className={BlogDetailsCss.feedTitle}>Instagram Feeds</h4>

        <div className={BlogDetailsCss.feedrow1}>
          <img src={widget1} alt="" />
          <img src={widget2} alt="" />
          <img src={widget3} alt="" />
        </div>
        <div className={BlogDetailsCss.feedrow1}>
          <img src={widget4} alt="" />
          <img src={widget5} alt="" />
          <img src={widget6} alt="" />
        </div>
      </div>
      <div className={BlogDetailsCss.search2}>
        <input
          placeholder="enter email"
          className={BlogDetailsCss.searchInp}
          type="search"
          name=""
          id=""
        />
        <button className={BlogDetailsCss.searchBtn}>subscribe</button>
      </div>
      <div className={BlogDetailsCss.footer}>
        <h3 className={BlogDetailsCss.footerul1Title}>Top Products</h3>
        <ul className={BlogDetailsCss.footerul1}>
          <li className={BlogDetailsCss.footerul1li}>Managed Website</li>
          <li className={BlogDetailsCss.footerul1li}>Manage Reputation</li>
          <li className={BlogDetailsCss.footerul1li}>Power Tools</li>
          <li className={BlogDetailsCss.footerul1li}>Marketing Service</li>
        </ul>
        <h3 className={BlogDetailsCss.footerul2Title}>Quick Links</h3>
        <ul className={BlogDetailsCss.footerul2}>
          <li className={BlogDetailsCss.footerul1li}>jobs</li>
          <li className={BlogDetailsCss.footerul1li}>Brand Assets</li>
          <li className={BlogDetailsCss.footerul1li}>Investor Relations</li>
          <li className={BlogDetailsCss.footerul1li}>Terms of Service</li>
        </ul>
        <h3 className={BlogDetailsCss.footerul3Title}>Features</h3>
        <ul className={BlogDetailsCss.footerul3}>
          <li className={BlogDetailsCss.footerul1li}>jobs</li>
          <li className={BlogDetailsCss.footerul1li}>Brand Assets</li>
          <li className={BlogDetailsCss.footerul1li}>Investor Relations</li>
          <li className={BlogDetailsCss.footerul1li}>Terms of Service</li>
        </ul>
        <h3 className={BlogDetailsCss.footerul4Title}>Resources</h3>
        <ul className={BlogDetailsCss.footerul4}>
          <li className={BlogDetailsCss.footerul1li}>Guides</li>
          <li className={BlogDetailsCss.footerul1li}>Research</li>
          <li className={BlogDetailsCss.footerul1li}>Experts</li>
          <li className={BlogDetailsCss.footerul1li}>Agencies</li>
        </ul>
        <h3 className={BlogDetailsCss.newsletter}>Newsletter</h3>
        <p className={BlogDetailsCss.newsletterText}>
          You can trust us. we only send promo offers,
        </p>
        <input
          className={BlogDetailsCss.newsletterInp}
          placeholder="your email address"
          type="email"
          name=""
          id=""
        />
        <button className={BlogDetailsCss.subbtn}>subscribe</button>
        <p className={BlogDetailsCss.copyrightmessage}>
          Copyright ©2025 All rights reserved | This template is made with
        </p>
        <i class={`fa-regular fa-heart ${BlogDetailsCss.copyrighticon}`}></i>
        <p className={BlogDetailsCss.by}>
          by <span className={BlogDetailsCss.bycolor}>Colorlib</span>
        </p>

        <div className={BlogDetailsCss.footericon1}>
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className={BlogDetailsCss.footericon2}>
          <i className={`fa-brands fa-twitter`}></i>
        </div>
        <div className={BlogDetailsCss.footericon3}>
          <i class="fa-brands fa-dribbble"></i>{" "}
        </div>
        <div className={BlogDetailsCss.footericon4}>
          <i class="fa-brands fa-behance"></i>{" "}
        </div>
      </div>
    </>
  );
}
export default BlogDetails;
