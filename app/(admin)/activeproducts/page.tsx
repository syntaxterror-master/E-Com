import { DataTable } from '@/components/admin/DataTable'
import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col items-center'>
      <DataTable 
      heading='Active Products'
      description='List of all active products'
      />
    </section>
  )
}

export default page