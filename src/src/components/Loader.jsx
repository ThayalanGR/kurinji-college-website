import React from 'react';
import ReactLoading from 'react-loading';


const Loader = (props) => {
    return (
        <div style={{ minWidth: "100vw", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ReactLoading type={props.type} color={"#EF5350"} height={'80px'} width={'80px'} />
        </div>
    );
};

export default Loader;