import { DataTable } from '@/components/admin/DataTable'

const page = () => {
  return (
    <section className='flex flex-col items-center'>
      <DataTable 
      heading='All Products'
      description='Manage your product inventory and view all available items.'
      />
    </section>
  )
}

export default page