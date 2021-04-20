import ColourSection from "../components/ColourSection";
import OH from "../assets/00_OH-blue.jpg";
import VH from "../assets/00_VH-orange02.jpg";
import thermOH from "../assets/20_therm-OH.png";
import thermVH from "../assets/21_therm-VH.png";
import WhiteSection from "../components/WhiteSection";

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
      <WhiteSection></WhiteSection>
      <ColourSection
        align='right'
        background={VH}
        heading='Very Hot Sauce'
        textA="So Hothead Dwain tried PK Original Hot Sauce, and it wasn't hot enough. Our Chef doubled down. More scotch bonnet peppers and some Caribbean magin later and presto!"
        textB="Very Hot Sauce. With the same delicious flavour and all fresh ingredients behind it. It still wasn't hot enough for our spice-loving chum. Fine. But it might be for you."
        heatScale={thermVH}
        parallaxStrength='200'
      />
      <WhiteSection></WhiteSection>
    </div>
  );
};

export default Home;
