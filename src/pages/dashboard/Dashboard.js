// This component was pulled from the Sitekick export (that is why it is not using MUI)

import "./index.css";
import "./sitekick-export.css";

function Dashboard() {
  return (
    <>
    <div data-collapse="medium" data-animation="default" data-duration="400" data-w-id="61bca4c7-d999-94f6-67cf-599da6f07b79" data-easing="ease" data-easing2="ease" role="banner" class="nav-bar w-nav">
      <div class="wrapper nav-bar-wrapper">
        <a href="index.html" aria-current="page" class="brand w-nav-brand w--current">
          <img src="images/logo-circle.svg" alt="" class="logo-icon" />
          <div class="logo-text">
            <strong>Content Producer.AI</strong>
            <br />
          </div>
        </a>
        <div class="navigation">
          <nav role="navigation" class="nav-menu w-nav-menu">
            <a href="#Intro" class="nav-link w-nav-link">Intro</a>
            <a href="#Features" class="nav-link w-nav-link">Features</a>
            <a href="#testimonials" class="nav-link w-nav-link">Testimonials</a>
          </nav>
          <div class="nav-right">
            <div class="w-layout-grid nav-buttons">
              <a href="#Intro" class="button small white w-button">Sign up</a>
            </div>
          </div>
          <div class="menu-button w-clearfix w-nav-button">
            <div class="menu-icon">
              <div class="menu-icon-line-top"></div>
              <div class="menu-icon-line-middle"></div>
              <div class="menu-icon-line-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div id="Intro" className="section hero-section wf-section">
        <div className="wrapper">
          <div className="hero">
            <div
              id="w-node-_3216c4a5-26df-dd7e-332a-30e133c559d9-7b5d3f69"
              className="hero-content"
            >
              <div className="title dark-bg">
                <div>Introducing  </div>
                <div>
                  <strong>CONTENT PRODUCER.AI</strong>
                </div>
              </div>
              <h1 className="hero-heading">
                Generate compeling content in seconds.
              </h1>
              <div className="hero-text">
                Content Producer AI is website content generation software. It
                will create the perfect copy to use in web pages, social media,
                ads or wherever you need it.
              </div>
              <div className="hero-sign-up w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="hero-subscribe"
                >
                  <input
                    type="email"
                    className="input hero-input w-input"
                    maxLength="256"
                    name="email-2"
                    data-name="Email 2"
                    placeholder="Your email address"
                    id="email-2"
                    required=""
                  />
                  <input
                    type="submit"
                    value="SIGN UP"
                    data-wait="Please wait..."
                    className="button white hero-button w-button"
                  />
                </form>
                <div className="form-success w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="form-error w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
                <div className="hero-form-text">
                  * By clicking “Sign Up” button, you agree to our Terms and
                  that you have read our Data Use Policy.
                </div>
              </div>
            </div>
            <div
              id="w-node-_3216c4a5-26df-dd7e-332a-30e133c559ef-7b5d3f69"
              className="hero-screen hidden"
            >
              <img
                src="../../assets/sitekick-export-images/coming-soon.jpg"
                alt=""
                className="hero-image"
              />
            </div>
          </div>
        </div>
        <div className="hero-bg-gradient">
          <img
            src="../../assets/sitekick-export-images/wave-bottom.svg"
            alt=""
            className="wave-bottom"
          />
          <div className="bg-elements">
            <div className="dots"></div>
            <img
              src="../../assets/sitekick-export-images/circle-white.svg"
              alt=""
              className="circle-small"
            />
            <img
              src="../../assets/sitekick-export-images/circle-white.svg"
              alt=""
              className="circle-big"
            />
          </div>
        </div>
      </div>
      <div id="Features" className="section wf-section">
        <div className="wrapper">
          <div className="intro margin-bottom">
            <div className="title">Best Solution</div>
            <h2>Our Advantages</h2>
          </div>
          <div className="w-layout-grid main-grid">
            <div
              id="w-node-_4ee8956c-f300-610e-121d-578babd10223-7b5d3f69"
              data-w-id="4ee8956c-f300-610e-121d-578babd10223"
              className="feature"
            >
              <div className="feature-icon gradient-1">
                <div className="feature-number">1</div>
                <div className="feature-circle"></div>
              </div>
              <h3>High quality, readable and well-structured text</h3>
              <p className="text-grey">
                Web content generation with a click of a button
              </p>
            </div>
            <div
              id="w-node-_4ee8956c-f300-610e-121d-578babd1022c-7b5d3f69"
              data-w-id="4ee8956c-f300-610e-121d-578babd1022c"
              className="feature"
            >
              <div className="feature-icon gradient-2">
                <div className="feature-number">2</div>
                <div className="feature-circle"></div>
              </div>
              <h3 className="heading-3">Always relevant content</h3>
              <p className="text-grey">
                Content Producer AI Can Create, Manage and Produce Dynamic
                content for your blog, your website or any other text based
                channel. The process is simple: you write keywords - we generate
                fresh quality content in seconds.
              </p>
            </div>
            <div
              id="w-node-_4ee8956c-f300-610e-121d-578babd10235-7b5d3f69"
              data-w-id="4ee8956c-f300-610e-121d-578babd10235"
              className="feature"
            >
              <div className="feature-icon gradient-3">
                <div className="feature-number">3</div>
                <div className="feature-circle"></div>
              </div>
              <h3>Easy and affordable content creation</h3>
              <p className="text-grey">
                Easy-to-use solutions let you build content fast and get a jump
                on the competition.
              </p>
            </div>
          </div>
        </div>
      </div>
      {
        // FIGURE OUT WHY THIS BREAKS THE DASHBOARD
        /* <div className="section bg-gradient wf-section">
        <div className="wrapper">
          <div className="cta">
            <h2
              data-w-id="98aa3ea6-834b-a0a8-4042-d5eb41fd54fc"
              style="opacity:0"
              className="cta-heading"
            >
              Get fresh content in just a few clicks!
            </h2>
            <p
              data-w-id="98aa3ea6-834b-a0a8-4042-d5eb41fd54fe"
              style="opacity:0"
              className="text-big"
            >
              Let Site Content help you get better results, faster.
            </p>
            <a
              href="#Intro"
              data-w-id="98aa3ea6-834b-a0a8-4042-d5eb41fd5500"
              style="opacity:0"
              className="button white w-button"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="bg-elements">
          <div className="dots"></div>
          <img src="../../assets/sitekick-export-images/circle-white.svg" alt="" className="circle-small" />
          <img src="../../assets/sitekick-export-images/circle-white.svg" alt="" className="circle-big" />
        </div>
        <img src="../../assets/sitekick-export-images/wave-bottom-haze.svg" alt="" className="wave-bottom" />
      </div> */
      }
      <div id="testimonials" class="section haze wf-section">
        <div class="wrapper">
          <div class="w-layout-grid main-grid">
            <div
              id="w-node-dcddcb2d-2ba0-ab6c-78c1-d8b5fe9e387a-7b5d3f69"
              class="intro left sticky"
            >
              <div class="title-2">Testimonials</div>
              <h2 class="heading-margin-big">
                What customers are saying about Content Producer.AI
                <br />
              </h2>
              <a href="#" class="arrow-link-2 w-inline-block" />
            </div>
            <div
              id="w-node-dcddcb2d-2ba0-ab6c-78c1-d8b5fe9e3883-7b5d3f69"
              class="w-layout-grid dynamic-column margin-top"
            >
              <div class="review-2">
                <div class="review-v1-text-2">
                  Content Coach is a great tool for generating different kinds
                  of content on the fly. It&#x27;s very useful if you need to
                  generate many variations of an ad or job descriptions, etc.
                </div>
                <div class="review-v1-bottom-2">
                  <img
                    src="../../assets/sitekick-export-images/Avatar-30.jpg"
                    sizes="(max-width: 1279px) 44px, (max-width: 1439px) 3vw, 44px"
                    srcset="images/Avatar-30-p-500.jpeg 500w, images/Avatar-30.jpg 800w"
                    alt=""
                    class="review-v1-avatar"
                  />
                  <div class="review-v1-info">
                    <div class="review-v1-name">
                      <strong>Tom Powell</strong>
                    </div>
                    <div class="review-v1-company-2">google</div>
                  </div>
                  <div class="review-v1-rating">
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                  </div>
                </div>
              </div>
              <div class="review-2">
                <div class="review-v1-text-2">
                  Content Coach AI has been an integral part of our writing
                  process for over a year now. We know as well as anyone how
                  important it is to have really good content, and this tool
                  helps us consistently produce that kind of content on demand.
                  It’s one more way we use AI to help make the world a better
                  place!
                </div>
                <div class="review-v1-bottom-2">
                  <img
                    src="../../assets/sitekick-export-images/avatar-01.jpg"
                    alt=""
                    class="review-v1-avatar"
                  />
                  <div class="review-v1-info">
                    <div class="review-v1-name">Maria Parker</div>
                    <div class="review-v1-company-2">Webflow</div>
                  </div>
                  <div class="review-v1-rating">
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-dcddcb2d-2ba0-ab6c-78c1-d8b5fe9e38a4-7b5d3f69"
              class="w-layout-grid dynamic-column"
            >
              <div class="review-2">
                <div class="review-v1-text-2">
                  We use it to create an unlimited supply of text with our core
                  message so that we can craft viral emails and posts.
                </div>
                <div class="review-v1-bottom-2">
                  <img
                    src="../../assets/sitekick-export-images/avatar-07.jpg"
                    alt=""
                    class="review-v1-avatar"
                  />
                  <div class="review-v1-info">
                    <div class="review-v1-name">Theresa Mason</div>
                    <div class="review-v1-company-2">Apple</div>
                  </div>
                  <div class="review-v1-rating">
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                  </div>
                </div>
              </div>
              <div class="review-2">
                <div class="review-v1-text-2">
                  Content Coach is an awesome software for all types of
                  business, for content creators and marketers alike. It makes
                  it simple to produce unique, lively copy with a single click.
                </div>
                <div class="review-v1-bottom-2">
                  <img
                    src="../../assets/sitekick-export-images/avatar-02.jpg"
                    alt=""
                    class="review-v1-avatar"
                  />
                  <div class="review-v1-info">
                    <div class="review-v1-name">Andrew Collins</div>
                    <div class="review-v1-company-2">Facebook</div>
                  </div>
                  <div class="review-v1-rating">
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/62e38cf2719d081940933941/62e38cf2719d08088c933ab4_star-filled-yellow.svg"
                      alt=""
                      class="review-v1-star"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section footer-section wf-section">
        <div class="wrapper">
          <div class="footer">
            <div class="footer-v2-info">
              <div class="footer-logo">
                <img
                  src="../../assets/sitekick-export-images/logo.svg"
                  loading="lazy"
                  alt=""
                  class="footer-logo-icon"
                />
              </div>
              <h3 class="footer-logo-name">Content Producer.AI</h3>
              <p class="text-grey">Generate compeling content in seconds.</p>
              <div class="social-icons">
                <a
                  href="http://twitter.com"
                  target="_blank"
                  class="social-circle-link w-inline-block"
                >
                  <img
                    src="../../assets/sitekick-export-images/twitter-icon-color.svg"
                    alt=""
                    class="social-icon"
                  />
                </a>
                <a
                  href="http://facebook.com"
                  target="_blank"
                  class="social-circle-link w-inline-block"
                >
                  <img
                    src="../../assets/sitekick-export-images/facebook-icon-color.svg"
                    alt=""
                    class="social-icon"
                  />
                </a>
                <a
                  href="http://instagram.com"
                  target="_blank"
                  class="social-circle-link w-inline-block"
                >
                  <img
                    src="../../assets/sitekick-export-images/instagram-icon-color.svg"
                    alt=""
                    class="social-icon"
                  />
                </a>
              </div>
            </div>
            <div class="footer-bottom">
              <div class="footer-v2-bottom-menu">
                <a href="#Intro" class="footer-v2-bottom-menu-link">
                  Intro
                </a>
                <a href="#Features" class="footer-v2-bottom-menu-link">
                  Features
                </a>
                <a href="#testimonials" class="footer-v2-bottom-menu-link">
                  Testimonials
                </a>
              </div>
              <div class="footer-v2-bottom-info">
                <div>
                  Made in{" "}
                  <a
                    href="https://sitekick.ai/"
                    target="_blank"
                    class="link-grey"
                  >
                    SiteKick
                  </a>
                </div>
                <div class="vertical-divider w-hidden-tiny"></div>
                <div>
                  Designed by{" "}
                  <a
                    href="https://www.elasticthemes.com/"
                    target="_blank"
                    class="link-grey"
                  >
                    Elastic Themes
                  </a>
                </div>
                <div class="vertical-divider w-hidden-tiny"></div>
                <div>
                  Powered by{" "}
                  <a
                    href="https://webflow.grsm.io/sitekick"
                    target="_blank"
                    class="link-grey"
                  >
                    Webflow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
