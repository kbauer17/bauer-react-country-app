import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddCountry(props) {
    const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        className='btn btn-primary my-2'
        onClick={handleShow}>
        Add Country
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Country</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={ (e) => {
                e.preventDefault();
                setName('');
                props.onAdd(name);
            } }
            id='addmodal'
            // className=''
            >
                <div>
                    <div>
                        <label for='name'>Country Name</label>
                    </div>
                    <div>
                        <input 
                            className=''
                            id='name'
                            placeholder='United States'
                            type='text'
                            value={name}
                            onChange={ (e) => { setName(e.target.value); }}
                            />
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className='btn btn-secondary'>
            Close
          </button>
          <button className='btn btn-primary'
            onClick={handleClose}
            form='addmodal'
            >Add Country</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCountry;