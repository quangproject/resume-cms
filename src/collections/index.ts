import OverViewCollection from "./Overviews";
import ModelCollection from "./Models";
import AssetCollection from "./Assets";

const collections =
  OverViewCollection.concat(ModelCollection).concat(AssetCollection);

export default collections;
