'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { usePathname } from 'next/navigation'

const steps = [
  {
    name: 'بررسی سبد خرید',
    address: '/cart',
  },
  {
    name: 'انتخاب آدرس',
    address: '/cart/address',
  },
  {
    name: 'انتخاب روش پرداخت',
    address: '/cart/payment',
  },
  {
    name: 'پایان',
    address: '/cart/payment-result',
  },
]
export default function CartStepper() {
  const pathname = usePathname()
  let activeStep = 0;
  for(let i = 0; i < steps.length; i++){
    if(steps[i].address == pathname){
      activeStep = i;
    }
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step,index)=> {
          return <Step>
            <StepLabel>
              {step.name}
            </StepLabel>
          </Step>
        })}
      </Stepper>
    </Box>
  );
}
