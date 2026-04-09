import "./Testimonial.css";


import bgImg from "../../assets/HOME/sir somed.jfif";
import Truedemo from "../../assets/HOME/Lion.jpeg";
import loadGif from "../../assets/HOME/st jhon.jfif";
import Title from "../../components/Heading/Heading";

interface RecommendationProps {
  text: string;
  name: string;
  title: string;
  image: string;
}

const RecommendationCard = ({ text, name, title, image }: RecommendationProps) => (
  <div className="recommendation-card" id="Testimonial">
    <p className="recommendation-text">
      <span className="quote">❝</span>
      {text}
      <span className="quote">❞</span>
    </p>

    <a href="#" className="see-more">See more</a>
    <div className="rating">★★★★☆</div>

    <div className="person-info">
      <img src={image} alt={name} className="person-img" />
      <div>
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </div>
  </div>
);

const RecommendationSection = () => {
  const recommendations = [
    {
      text: "I am writing to highly recommend Abdul Ganiyu Abdul Aziz for any future professional opportunities. I had the pleasure of working with him as a student at Microverse for collaborative projects, during which time he consistently impressed me with his knowledge, work ethic, and positive attitude.",
      name: "MrIddrisu Abdul-Samed",
      title: "ST. John Ambulance",
      image: bgImg,
    },
    {
      text: "I had the pleasure of working with Abdul Ganiyu on several projects, and I must say that he played a vital role in ensuring our success in each project. Abdul Ganiyu is an exceptional communicator and has a keen eye for detail.",
      name: " Mubarik Abdul Kadiri"       ,
      title: "True Demo FC",
      image: Truedemo,
    },
    {
text: "I am writing to highly recommend Abdul Ganiyu Abdul Aziz for any future professional opportunities. I had the pleasure of working with him as a student at Microverse for collaborative projects, during which time he consistently impressed me with his knowledge, work ethic, and positive attitude.",  
      name: "Chief Executive Officer Dr. Kwame Apedzi",
      title: "CEO Of St. John Ambulance Ghana",
      image: loadGif,
    },
  ];

  return (
    <section>

                <Title title="Recommendation" subtitle="What My Superiors Says About Me" />
    <div className="recommendation-section">



      <div className="recommendation-container">
        {recommendations.map((rec, index) => (
          <RecommendationCard key={index} {...rec} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default RecommendationSection;
