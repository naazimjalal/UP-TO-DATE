import React, { useState }  from 'react'
import './Search.css'
import {useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
 
function Search({}) {  
    const [input, setInput] = useState("");
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();

        console.log('you have hit search', input);

        history.push('/search')
    };
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon onClick={ search } className="search__inputIcon" />
                <input value={input}  onChange={e => setInput(e.target.value)} className="search-bar"/>
                <MicIcon /> 
            </div>
        </form>
    )
}

export default Search
