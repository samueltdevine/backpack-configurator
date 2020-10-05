import {useMemo} from "react";
import uuid from "utils/uuid";
//images
import MagmaFifteen from "images/Magma_15.png";
import GroundbreakerThirty from "images/Groundbreaker_30.png";
import TrailbreakSixty from 'images/REI_Trailbreak_60.png'
import TraverseThirtyFive from 'images/Traverse_35.png'
import TraverseSeventy from 'images/Traverse_70.png'
import RidgeRest from 'images/Therm-a-Rest_RidgeRest_SoLite.png'
import RidgeRestExternal from 'images/Therm-a-Rest_RidgeRest_SoLite_external.png'
import NemoTensor from 'images/NEMO_Tensor_Insulated_Sleeping_Pad.png'

const useItems = () =>
  useMemo(
    () => ({
      backpacks: [
        {
          name: "REI Co-op Trailbreak 60 Pack - Men's",
          weight: "3 lbs 13 oz",
          capacity: 3661,
          image: TrailbreakSixty,
        },
        {
          name: "REI Co-op Traverse 35 Pack - Men's",
          weight: "3 lbs 2 oz",
          capacity: 2135,
          image: TraverseThirtyFive,
        },
        {
          name: "REI Co-op Traverse 70 Pack - Men's",
          weight: "3 lbs 2 oz",
          capacity: 4272,
          image: TraverseSeventy,
        },
      ].map((item) => ({ ...item, id: uuid() })),
      items: [
        {
          type: "sleepingBag",
          name: "REI Co-op Groundbreaker 30 Sleeping Bag",
          weight: "3 lbs. 10 oz.",
          volume: 1525.59,
          image: GroundbreakerThirty,
          style: "synthetic",
          externalStorage: false
        },
        {
          type: "sleepingBag",
          name: "REI Co-op Magma 15 Sleeping Bag",
          weight: "1 lb. 12.2 oz.",
          volume: 665.1588,
          image: MagmaFifteen,
          style: "down",
          externalStorage: false

        },
        {
          type: "sleepingPad",
          name: "Nemo Tensor Insulated Sleeping Pad",
          weight: "15 oz.",
          volume: 226.19,
          image: NemoTensor,
          style: "air",
          externalStorage: false
        },
        {
          type: "sleepingPad",
          name: "Therm-a-Rest RidgeRest SOLite Sleeping Pad",
          weight: "15 oz.",
          volume: 0.0,
          image: RidgeRest,
          style: "foam",
          externalStorage: true,
          externalImage: RidgeRestExternal
        }
      ].map((item) => ({ ...item, id: uuid() })),
    }),
    []
  );

export default useItems;
