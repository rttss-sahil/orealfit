import product689 from "../json/categories/alaska.json";
import product618 from "../json/categories/amino.json";
import product622 from "../json/categories/arginine.json";
import product619 from "../json/categories/bcaa-intra-workout.json";
import product623 from "../json/categories/beta-analine.json";
import product688 from "../json/categories/betancourt.json";
import product627 from "../json/categories/body-essentials.json";
import product188 from "../json/categories/health-food-and-drinks.json";
import product612 from "../json/categories/bsn.json";
import product686 from "../json/categories/caesin-protein.json";
import product637 from "../json/categories/carbo-force.json";
import product690 from "../json/categories/cellucor.json";
import product624 from "../json/categories/citruline.json";
import product641 from "../json/categories/cla.json";
import product625 from "../json/categories/creatine.json";
import product587 from "../json/categories/dymatize.json";
import product620 from "../json/categories/eaa.json";
import product692 from "../json/categories/fa-core-series.json";
import product583 from "../json/categories/family-nutrition.json";
import product642 from "../json/categories/fat-burners.json";
import product691 from "../json/categories/finaflex.json";
import product628 from "../json/categories/fish-oil.json";
import product681 from "../json/categories/gainer.json";
import product694 from "../json/categories/gaspari.json";
import product693 from "../json/categories/gat.json";
import product672 from "../json/categories/glutamine.json";
import product589 from "../json/categories/gnc.json";
import product615 from "../json/categories/hydrolyzed-proteins.json";
import product568 from "../json/categories/minerals.json";
import product696 from "../json/categories/inner-armour.json";
import product697 from "../json/categories/insane-labz.json";
import product617 from "../json/categories/intra-workout.json";
import product695 from "../json/categories/isopure.json";
import product722 from "../json/categories/kevin-levrone.json";
import product653 from "../json/categories/l-arginine.json";
import product643 from "../json/categories/l-carnitine.json";
import product698 from "../json/categories/labrada.json";
import product638 from "../json/categories/lean-gainers.json";
import product631 from "../json/categories/leucine.json";
import product632 from "../json/categories/liver-detox.json";
import product636 from "../json/categories/mass-gainers.json";
import product682 from "../json/categories/membership-plans.json";
import product699 from "../json/categories/mhp.json";
import product633 from "../json/categories/milk-thistle.json";
import product629 from "../json/categories/multi-vitamins.json";
import product593 from "../json/categories/musclepharm.json";
import product590 from "../json/categories/muscletech.json";
import product597 from "../json/categories/my-protein.json";
import product598 from "../json/categories/my-protein-health-food-and-drinks.json";
import product700 from "../json/categories/natrol.json";
import product720 from "../json/categories/need.json";
import product701 from "../json/categories/now-foods.json";
import product709 from "../json/categories/nueherbs.json";
import product702 from "../json/categories/nutrex-research.json";
import product630 from "../json/categories/omega-3.json";
import product725 from "../json/categories/orealfit-shakers.json";
import product621 from "../json/categories/pre-workout.json";
import product558 from "../json/categories/pre-intra-workout.json";
import product705 from "../json/categories/primaforce.json";
import product703 from "../json/categories/prolab.json";
import product704 from "../json/categories/prosupps.json";
import product566 from "../json/categories/protein.json";
import product601 from "../json/categories/pure-nutrition.json";
import product616 from "../json/categories/raw-whey-proteins.json";
import product721 from "../json/categories/reload-supps.json";
import product588 from "../json/categories/ronnie-coleman.json";
import product602 from "../json/categories/rsp.json";
import product706 from "../json/categories/rule-1.json";
import product707 from "../json/categories/san.json";
import product708 from "../json/categories/scivation.json";
import product634 from "../json/categories/test-booster.json";
import product591 from "../json/categories/ultimate-nutrition.json";
import product592 from "../json/categories/universal-nutrition.json";
import product639 from "../json/categories/weight-gainers.json";
import product640 from "../json/categories/weight-loss-essentials.json";
import product557 from "../json/categories/kretein.json";
import product582 from "../json/categories/wellness-vitamins.json";
import product687 from "../json/categories/whey-concentrate.json";
import product613 from "../json/categories/whey-proteins.json";
import product614 from "../json/categories/whey-proteins-isolate.json";
import product635 from "../json/categories/zma.json";

const products = {
  product689,
  product618,
  product622,
  product619,
  product623,
  product688,
  product627,
  product188,
  product612,
  product686,
  product637,
  product690,
  product624,
  product641,
  product625,
  product587,
  product620,
  product692,
  product583,
  product642,
  product691,
  product628,
  product681,
  product694,
  product693,
  product672,
  product589,
  product615,
  product568,
  product696,
  product697,
  product617,
  product695,
  product722,
  product653,
  product643,
  product698,
  product638,
  product631,
  product632,
  product636,
  product682,
  product699,
  product633,
  product629,
  product593,
  product590,
  product597,
  product598,
  product700,
  product720,
  product701,
  product709,
  product702,
  product630,
  product725,
  product621,
  product558,
  product705,
  product703,
  product704,
  product566,
  product601,
  product616,
  product721,
  product588,
  product602,
  product706,
  product707,
  product708,
  product634,
  product591,
  product592,
  product639,
  product640,
  product557,
  product582,
  product687,
  product613,
  product614,
  product635,
};

export const getPostData = (id) => JSON.stringify(products.product188);

export function getAllPostIds() {
  return [
    {
      params: {
        id: "alaska",
      },
    },
  ];
}
