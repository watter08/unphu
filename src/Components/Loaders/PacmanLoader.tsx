import { useEffect } from "react";
import $ from 'jquery'

const PreLoader = () => {

  useEffect(() => {
    const timer = setTimeout(() => $('#js-preloader').addClass('loaded'), 4000);
    return () => clearTimeout(timer);
  }, []);



  return(
    <div id="js-preloader" className="js-preloader">
      <div className='pac-man' />
  </div>
  )
}




export default PreLoader;