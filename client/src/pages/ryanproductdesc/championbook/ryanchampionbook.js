import MainLayout from "../../../components/MainLayout";
import "./ryanchampion.css";
// import ryanbook from "../../../files/w3.jpg";
// import ryanbook1 from '../../../files/w3.jpg'; 
import ryanbook2 from '../../../files/champion.png'; 

function RyanChampionoBook() {
  return (
    <MainLayout>
      <section className="champion-prouduct-top-layout">
        <div className="champion-product-content">
          <h1 className="champion-product-title">EATING SECRETS OF CHAMPION</h1>
          {/* <h3 className="champion-product-end-title">A Guide to Gluten free life</h3> */}
          <span className="champion-product-sold">5500+ copies sold and counting</span>
          <div className="champion-buy-btn">Buy Now</div>
          <div>Price Shown</div>
        </div>
        <div className="champion-product-image">
          <img src={ryanbook2} alt="" />
        </div>
      </section>
      <section className="champion-product-desc-section">
        <div className="champion-product-desc-image">
          <img src={ryanbook2} alt="" />
        </div>
        <div className="champion-product-description-layout-chapter">
          <h1 className="champion-product-chapter-title">What&apos;s inside?</h1>
          <h4 className="champion-product-chapter-desc">
            some desc Lorem ipsum dolor sit amet.
          </h4>
          <div className="champion-product-chapters-padding">
            <div className="champion-product-chapter-layout">
              <div className="champion-chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="champion-chapter-title">
                  Chapter 1: Awaken the giant in you
                </h1>
                <h3>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
            </div>
            <div className="champion-product-chapter-layout">
              <div className="champion-chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="champion-chapter-title">
                  Chapter 2: The genesis of eating for performance
                </h1>
                <h3>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
            </div>
            <div className="champion-product-chapter-layout">
              <div className="champion-chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="champion-chapter-title">
                  Chapter 3: Of Nutrition, Planning and winning
                </h1>
                <h3>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
            </div>
            <div className="champion-product-chapter-layout">
              <div className="champion-chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="champion-chapter-title">
                  Chapter 4: Predicting the future and performance an athlete
                </h1>
                <h3>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
            </div>
            <div className="champion-product-chapter-layout">
              <div className="champion-chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="champion-chapter-title">
                  Chapter 5: You are What you eat
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
      <section className="champion-product-reviews-layout">
        <h1 style={{ paddingBottom: "2%", fontWeight: "bold", color: "black" }}>
          What are the readers saying?
        </h1>
        <div className="champion-product-reviews-segment">
          <div className="champion-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="champion-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="champion-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="champion-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="champion-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="champion-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
        </div>
      </section>
      <section className="champion-ryan-note-layout">
        <div className="champion-ryan-note-image">
          <img src={ryanbook2} alt="" />
        </div>
        <div className="champion-ryan-note-layout1">
          <h1 className="champion-ryan-note-title">Note from Ryan Fernando</h1>
          <p className="champion-ryan-note-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, unde
            et soluta natus doloribus veritatis exercitationem fugiat iste aut
            aspernatur?
          </p>
          <p className="champion-ryan-note-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, unde
            et soluta natus doloribus veritatis exercitationem fugiat iste aut
            aspernatur?
          </p>
          <p className="champion-ryan-note-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, unde
            et soluta natus doloribus veritatis exercitationem fugiat iste aut
            aspernatur?
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export default RyanChampionoBook;
