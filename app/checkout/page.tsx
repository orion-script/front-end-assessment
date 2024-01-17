import { Ellipse1, Ellipse2 } from "@/components/SVG";

import "./checkout.scss";
import Navbar from "@/components/navbar/Navbar";
import CheckoutHero from "@/components/checkoutHero/CheckoutHero";
import Footer from "@/components/footer/Footer";
import Delivery from "@/components/delivery/Delivery";

function Page() {
  return (
    <section className="checkout">
      <Navbar />
      <CheckoutHero />
      <h1 className="billing">Billing details</h1>
      <div className="checkout__container">
        <form action="" className="form__container">
          <section className="first__last">
            <div className="form__info">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>
            <div className="form__info">
              <label htmlFor="">Last Name</label>
              <input type="text" />
            </div>
          </section>
          <div className="form__info">
            <label htmlFor="">Company Name(optional)</label>
            <input type="text" />
          </div>
          <div className="form__info">
            <label htmlFor="">Country / Region</label>
            <select name="country/region" id="country/region">
              <option value="srilanka">SriLanka</option>
            </select>
          </div>
          <div className="form__info">
            <label htmlFor="">Street address</label>
            <input type="text" />
          </div>
          <div className="form__info">
            <label htmlFor="">Town / City</label>
            <input type="text" />
          </div>
          <div className="form__info">
            <label htmlFor="">Province</label>
            <select name="province" id="province">
              <option value="western province">Western Province</option>
            </select>
          </div>
          <div className="form__info">
            <label htmlFor="">Zip code</label>
            <input type="number" />
          </div>
          <div className="form__info">
            <label htmlFor="">Phone</label>
            <input type="number" />
          </div>
          <div className="form__info">
            <label htmlFor="">Email address</label>
            <input type="text" />
          </div>

          <div className="form__info">
            <input placeholder="additional information" type="text" />
          </div>
        </form>

        <section className="bank__info">
          <div className="total">
            <div className="product">
              <h2>Product</h2>
              <p>Asgaard sofa x 1</p>
              <h3>Subtotal</h3>
              <h3>Total</h3>
            </div>
            <div className="subtotal">
              <h2>Subtotal</h2>
              <p>Rs.250,000.00</p>
              <p>Rs.250,000.00</p>
              <p className="total__amt">Rs.250,000.00</p>
            </div>
          </div>

          <section className="bank__details">
            <div className="ellipse1">
              <h3>
                <span>
                  <Ellipse1 />
                </span>
                Direct Bank Transfer
              </h3>
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="ellipse2">
              <h3>
                <span>
                  <Ellipse2 />
                </span>{" "}
                Direct Bank Transfer
              </h3>
            </div>
            <div className="ellipse2">
              <h3>
                <span>
                  <Ellipse2 />
                </span>{" "}
                Cash on Delivery
              </h3>
            </div>
            <p className="personal__data">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <span>privacy policy</span>.
            </p>
            <button>Place order</button>
          </section>
        </section>
      </div>
      <Delivery />
      <Footer />
    </section>
  );
}

export default Page;
