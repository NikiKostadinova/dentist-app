import { Button } from 'flowbite-react'
import pic1 from '../assets/images/pic1.jpg'

export default function Home() {
  return (
    <div className="bg-[#f7fafa] h-screen bg-cover bg-right flex justify-start items-center ">
      <div className='absolute top-52 ml-16 mt-0  w-[576px] '>
      <p className='line-clamp-3 text-[#484849] text-5xl font-serif p-2'>Healthy Smiles for the Whole Family</p>
      <Button size='xl' pill className='bg-[#63918b] mt-5 ml-4 '>Book Appointment</Button>
      <p className='mt-3 ml-8'>or Call +359988819609</p>

      </div>
      <div className="absolute top-0 right-16 bottom-24 r bg-[#a3bbbb] rounded-bl-full rounded-br-full w-[576px] " style={{ zIndex: 0 }}>
        <div className="flex items-end justify-center w-full h-full" 
         style={{
            paddingBottom: '20px', // Adds spacing from the bottom
          }}>
          <img src={pic1} alt="DentistPic"  className="rounded-full object-cover"
            style={{
              width: '400px', // Equal width and height to make it square
            height: '400px',
            borderRadius: '50%', // Ensures circular shape
            overflow: 'hidden', // Ensures image stays within the circle
            margin: '20px auto', // Adds spacing from the top
            }}/>
        </div>
      </div>

    </div>
  )
}
