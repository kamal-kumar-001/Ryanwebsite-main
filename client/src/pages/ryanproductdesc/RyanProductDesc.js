import MainLayout from "../../components/MainLayout";
import "./ryanproductdesc.css";
import ryanbook from "../../files/w3.jpg";
import ryanbook1 from '../../files/w3.jpg'; 
import ryanbook2 from '../../files/w3.jpg'; 

function RyanProductDesc() {
  return (
    <MainLayout>
      <section className="prouduct-top-layout">
        <div className="product-content">
          <span className="product-starting-title">
            A National bestseller on Food and Health
          </span>
          <h1 className="product-title">WHEATLESS</h1>
          <h3 className="product-end-title">A Guide to Gluten free life</h3>
          <span className="product-sold">4500+ copies sold and counting</span>
          <div className="buy-btn">Buy Now</div>
          <div>Price Shown</div>
        </div>
        <div className="product-image">
          <img src={ryanbook} alt="" />
        </div>
      </section>
      <section className="product-desc-section">
        <div className="product-desc-image">
          <img src={ryanbook1} alt="" />
        </div>
        <div className="product-description-layout-chapter">
          <h1 className="product-chapter-title">What&apos;s inside?</h1>
          <h4 className="product-chapter-desc">
            some desc Lorem ipsum dolor sit amet.
          </h4>
          <div className="product-chapters-padding">
            <div className="product-chapter-layout">
              <div className="chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="chapter-title">
                  Chapter 1: Understanding the Snobbish Protein
                </h1>
                <h3>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
            </div>
            <div className="product-chapter-layout">
              <div className="chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="chapter-title">
                  Chapter 2: To (Wh)eat or Not  to Eat
                </h1>
                <h3>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
            </div>
            <div className="product-chapter-layout">
              <div className="chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="chapter-title">
                  Chapter 3: Good Health Within and Without
                </h1>
                <h3>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
            </div>
            <div className="product-chapter-layout">
              <div className="chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="chapter-title">
                  Chapter 4: Diabetes and Wheat
                </h1>
                <h3>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
            </div>
            <div className="product-chapter-layout">
              <div className="chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="chapter-title">
                  Chapter 5: Wheat and Children
                </h1>
                <h3>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-reviews-layout">
        <h1 style={{ paddingBottom: "2%", fontWeight: "bold", color: "black" }}>
          What are the readers saying?
        </h1>
        <div className="product-reviews-segment">
          <div className="product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
        </div>
      </section>
      <section className="ryan-note-layout">
        <div className="ryan-note-image">
          <img src={ryanbook2} alt="" />
        </div>
        <div className="ryan-note-layout1">
          <h1 className="ryan-note-title">Note from Ryan Fernando</h1>
          <p className="ryan-note-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, unde
            et soluta natus doloribus veritatis exercitationem fugiat iste aut
            aspernatur?
          </p>
          <p className="ryan-note-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, unde
            et soluta natus doloribus veritatis exercitationem fugiat iste aut
            aspernatur?
          </p>
          <p className="ryan-note-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, unde
            et soluta natus doloribus veritatis exercitationem fugiat iste aut
            aspernatur?
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export default RyanProductDesc;
