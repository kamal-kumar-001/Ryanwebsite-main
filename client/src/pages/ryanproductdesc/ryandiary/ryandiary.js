import MainLayout from "../../../components/MainLayout";
import "./ryandiary.css";
import diary from "../../../components/images/1.jpg";
import ryanbook2 from "../../../files/w3.jpg";

function RyanDiary() {
  return (
    <MainLayout>
      <section className="diary-prouduct-top-layout">
        <div className="diary-product-content">
          <h1 className="diary-product-title">EDUCATIONAL FITNESS TRACKER</h1>
          <div className="diary-buy-btn">Buy Now</div>
          <div>Price Shown</div>
        </div>
        <div className="diary-product-image">
          <img src={diary} alt="" />
        </div>
      </section>
      <section className="diary-product-desc-section">
        <div className="diary-product-desc-image">
          <div className="diary-product-youtube">
            <iframe
            className="diary-youtube-responsiveness"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uuDnoVHf3XQ?si=1hU0bK3eixXkoyf5"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="diary-product-description-layout-chapter">
          <h1 className="diary-product-chapter-title">
            Your Health in your diary Lorem ipsum dolor sit amet.
          </h1>
          <div className="diary-content-explain">
            <h1>
              This is not just a diary, it&lsquo;s a guide to a better life.
              this gives you the basic knowledge about the food, lifestyle,
              exercise, superfoods etc. this will help you keep yourself on
              track. Each page has trackers where you can successfully monitor
              your progress. In the end you can note down your goals , visualize
              them and track yourself achieving them.
            </h1>
          </div>
        </div>
      </section>
      <section className="diary-product-reviews-layout">
        <h1 style={{ paddingBottom: "2%", fontWeight: "bold", color: "black" }}>
          What are the readers saying?
        </h1>
        <div className="diary-product-reviews-segment">
          <div className="diary-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="diary-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="diary-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="diary-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="diary-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
          <div className="diary-product-customer-review">
            <h2 style={{ fontWeight: "bold", color: "black" }}>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              perferendis at ullam accusantium suscipit. Voluptate beatae
              quibusdam tempora ex nesciunt?
            </p>
          </div>
        </div>
      </section>
      <section className="diary-ryan-note-layout">
        <div className="diary-ryan-note-image">
          <img src={ryanbook2} alt="" />
        </div>
        <div className="diary-ryan-note-layout1">
          <h1 className="diary-ryan-note-title">Note from Ryan Fernando</h1>
          <p className="diary-ryan-note-desc">
            The Wonders of Collagen Supplements for Skin, Hair, and Joint
            HealthCollagen, a fundamental protein for maintaining skin
            elasticity and firmness, decreases as we age, leading to wrinkles
            and sagging skin. Fortunately, collagen supplements can help promote
            natural collagen production, resulting in youthful, radiant skin.
            That&apos;s not all, as these supplements also offer other benefits
            such as improving bone and joint health, and promoting healthy hair,
            nails, and gut health. It&apos;s my go-to supplement for overall
            health and well-being.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export default RyanDiary;
