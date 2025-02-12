
import pic1 from '../assets/images/pic1.jpg';

export default function HomeMirrored() {
  return (
    <div className="h-screen bg-[#f7fafa] bg-cover bg-right flex items-stretch justify-stretch ">
      {/* Text and Button Div */}
      <div
        className="relative w-[576px] text-center "
        style={{ zIndex: 1 }}
      >
        <p className="line-clamp-3 text-[#484849] text-center mt-24 ml-44 text-5xl font-serif p-2">
          Avout Us
        </p>
        <p className='text-[#484849] text-center mt-24 ml-44 text-xl font-serif p-2'>Passionate about creating healthy, beautiful smiles, I provide personalized and comfortable dental care. With expertise in [general/cosmetic/restorative dentistry], I focus on preventive care and patient education to ensure lifelong oral health. My goal is to make every visit a positive experience.

          Looking forward to helping you achieve your best smile!</p>

      </div>

      {/* Image Div */}
      <div
        className="relative flex justify-self-end self-end left-72 bg-[#a3bbbb] rounded-tl-full rounded-tr-full w-[576px] "
        style={{
          height: '600px',
        }}
      >
        <div className="flex items-end justify-center w-full h-full"
          style={{
            paddingBottom: '140px', // Adds spacing from the bottom
          }}>
          <img src={pic1} alt="DentistPic" className="rounded-full object-cover"
            style={{
              width: '400px', // Equal width and height to make it square
              height: '400px',
              borderRadius: '50%', // Ensures circular shape
              overflow: 'hidden', // Ensures image stays within the circle
              margin: '20px auto', // Adds spacing from the top
            }} />
        </div>
      </div>
    </div>


  );
}
