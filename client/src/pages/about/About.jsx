import { useState } from "react";
import "./about.css";

function About() {
  const [topLeftContent, setTopLeftContent] = useState(
    <div>
      <h2 style={{ fontSize: "30px", position: "absolute" }}>
        Biologoy
        <hr style={{ width: "50%" }} />
      </h2>
      <p style={{ paddingTop: "50px", marginTop: "50px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad odit
        illum consequuntur cum dolores enim, nam libero earum expedita aut
        molestias ullam corrupti nostrum natus quos repellat incidunt optio
        aliquam deleniti qui obcaecati velit voluptate. Fugiat, itaque ipsa.
        Fugit, consequatur perspiciatis. Perferendis odit quia soluta iure,
        eaque possimus explicabo est saepe, veritatis qui similique, sint
        suscipit quidem. Perspiciatis qui voluptatibus repudiandae assumenda
        dolore natus illum quisquam dolor, eius minima, quae ipsum? Quaerat
        voluptates delectus accusantium, ratione totam excepturi? Animi
        explicabo molestias iste rerum totam cupiditate eligendi delectus atque
        commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tempora, rem. Iste, perspiciatis? Quam mollitia iste earum laboriosam,
        pariatur consequuntur ab. Accusamus eos, corrupti esse necessitatibus
        dignissimos voluptatum, repellendus odio architecto ipsum aspernatur
        natus minima, saepe sequi soluta tempora praesentium? Ipsa quo sequi,
        veniam eius deleniti vel nisi. Cum, expedita molestiae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad odit
        illum consequuntur cum dolores enim, nam libero earum expedita aut
        molestias ullam corrupti nostrum natus quos repellat incidunt optio
        aliquam deleniti qui obcaecati velit voluptate. Fugiat, itaque ipsa.
        Fugit, consequatur perspiciatis. Perferendis odit quia soluta iure,
        eaque possimus explicabo est saepe, veritatis qui similique, sint
        suscipit quidem. Perspiciatis qui voluptatibus repudiandae assumenda
        dolore natus illum quisquam dolor, eius minima, quae ipsum? Quaerat
        voluptates delectus accusantium, ratione totam excepturi? Animi
        explicabo molestias iste rerum totam cupiditate eligendi delectus atque
        commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tempora, rem. Iste, perspiciatis? Quam mollitia iste earum laboriosam,
        pariatur consequuntur ab. Accusamus eos, corrupti esse necessitatibus
        dignissimos voluptatum, repellendus odio architecto ipsum aspernatur
        natus minima, saepe sequi soluta tempora praesentium? Ipsa quo sequi,
        veniam eius deleniti vel nisi. Cum, expedita molestiae!
      </p>
    </div>
  );

  const [bottomRightContent, setBottomRightContent] = useState(
    <div>
      <h2 style={{ fontSize: "30px", position: "absolute" }}>
        Phiolosphy
        <hr style={{ width: "50%" }} />
      </h2>
      <p style={{ paddingTop: "50px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sequi
        atque ducimus amet provident ad officiis! Officia quibusdam unde
        quisquam explicabo animi amet molestias commodi minima ex minus,
        placeat, possimus voluptatibus deleniti voluptas ipsum illo voluptatum
        sequi iusto reiciendis facere perspiciatis eos iure! Sint vel eligendi
        incidunt cum ducimus suscipit sunt aperiam natus aliquam! Ea cum ad
        distinctio voluptate libero, eligendi cumque consequuntur debitis et
        corporis sint in minus nam minima ducimus possimus? Provident fugiat
        alias inventore repudiandae tempora vitae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad odit
        illum consequuntur cum dolores enim, nam libero earum expedita aut
        molestias ullam corrupti nostrum natus quos repellat incidunt optio
        aliquam deleniti qui obcaecati velit voluptate. Fugiat, itaque ipsa.
        Fugit, consequatur perspiciatis. Perferendis odit quia soluta iure,
        eaque possimus explicabo est saepe, veritatis qui similique, sint
        suscipit quidem. Perspiciatis qui voluptatibus repudiandae assumenda
        dolore natus illum quisquam dolor, eius minima, quae ipsum? Quaerat
        voluptates delectus accusantium, ratione totam excepturi? Animi
        explicabo molestias iste rerum totam cupiditate eligendi delectus atque
        commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tempora, rem. Iste, perspiciatis? Quam mollitia iste earum laboriosam,
        pariatur consequuntur ab. Accusamus eos, corrupti esse necessitatibus
        dignissimos voluptatum, repellendus odio architecto ipsum aspernatur
        natus minima, saepe sequi soluta tempora praesentium? Ipsa quo sequi,
        veniam eius deleniti vel nisi. Cum, expedita molestiae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad odit
        illum consequuntur cum dolores enim, nam libero earum expedita aut
        molestias ullam corrupti nostrum natus quos repellat incidunt optio
        aliquam deleniti qui obcaecati velit voluptate. Fugiat, itaque ipsa.
        Fugit, consequatur perspiciatis. Perferendis odit quia soluta iure,
        eaque possimus explicabo est saepe, veritatis qui similique, sint
        suscipit quidem. Perspiciatis qui voluptatibus repudiandae assumenda
        dolore natus illum quisquam dolor, eius minima, quae ipsum? Quaerat
        voluptates delectus accusantium, ratione totam excepturi? Animi
        explicabo molestias iste rerum totam cupiditate eligendi delectus atque
        commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tempora, rem. Iste, perspiciatis? Quam mollitia iste earum laboriosam,
        pariatur consequuntur ab. Accusamus eos, corrupti esse necessitatibus
        dignissimos voluptatum, repellendus odio architecto ipsum aspernatur
        natus minima, saepe sequi soluta tempora praesentium? Ipsa quo sequi,
        veniam eius deleniti vel nisi. Cum, expedita molestiae!
        
      </p>
    </div>
  );

  const handleClick = () => {
    // Swap content
    const temp = topLeftContent;
    setTopLeftContent(bottomRightContent);
    setBottomRightContent(temp);
  };

  return (
    <div className="body-class1">
      <div>
        <h1
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            fontSize: "25px",
          }}
        >
          ABOUT RYAN FERNANDO
        </h1>
        <hr style={{ width: "80%", margin: "auto" }} />
      </div>

      <div className="full-content">
        <div className="top-left-content">{topLeftContent}</div>
        <div className="bottom-right-content" onClick={handleClick}>
          {bottomRightContent}
        </div>
      </div>
    </div>
  );
}

export default About;
