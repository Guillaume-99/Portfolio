import "./Filters.scss";

function Filters({ filters, activeFilter, setActiveFilter }) {
    return (
        <div className="filters">
            {filters.map((filter) => (
                <button key={filter} className={`filters__button ${activeFilter === filter ? "filters__button--active" : ""}`} onClick={() => setActiveFilter(filter)} type="button">
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default Filters;
