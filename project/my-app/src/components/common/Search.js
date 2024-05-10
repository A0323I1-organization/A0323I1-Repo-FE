import React from "react";

export const Search = ({search,setSearch}) => {
    return (
        <div className="col-sm-6 mb-4">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    className="form-control"
                    type="search"
                    role="searchbox"
                    placeholder="Search customers..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}>
                </input>
            </form>
        </div>
    );
};


