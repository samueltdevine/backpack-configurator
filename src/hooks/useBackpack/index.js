import {useMemo, useEffect} from "react";
import {
  addItemToBackpack,
  removeItemFromBackpack,
  selectBackpack,
} from "./reducer";
import {useDispatch, useSelector} from "react-redux"
import useItems from "hooks/useItems"

const useBackpack = () => {
  const dispatch = useDispatch();
  const actions = useMemo(
    () => ({
      addItemToBackpack: (item) => {
        dispatch(addItemToBackpack(item));
      },
      removeItemFromBackpack: (itemId) => {
        dispatch(removeItemFromBackpack(itemId));
      },
      selectBackpack: (backpack) => {
        dispatch(selectBackpack(backpack));
      },
    }),
    [dispatch]
  );
  const {backpacks} = useItems();
  const backpack = useSelector(store => store.backpack.backpack);
  useEffect(() => {
      if (backpack.name === "") {
          actions.selectBackpack(backpacks[0]);
      }
  }, [actions, backpack.name, backpacks]);
  const itemsInBackpack = useSelector(store => store.backpack.items);
  const usedVolume = useMemo(() => itemsInBackpack.reduce((accumulator, item) => accumulator + item.volume, 0), [itemsInBackpack])
  const info = useMemo(() => ({volumeRemaining: backpack.capacity - usedVolume, usedVolume}), [backpack.capacity, usedVolume])
  return {actions, backpack, info, itemsInBackpack};
};

export default useBackpack;
