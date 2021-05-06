function Modal(props) {
    return (
    <div className='modal'>
        <p> You sure?</p>
        <button className='btn btn--alt'>cancel</button>
        <button className='btn'>confirm</button>
    </div>
    );
}

export default Modal;