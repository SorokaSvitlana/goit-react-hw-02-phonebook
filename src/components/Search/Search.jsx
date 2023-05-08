import PropTypes from 'prop-types'
export const Search = ({filter, handleFilterChange}) => {
return (
<div>
<label>
      Find contacts by name
      <input
type="text"
value={filter}
onChange={handleFilterChange}
      />
    </label>
</div> )} 

Search.propTypes = {
      filter: PropTypes.string,
      handleFilterChange: PropTypes.func,
}