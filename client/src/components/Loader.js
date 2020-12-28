import React from 'react'
// import HashLoader from 'react-spinners/HashLoader'
import BeatLoader from 'react-spinners/BeatLoader'


const Loader = () => 
  <div className='full-page-loader' style={{alignSelf: 'center'}}>
  {/* <HashLoader
      sizeUnit={"px"}
      size={70}
      color={'rgba(244, 0, 117, 0.42)'}
      loading={true}
    /> */}
    <BeatLoader 
    size={70}
    color={'rgba(244, 0, 117, 0.42)'}
    laoading={true} />
  </div> 

export default Loader;