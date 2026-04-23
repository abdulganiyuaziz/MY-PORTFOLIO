import "./interests.css";

type InterestProps = {
  title: string;
  description: string;
};

const interests: InterestProps[] = [
  {
    title: "Teaching",
    description:
      "Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing.",
  },
  {
    title: "Music",
    description:
      "Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on.",
  },
  {
    title: "Competitive Gaming",
    description:
      "I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.",
  },
];

const Interests = () => {
  return (
    <section className="interests">
      {interests.map((item, index) => (
        <div className="interest-item" key={index}>
          <span className="dot" />
          <div className="interest-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Interests;
