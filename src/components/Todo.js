import { useState } from 'react'; // third party libraries don't need ./
/*With useState we register state that we want to support.
*/
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {       
    //The name of a component should always start with a Capital letter
    //This is in order to differentiate between react components and html elements
    
    /*props here will be an object where all the passed attributes will be available as key value pairs.
    In order to output dynamic expressions we use { some JS code }
    Note: we can have single line expression but not blocks, i.e no if / while etc*/
    
    const [ modalIsOpen, setModalIsOpen ] = useState(false); // useState is a so called react-hook. And they can only be called directly inside a component.
    /*useState() always returns an array with exactly two elements.
    The first element is a snapshot of the current state.
    The second element is a function which allows us to change that.
    The argument false is because we want the modal to initially not show (it is starting state)
    The reason why we use useState and not just regular variables is because React wants to keep track 
    of which state has changed and depending on that update the page.
    If a normal let changes value react won't react.
    */
    
    /*the onClick attribute is also JSX, I think it's not valid html.
    Note that we can only use onClick directly on built in stuff like button.
    On our own Components we would need to handle them as props, see Backdrop.js.*/
    
    function deleteHandler() {
        setModalIsOpen(true);//When clicked we want to switch state
        // When state is changed with useState react automatically 
        // rerenders the component
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
            { modalIsOpen ? <Backdrop onClick={closeModalHandler} /> : null}
        </div>
    );

    /*There is a trick where { modalIsOpen ? <Modal /> : null}
    is instead written as { modalIsOpen && <Modal />} if both are true the right value will be returned in javascript he says.
    But this feels weird, isn't that just a boolean.*/ 
}

export default Todo;