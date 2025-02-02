const SearchPanel = () => {
  return (
    <div className='App'>
      <div className='search'>
        <div className='form-control'>
          <form className=''>
            <label htmlFor='temp-id' className='label'>Advance Search</label>
            <input type='text' className='' />
            <button type='button' className=''>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchPanel
