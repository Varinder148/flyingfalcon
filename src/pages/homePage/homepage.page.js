import "./homepage.style.scss";

const Homepage = ({ history }) => (
  <div className="homepage">
    <p>
      <span>In the distant distant galaxy of Tara B.</span>
      <span>
        After the recent war with neighbouring planet Falicornia, King Shan has
        exiled the Queen of Falicornia for 15 years.
      </span>
      Queen Al Falcone is now in hiding. But if King Shan can find her before
      the years are up, she will be exiled for another 15 years…
    </p>
    <p>
      King Shan has received intelligence that Al Falcone is in hiding in one of
      these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin and Pingasor.
      However he has limited resources at his disposal and can send his army to
      only 4 of these planets.
    </p>
    <p>
      <span>Now pick a side, Traveller.</span>
      <span className="link marginTop" onClick={() => history.push("game")}>
        Find the Queen, and put her before the rotten King
      </span>
      or
      <span
        className="link"
        onClick={() => {
          history.push("goodbye");
        }}
      >
        Let the Queen live happily in the hiding
      </span>
    </p>
  </div>
);

export default Homepage;
