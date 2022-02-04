import TertiaryBlock from "../components/tertiaryblock/tertiaryblock";
import Tile from "../data/tile.json";

export default function TertiaryBlockContainer() {
  return (
    <section>
      <h1>Tertiary Content Block</h1>
      <div className="tertiaryBlockTest">
        <TertiaryBlock
          color={"primaryStyle"}
          secondaryBool={true}
          preHeader={Tile.tile1.preHeader}
          mainHeader={Tile.tile1.mainHeader}
          copy={Tile.tile1.copy}
          linkText={Tile.tile1.linkText}
        />
        <TertiaryBlock
          color={"lightStyle"}
          secondaryBool={false}
          preHeader={Tile.tile2.preHeader}
          mainHeader={Tile.tile2.mainHeader}
          copy={Tile.tile2.copy}
          linkText={Tile.tile2.linkText}
        />
        <TertiaryBlock
          color={"darkStyle"}
          preHeader={Tile.tile3.preHeader}
          mainHeader={Tile.tile3.mainHeader}
          copy={Tile.tile3.copy}
          linkText={Tile.tile3.linkText}
        />
      </div>
    </section>
  );
}
