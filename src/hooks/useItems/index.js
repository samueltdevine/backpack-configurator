import {useMemo} from "react";
import uuid from "utils/uuid";
//images
import MagmaFifteen from "images/Magma_15.png";
import GroundbreakerThirty from "images/Groundbreaker_30.png";
import TrailbreakSixty from 'images/REI_Trailbreak_60.png'
import TraverseThirtyFive from 'images/Traverse_35.png'
import TraverseSeventy from 'images/Traverse_70.png'


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
      ],
      items: [
        {
          type: "sleepingBag",
          name: "REI Co-op Groundbreaker 30 Sleeping Bag",
          weight: "3 lbs. 10 oz.",
          volume: 1525.59,
          image: GroundbreakerThirty,
          type: "synthetic",
        },
        {
          type: "sleepingBag",
          name: "REI Co-op Magma 15 Sleeping Bag",
          weight: "1 lb. 12.2 oz.",
          volume: 665.1588,
          image: MagmaFifteen,
          type: "down",
        },
      ].map((item) => ({ ...item, id: uuid() })),
    }),
    []
  );

export default useItems;
