
import CompanyOverview from '@/components/About/CompanyOverview'
import CoreValues from '@/components/About/CoreValues'
import MarqueeCards from '@/components/About/MarqueeCards'
import Carousel from '@/components/OurBusiness/CardCaurosal'
import InfoSection from '@/components/OurBusiness/NextSec'
import Quick from '@/components/OurBusiness/Quick'
import CustomerStories from '@/components/OurBusiness/Testi'
import WorkCulture from '@/components/OurBusiness/WorkCulturue'
import React from 'react'

const page = () => {
  return (
    <>
    <InfoSection/>
    <Quick/>
    <Carousel/>
    <WorkCulture/>
    {/* <CustomerStories/> */}
    </>
  )
}

export default page