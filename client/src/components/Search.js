import React from 'react'

const Search = (props) => {
    return (
        <React.Fragment>
            <input className="SearchBox_input" type="text" placeholder="Search..." name="bookName" autoFocus
                value={props.searchValue}
                onChange={props.searchValueHandler} />
            <i className="fa fa-search Searchbtn" aria-hidden="true"
                onClick={props.searchHandler} />
        </React.Fragment>

    )
}

export default Search