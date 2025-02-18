import React from 'react'
import Login from './Login';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

function Modal({ isModalOpen, setIsModalOpen, activeForm, setActiveForm  }) {
    // const [activeForm, setActiveForm] = useState('login'); // 'login', 'signup', 'reset'

    // Switch form type based on the selected action
    const renderForm = () => {
        switch (activeForm) {
            case 'signup':
                return <SignUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setActiveForm={setActiveForm} />;
            case 'reset':
                return <ResetPassword isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setActiveForm={setActiveForm} />;
            case 'login':
            default:
                return <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setActiveForm={setActiveForm} />;
        }
    };

  return (
    <>
        <div className="signup-body">
            {renderForm()}
        </div>
    </>
  )
}

export default Modal;
