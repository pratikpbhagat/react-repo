import "./SearchInput.scss"

const SearchInput = () => {
    return (
        <div className="search-wrapper">
            <div className="gradient-border">
                <input className="search-box" type="text" placeholder="Ask our AI assistant to show you anything..."/>
            </div>

            <div className="suggestion-row">
                <span className="suggestion-label">Search suggestions:</span>

                <div className="suggestions">
                    <button className="gradient-btn">See what's new</button>
                    <button className="gradient-btn">Who's working today</button>
                    <button className="gradient-btn">Show task updates</button>
                    <button className="gradient-btn">See what's due today</button>
                </div>
            </div>
        </div>

    );
}

export default SearchInput;