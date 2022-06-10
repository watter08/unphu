import { useState } from "react";

function useFilter() {

  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => setShowFilter(true);

  const handleCloseFilter = () => setShowFilter(false);
  
  const handleToogleFilter = () => setShowFilter((show) => !show);

  return {
      showFilter, 
      handleShowFilter, 
      handleCloseFilter, 
      handleToogleFilter,
      setShowFilter,
  };
}

export default useFilter;
