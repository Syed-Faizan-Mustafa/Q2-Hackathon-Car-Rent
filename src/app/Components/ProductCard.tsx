import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/Components/ui/card'

const ProductCard = () => {
    return (
        
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
                {/* card header */}
                <div className='flex flex-col space-y-1.5 p-6'>
                    {/* card title */}
                    <div className='text-2xl font-semibold leading-none tracking-tight w-full flex items-center justify-between'>
                    kjkkjkjkjkj{" "}
                        <Image src={"/heart.png"} alt='' width={20} height={20} />
                    </div>
                    {/* card description */}
                    <div className='text-sm text-muted-foreground'>
                        oipipoipo
                    </div>
                </div>
                {/* Card content */}
                <div className='p-6 pt-0 w-full flex flex-col items-center justify-center gap-4'>
                    <Image src={"/car.png"} alt='' width={220} height={68} />
                    <Image
                        src={"/Spesification.png"}
                        alt=''
                        width={256}
                        height={24}
                    />
                </div>
                {/* card footer */}
                <div className="flex items-center p-6 pt-0 w-full justify-between">

                    <p>
                        $99.00/<span className='text-gray-500'>day</span>
                    </p>
                    <button className='bg-[#3563e9] p-2 text-white rounded-md'>
                        Rent Now
                    </button>

                </div>
            </div>
       
    )
}

export default ProductCard
