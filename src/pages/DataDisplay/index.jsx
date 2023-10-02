const DataDisplay = ({url, title, explanation }) => {

    return (
        <>
            <img src={url} alt={title} />
            <p>{explanation}</p>
        </>
    );
};

export default DataDisplay;
