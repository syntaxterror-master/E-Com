import { ShieldCheck, Headset, Van } from "lucide-react"

const NewArrival = () => {
  return (
      <section className="my-30">

      <div className="flex items-center gap-4">
        <div className="bg-primary h-10 w-5 rounded-sm"/>
        <h4 className="text-primary">Featured</h4>
      </div>

      <h2 className="mt-5">
      New Arrival
      </h2>

    <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
        <div className='bg-card-foreground md:row-span-24 md:col-span-6'>1</div>
        <div className='bg-card-foreground md:row-span-14 md:col-span-6'>2</div>
        <div className='bg-card-foreground md:row-span-10 md:col-span-3'>3</div>
        <div className='bg-card-foreground md:row-span-10 md:col-span-3'>4</div>
    </div>


    <div className='flex flex-col md:flex-row md:gap-32 justify-center items-center text-center gap-16 mt-30'>

      <div className="flex flex-col justify-center items-center text-center">
        <div className="bg-accent-foreground p-2 mb-2 rounded-full text-primary-foreground">
          <Van className="bg-card-foreground p-2 rounded-full" size={50} strokeWidth={1.5} />
        </div>
        <h5 className="font-bold mb-1">FREE AND FAST DELIVERY</h5>
        <p>Free delivery for all orders over $140</p>
      </div>

  
      <div className="flex flex-col justify-center items-center text-center">
        <div className="bg-accent-foreground p-2 mb-2 rounded-full text-primary-foreground">
          <Headset className="bg-card-foreground p-2 rounded-full" size={50} strokeWidth={1.5} />
        </div>
        <h5 className="font-bold mb-1">24/7 CUSTOMER SERVICE</h5>
        <p>Friendly 24/7 customer support</p>
      </div>


      <div className="flex flex-col justify-center items-center text-center">
        <div className="bg-accent-foreground p-2 mb-2 rounded-full text-primary-foreground">
          <ShieldCheck className="bg-card-foreground p-2 rounded-full" size={50} strokeWidth={1.5} />
        </div>
        <h5 className="font-bold mb-1">MONEY BACK GUARANTEE</h5>
        <p>We reurn money within 30 days</p>
      </div>



    </div>


    </section>
  )
}

export default NewArrival