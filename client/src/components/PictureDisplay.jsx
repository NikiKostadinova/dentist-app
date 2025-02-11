
import pic1 from '../assets/images/pic1.jpg'


export default function PictureDisplay() {
    return (
      <div>
        
        <div
           className="relative bg-[#a3bbbb] rounded-bl-full rounded-br-full"
           style={{
             zIndex: 1,
             width: '576px',
             height: '400px',
           }}
        >
          <div
            className="flex items-end justify-center w-full h-full"
            style={{ paddingBottom: '20px' }}
          >
            <img
              src={pic1}
              alt="DentistPic"
              className="rounded-full object-cover"
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                margin: '20px auto',
                border: '2px solid blue', // For debugging
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  
