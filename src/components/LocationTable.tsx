import { locationLabelMap } from "../types/location";
import { sortObjectArrayByKey } from "../utils/sortObjectArrayByKey";
import { useLocations } from "../utils/useLocations";
import SortableTable from "./SortableTable";

const LocationTable = () => {
    const [locationList, setLocationList] = useLocations(20);

    const setSortedLocationList = (keyToSortBy:string, ascending: boolean = true) => {
      const sortedLocationList = sortObjectArrayByKey(locationList, keyToSortBy, ascending);
      setLocationList(sortedLocationList);
    }
  
    return (
        <SortableTable tableData={locationList} rowDataMap={locationLabelMap} sortingCallback={setSortedLocationList}></SortableTable> 
    );
};

export default LocationTable;