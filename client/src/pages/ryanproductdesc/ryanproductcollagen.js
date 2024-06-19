import MainLayout from "../../components/MainLayout";
import "./ryanproductcollagen.css";
import collagen from "../../components/images/collagen.png";
import ryanbook1 from "../../files/w3.jpg";
import ryanbook2 from "../../files/w3.jpg";

function RyanProductDescCollagen() {
  return (
    <MainLayout>
      <section className="collagen-prouduct-top-layout">
        <div className="collagen-product-content">
          <h1 className="collagen-product-title">Collagen Powder</h1>
          <h3 className="collagen-product-end-title">(Cranberry Flavour) - 250g</h3>
          {/* <span className="collagen-product-sold">14000+ copies sold and counting</span> */}
          <div className="collagen-buy-btn">Buy Now</div>
          <div>Price Shown</div>
        </div>
        <div className="collagen-product-image">
          <img src={collagen} alt="" />
        </div>
      </section>
      <section className="collagen-product-desc-section">
        <div className="collagen-product-desc-image">
          <img src={ryanbook1} alt="" />
        </div>
        <div className="collagen-product-description-layout-chapter">
          <h1  className="collagen-product-chapter-title">
          Supplementation with Collagen can increase dietary protein. This protein will help in:
          </h1>
          <div className="collagen-product-chapters-padding">
            <div className="collagen-product-chapter-layout">
              <div className="collagen-chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="collagen-chapter-title">
                  Beauty
                </h1>
                <ul className="collagen-product-collagen-list">
                    <li>Improving Skin Texture & Elasticity</li>
                    <li>Reducing Fine line wrinkles</li>
                    <li>Increasing skin rehydration</li>
                    <li>Teenagers can use Collagen to improve Acne scars</li>
                    <li>May help in reduction of cellulite in women</li>
                </ul>
              </div>
            </div>
            <div className="collagen-product-chapter-layout">
              <div className="collagen-chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="collagen-chapter-title">
                  JOINT HEALTH
                </h1>
                <ul className="collagen-product-collagen-list">
                    <li>Cartilage and ligaments require collagen for its integrity.</li>
                    <li>Collagen boosts amino acid profile in the blood which provides correct amino acids to support cartilage health.</li>
                    <li>Bones are made up of 30-40% Collagen as a protein.</li>
                    <li>Athletes require collagen for injury recovery and strenuous training</li>
                    <li>Women taking collagen supplement may benefit from stronger bones post menopause.</li>
                    <li>Muscle Mass Increases with 15grams collagen supplementation.</li>
                    <li>Collagen may improve Arthicitc pain in elderly over a 6 month period.</li>
                </ul>
              </div>
            </div>
            <div className="collagen-product-chapter-layout">
              <div className="collagen-chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="collagen-chapter-title">
                  HEART HEALTH
                </h1>
                <ul className="collagen-product-collagen-list">
                    <li>Supplementation with Collagen may improve elasticity of arteries with atherosclerosis(plaque or blocks).</li>
                </ul>
              </div>
            </div>
            <div className="collagen-product-chapter-layout">
              <div className="collagen-chapter-blank-circle"></div>
              <div style={{ paddingLeft: "10px" }}>
                <h1 className="collagen-chapter-title">
                GUT HEALTH
                </h1>
                <ul className="collagen-product-collagen-list">
                    <li>Collagen is the most abundant protein in the cells of the Gut lining.</li>
                    <li>Collagen can help in improving the gut integrity and protect the skin of the gut3</li>
                    <li>Elderly people above 50 doing a fitness resistance program(weight training) may benefit from collagen supplement with better muscle protein synthesis
                    </li>
                    <li>In elderly people collagen supplementation will help in protein turnover in the gut which may help ulcers heal faster.
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collagen-product-reviews-layout">
        <h1 style={{ paddingBottom: "2%", fontWeight: "bold", color: "black" }}>
          What are the readers saying?
        </h1>
        <div className="collagen-product-reviews-segment">
          <div className="collagen-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="collagen-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="collagen-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="collagen-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="collagen-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="collagen-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
        </div>
      </section>
      <section className="collagen-ryan-note-layout">
        <div className="collagen-ryan-note-image">
          <img src={ryanbook2} alt="" />
        </div>
        <div className="collagen-ryan-note-layout1">
          <h1 className="collagen-ryan-note-title">Note from Ryan Fernando</h1>
          <p className="collagen-ryan-note-desc">
            The Wonders of Collagen Supplements for Skin, Hair, and Joint
            HealthCollagen, a fundamental protein for maintaining skin
            elasticity and firmness, decreases as we age, leading to wrinkles
            and sagging skin. Fortunately, collagen supplements can help promote
            natural collagen production, resulting in youthful, radiant skin.
            That&apos;s not all, as these supplements also offer other benefits such
            as improving bone and joint health, and promoting healthy hair,
            nails, and gut health. It&apos;s my go-to supplement for overall health
            and well-being.
          </p>

        </div>
      </section>
    </MainLayout>
  );
}

export default RyanProductDescCollagen;
