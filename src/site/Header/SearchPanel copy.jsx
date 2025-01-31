import hDivider from '../Assets/img/header_divider.png'
import laptop from '../Assets/img/laptop.png'
import logo from '../Assets/img/logo.png'
import Form from 'react-bootstrap/Form'
import * as Icon from 'react-bootstrap-icons'


const SearchPanel = () => {
  return (
    <div className=''>
      <div className='top_bar'>
        <div className='top_search'>
          {/* <div className='search_text'>
            <span> Advanced Search</span>
          </div> */}
          <Form className='col-md-6 contact-form form'>
            
            <Form.Group className='form-group mb-2'>
              <Icon.Search color='black' 
                className='fa fa-search' 
                size={12} fontWeight={'bold'}/>
              <Form.Control 
                type='text' 
                className='search_input' 
                placeholder='Enter product / brand name' />
            </Form.Group>
          </Form>
        </div>
      </div>
      {/* <div id='header'>
        <div id='logo'>
          <img src={ logo } alt='' border='0' width='237' height='140' /> </div>
        <div className='oferte_content'>
          <div className='top_divider'>
            <img src={ hDivider } alt='' width='1' height='164' /></div>
          <div className='oferta'>
            <div className='oferta_content'>
              <img src={ laptop } width='94'
                height='92' alt='' border='0' className='oferta_img' />
              <div className='oferta_details'>
                <div className='oferta_title'>Samsung GX 2004 LM</div>
                <div className='oferta_text'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco </div>
                <a href='details.html' className='details'>details</a> </div>
            </div>
            {/* <div className='oferta_pagination'> 
              <span className='current'>1</span> <a href='#'>2</a> 
              <a href='#'>3</a> <a href='#'>4</a> <a href='#'>5</a> </div> */}
          </div>
          <div className='top_divider'>
            <img src='images/header_divider.png'
             alt='' width='1' height='164' /></div>
        </div>
      </div> */}
    </div>
  )
}

export default SearchPanel
