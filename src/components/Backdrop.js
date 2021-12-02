function Backdrop(props) {
    // we expect a function as a value for props.onClick
    return <div className='backdrop' onClick={props.onClick}></div>;
}

export default Backdrop;