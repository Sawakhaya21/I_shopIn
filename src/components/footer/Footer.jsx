import footerLogo from '../../assets/logo.png';
import Banner from '../../assets/website/footer-pattern.jpg';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className='text-white' style={BannerImg}>
      <div className='container'>
        <div data-aos='zoom-in' className='grid md:grid-cols-3 pb-44 pt-5'>
          {/* comapny details */}
          <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
              <img src={footerLogo} alt='' className='max-w-[50px]'/>
              IshopIn.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            <div>
              <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                  Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {FooterLinks.map((data, id) => (
                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={id}>
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                  Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {FooterLinks.map((item, id) => (
                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={id}>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links  */}

            <div>
              <div className='flex items-center gap-3 mt-6'>
                <a href='/'>
                  <FaInstagram className='text-3xl'/>
                </a>
                <a href='/'>
                  <FaFacebook className='text-3xl'/>
                </a>
                <a href='/'>
                  <FaLinkedin className='text-3xl'/>
                </a>
              </div>
              <div className='mt-6'>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>Kanombe, Kigali Rwanda</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                  <FaMobileAlt />
                  <p>+250 796149081</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer