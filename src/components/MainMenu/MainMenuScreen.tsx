import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { MAIN_MENU_OPTIONS, NAVIGATOR } from '../../utils/constants';
import { LogOutModal } from '../common/Modal/LogOutModal';
import Modal from '../common/Modal/Modal';

const MainMenuScreen = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const history = useHistory();
  const handleRedirect = (nextScreen: string) => history.push(nextScreen, { from: NAVIGATOR.main });

  const redirectAction = () => history.push(NAVIGATOR.sign_in);

  return (
    <div className="no-scroll flex flex-col flex-1 items-center justify-center h-screen bg-yellow-100">
      <button
        className="border text-xs hover:bg-opacity-40 bg-gray-400 absolute top-0 right-1 rounded p-3 my-2 "
        onClick={() => setIsOpenModal(true)}
      >
        Sign Out
      </button>
      <h1 className="mb-10 text-2xl font-bold uppercase">Menu Principal</h1>
      <div>
        {React.Children.toArray(
          MAIN_MENU_OPTIONS.map(({ nextScreen, title }) => (
            <button
              className="border border-black rounded-lg bg-white min-w-max w-full p-3 my-2"
              onClick={() => handleRedirect(nextScreen)}
            >
              {title}
            </button>
          ))
        )}
      </div>
      {isOpenModal && (
        <Modal title="Sign Out" isOpen={isOpenModal} handleIsOpen={(value: boolean) => setIsOpenModal(value)}>
          <LogOutModal confirm={redirectAction} closeModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default MainMenuScreen;
