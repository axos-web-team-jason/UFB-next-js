import SecondaryBlock from "../components/secondaryblock/secondaryblock";
import Tile from "../data/tile.json";

export default function SecondaryBlockContainer() {
  return (
    <section>
      <h1>Secondary Content Block</h1>
      <div className="secondaryBlockTest">
        <SecondaryBlock
          color={Tile.tile1.color}
          preHeader={Tile.tile1.preHeader}
          mainHeader={Tile.tile1.mainHeader}
          copy={Tile.tile1.copy}
          linkText={Tile.tile1.linkText}
          buttonText={Tile.tile1.buttonText}
        />
        <SecondaryBlock
          color={Tile.tile2.color}
          preHeader={Tile.tile2.preHeader}
          mainHeader={Tile.tile2.mainHeader}
          copy={Tile.tile2.copy}
          linkText={Tile.tile2.linkText}
          buttonText={Tile.tile2.buttonText}
        />
        <SecondaryBlock
          color={Tile.tile3.color}
          preHeader={Tile.tile3.preHeader}
          mainHeader={Tile.tile3.mainHeader}
          copy={Tile.tile3.copy}
          linkText={Tile.tile3.linkText}
          buttonText={Tile.tile3.buttonText}
        />
      </div>
    </section>
  );
}
