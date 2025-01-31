import Form from 'react-bootstrap/Form'
import * as Icon from 'react-bootstrap-icons'
import blackLogo from '../Assets/img/black_logo.PNG'

const SearchPanel = () => {
  return (
    <div className=''>
      <div className='top_bar'>
        <div className='blackLogo'>
          <img src={blackLogo} alt='' />
        </div>
        <div className='top_search'>
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
    </div>
  )
}

export default SearchPanel
