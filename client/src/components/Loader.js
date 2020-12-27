import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import {Grid} from '@material-ui/core'

const Loader = () => 
  <div className='full-page-loader'>
  <Grid container lg={12} md={12}  justify="center" >
  <Grid item lg={5} md={5} justify="center" >
  <ClipLoader
      sizeUnit={"px"}
      size={300}
      color={'rgba(244, 0, 117, 0.42)'}
      loading={true}
      width={40}
    />
  </Grid>
  </Grid>
  </div> 

export default Loader