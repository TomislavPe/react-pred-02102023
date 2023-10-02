const DataDisplay = ({url, title, explanation }) => {

    console.log(url)
    return (
        <>
            <img src={url} alt={title} />
        </>
    );
};

export default DataDisplay;
