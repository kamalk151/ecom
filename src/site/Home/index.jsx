
import girlSideImg from '../Assets/img/girl_side_img.jpg'
import lapSideImg from '../Assets/img/lap_side.jpg'
import mobSideImg from '../Assets/img/mob_side.jpg'
import './home.css'
const HomeComponent = () => {
  
  return (
    <div className='center_content' id='home'>
      <div className='home_banner'>
        <div className='text'>
          <p className=''>
            REVOLUTIONIZE YOUR MOBILE EXPERIENCE WITH GADGETS LE LO
          </p>
          <p className='border-bottom'></p>
          <p className='header_tag_text'>
            Discover the most innovative mobile gadgets that make more equip to your device.
          </p>
        </div>
      </div>
      <div className='mid_content'>
        <div className='card_'>
          <div className='side_img'>
            <img className='' src={girlSideImg} alt='' />
          </div>
          <div className='mt-5 card_info'>
            <h4 data-aid='ABOUT_HEADLINE_RENDERED1' className='font_family_geo'>
              What is Gadgets Le Lo?
            </h4>
            <p className='mt-4 '>
              <span>
                Gadgets le lo is launching in the web world with new and latest gadgets. 
                Gadgets le lo is an Ecommerce application that will
                sell all the mobile associated products..
              </span>
            </p>
          </div>
        </div>
        <div className='card_'>
          
          <div className='mt-5 card_info'>
            <h4 data-aid='ABOUT_HEADLINE_RENDERED1' className='font_family_geo'>
              How can Gadgets Le Lo help you?
            </h4>
            <p className='mt-4'>
              <span>
                Gadgets le lo is launching in the web world with new and latest gadgets. 
                That make more equip, safer and stronger. It will help you to make
                more impressive you in front of others.
              </span>
            </p>
          </div>
          <div className='side_img'>
            <img className='' src={lapSideImg} alt='' />
          </div>
        </div>

        <div className='card_'>
          <div className='side_img'>
            <img className='' src={mobSideImg} alt='' />
          </div>
          <div className='mt-5 card_info'>
            <h4 data-aid='ABOUT_HEADLINE_RENDERED1' className='font_family_geo'>
              Who is Gadgets Le Lo for?
            </h4>
            <p className='mt-4 '>
              <span>
                Gadgets Le Lo is the perfect for all customer and  vendor/seller. 
                Our application will provide option to sell product of other vendor.
              </span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeComponent  