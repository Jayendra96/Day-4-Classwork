import React from "react";
import imagea from "../../assets/a.jpg";
import imageb from "../../assets/b.jpg";
import imagec from "../../assets/c.jpg";

const Card = () => {
  const data = [
    {
      image: imagea,
      numbers: "2,500",
      desc: "enterprise organisation successfully launched",
    },
    {
      image: imageb,
      numbers: "45,000",
      desc: "enterprise user onboarded seamlessly",
    },
    {
      image: imagec,
      numbers: "200,000+",
      desc: "professional trained  on product and strategy ",
    },
  ];
  return (
    <div>
      <div className="card-container">
        {data.map((ele) => {
          return (
            <div key={ele.desc} className="card-element">
              <div className="card_upper">
                <img key={ele.desc} src={ele.image} alt="" />
                <p>{ele.numbers}</p>
              </div>
              <p className="card-desc">{ele.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
