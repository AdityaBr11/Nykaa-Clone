import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
const Skelton = () => {
  return (
    <div className='w-[269px] h-[500px] bg-slate-400 rounded-xl'>
      <Skeleton startColor='pink.400' endColor='orange.400' height='300px'width='100%' />
      <Skeleton width='95%' height='40px' />
      <SkeletonText height='48px' width='90%' noOfLines={5} spacing='3' />
       <Skeleton height='62px' width='100%' mt='12' />
    </div>
  )
}

export default Skelton
