import { Carousel } from 'flowbite-react';

export default function MainCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-[25rem] 2xl:h-96 ">
      <Carousel >
        <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/316-1709145000-babygearmar2024desktop.jpg"  className='bg-cover -mt-12 md:mt-0 xs:h-[15rem]  sm:h-auto' style={{objectFit:"cover",width:"209vh"}} alt="..." />
        <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/316-1706725800-ss2024desktop.jpg" className='bg-cover -mt-12 md:mt-0 xs:h-[15rem]  sm:h-auto' style={{objectFit:"cover",width:"209vh"}} alt="..." />
        <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/316-1709145000-babycaremar2024desktop.jpg" className='bg-cover -mt-12 md:mt-0 xs:h-[15rem]  sm:h-auto' style={{objectFit:"cover",width:"209vh"}} alt="..." />

      </Carousel>
    </div>
  );
}
