import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <div>
    <Grid className='bg-black text-white text-center mt-10'
    container
    sx={{bgcolor:"black",color:"white",py:3}}>
  <Grid item xs={12}sm={6} md={3}>
    <Typography className='pd-5' variant='h6'>Company</Typography>
    <div><Button className='pd-5' variant='h6'>About</Button></div>
    <div>
    <Button className='pd-5' variant='h6'>Blog</Button>
    </div>
    <div>
    <Button className='pd-5' variant='h6'>press</Button>
    </div>
    <div>
    <Button className='pd-5' variant='h6'>Jobs</Button>
    </div>
    <div>
    <Button className='pd-5' variant='h6'>pratners</Button>
    </div>
  </Grid>
  <Grid item xs={12}sm={6} md={3}>
    <Typography className='pd-5' variant='h6'>Solution</Typography>
    <div><Button className='pd-5' variant='h6'>Marketing</Button></div>
    <div>
    <Button className='pd-5' variant='h6'>Analytics</Button>
    </div>
    <div>
    <Button className='pd-5' variant='h6'>Commerce</Button>
    </div>
    <div>
    <Button className='pd-5' variant='h6'>Insights</Button>
    </div>
    <div>
    <Button className='pd-5' variant='h6'>Support</Button>
    </div>
  </Grid><Grid item xs={12}sm={6} md={3}>
    <Typography className='pd-5' variant='h6'>Documentation</Typography>
    <div><Button className='pd-5' variant='h6'>Guides</Button></div>
    <div>
    <Button className='pd-5' variant='h6'>API Status</Button>
    </div>
    
  </Grid>
  <Grid item xs={12}sm={6} md={3}>
    <Typography className='pd-5' variant='h6'>Legal</Typography>
    <div><Button className='pd-5' variant='h6'>Claim</Button></div>
    <div>
    <Button className='pd-5' variant='h6'>Privacy</Button>
    </div>
    <div>
    <Button className='pd-5' variant='h6'>Terms</Button>
    </div>
    
  </Grid>
<Grid className='pt-20'item xs={12}>
    <Typography variant='body2'component="p" align='center'>
        &copy; 2023 My Company.All rights reserved.
    </Typography>
    <Typography variant='body2'component="p" align='center'>
        Made with love by Me.
    </Typography>
    <Typography variant='body2'component="p" align='center'>
      Icon made by {''}
      <Link href="https://www.freepik.com"color="inherit"underline='always'>
        Freepik
       
      </Link>{ ' '}
      from{ ' '}
      <Link href="https://www.flaticon.com/"color="inherit"underline='always'>
      www.flaticon.com
      </Link>
    </Typography>
    

</Grid>
    </Grid>


    </div>
  )
}