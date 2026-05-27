import { DataTable } from '@/components/admin/DataTable'
import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col items-center'>
      <DataTable 
      heading='Archived Products'
      description='List of all archived products'
      />
    </section>
  )
}

export default page