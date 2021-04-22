import ColourSection from "../components/ColourSection";
import OH from "../assets/00_OH-blue.jpg";
import VH from "../assets/00_VH-orange02.jpg";
import DH from "../assets/00_DH-red.jpg";
import GA from "../assets/00_GA-green.jpg";
import thermOH from "../assets/20_therm-OH.png";
import thermVH from "../assets/21_therm-VH.png";
import thermDH from "../assets/22_therm-DH.png";
import thermGA from "../assets/23_therm-GA.png";
import WhiteSection from "../components/WhiteSection";
import wsClasses from "./WhiteSection.module.css";
import burrito from "../assets/30_burrito.jpg";
import fresh from "../assets/31_fresh.jpg";
import brunch from "../assets/32_brunch.jpg";
import tinfoil from "../assets/33_tinfoil.jpg";
import dwainmel from "../assets/34_dwainmel.jpg";
import vegplate from "../assets/35_vegplate.jpg";

const Home = () => {
  return (
    <div>
      <ColourSection
        align='left'
        background={OH}
        heading='Hot Sauce'
        textA="Something's been brewing in East London. No, not a craft beer. It's a Hot Sauce, courtesy of three lads, and a dare that one of them could make a sauce so hot Hothead Dwain couldn't eat it. It wasn't that hot, but it was that delicious."
        textB="Pepper Kitchen proudly presents its full flavour Original Hot Sauce. Try it if you dare. It's not that hot!"
        heatScale={thermOH}
        parallaxStrength='200'
      />
      <WhiteSection>
        <img className={wsClasses.element} src={burrito} alt='burrito' />
        <div className={wsClasses.element}>
          <h3 className={wsClasses.quote}>
            "Pepper Kitchen Hot Sauce #goeswith steak burrito"
          </h3>
          <h3 className={wsClasses.quoteRef}>- Lawrence</h3>
        </div>
        <div className={wsClasses.element}>
          <p className={wsClasses.bigInfo}>100% Natural</p>
          <p className={wsClasses.smlInfo}>
            All Pepper Kitchen products are made from natural and fresh
            ingredients. We experimented with frozen, but it was a unanimous
            decision. Fresh tasted better, and we Put Flavour First.
          </p>
        </div>
        <img
          className={wsClasses.element}
          src={fresh}
          alt='fresh ingredients'
        />
      </WhiteSection>
      <ColourSection
        align='right'
        background={VH}
        heading='Very Hot Sauce'
        textA="So Hothead Dwain tried PK Original Hot Sauce, and it wasn't hot enough. Our Chef doubled down. More scotch bonnet peppers and some Caribbean magin later and presto!"
        textB="Very Hot Sauce. With the same delicious flavour and all fresh ingredients behind it. It still wasn't hot enough for our spice-loving chum. Fine. But it might be for you."
        heatScale={thermVH}
        parallaxStrength='200'
      />
      <WhiteSection>
        <div className={wsClasses.element}>
          <h3 className={wsClasses.quote}>
            "I think the Very Hot Sauce #goeswith eggs and avocado really well"
          </h3>
          <h3 className={wsClasses.quoteRef}>- Erica</h3>
        </div>
        <img className={wsClasses.element} src={brunch} alt='brunch plate' />
        <img
          className={wsClasses.element}
          src={tinfoil}
          alt='tin foil burrito wrappers'
        />
        <div className={wsClasses.element}>
          <p className={wsClasses.bigInfo}>Handmade in London</p>
          <p className={wsClasses.smlInfo}>
            All Pepper Kitchen products are handmade in East London. And if any
            sauce doesn't meet our standards, we don't sell it. Nothing is left
            to chance. You can be sure our sauces always have our signature
            flavour and are made with the same care.
          </p>
        </div>
      </WhiteSection>
      <ColourSection
        align='right'
        background={DH}
        heading='Dangerously Hot Sauce'
        textA="So Hothead Dwain tried PK Original Hot Sauce, and it wasn't hot enough. Our Chef doubled down. More scotch bonnet peppers and some Caribbean magin later and presto!"
        textB="Very Hot Sauce. With the same delicious flavour and all fresh ingredients behind it. It still wasn't hot enough for our spice-loving chum. Fine. But it might be for you."
        heatScale={thermDH}
        parallaxStrength='200'
      />
      <WhiteSection>
        <div className={wsClasses.element}>
          <h3 className={wsClasses.quote}>
            "Sometimes I just drink it straight out of the bottle. Lol..."
          </h3>
          <h3 className={wsClasses.quoteRef}>- Hothead Dwain</h3>
        </div>
        <img
          className={wsClasses.element}
          src={dwainmel}
          alt='dangerously hot sauce'
        />
        <img
          className={wsClasses.element}
          src={vegplate}
          alt='veggie platter'
        />
        <div className={wsClasses.element}>
          <p className={wsClasses.bigInfo}>Suitable for Vegans</p>
          <p className={wsClasses.smlInfo}>
            We made a conscious decision to exclude animal products from our
            recipe. All Pepper Kitchen products are 100% vegan friendly, which
            means: no meat, no dairy and absolutely no honey!
          </p>
        </div>
      </WhiteSection>
      <ColourSection
        align='left'
        background={GA}
        heading='Garlic Sauce'
        textA="A dare became a crowd-pleaser. But not everyone's like Hothead Dwain. Some like it mild. Our big-hearted Chef figured he should share his awesome sauce with them too. Providing they like garlic, and who doesn't?"
        textB="PK Garlic Sauce is a lighter take on the original Hot Sauce. It won't burn your tongue, but it'll tingle your taste buds with all the hallmarks of our signature flavour."
        heatScale={thermGA}
        parallaxStrength='200'
      />
    </div>
  );
};

export default Home;
