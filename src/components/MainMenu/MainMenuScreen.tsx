import React, { useState } from 'react';
import { useHistory } from 'react-router';

import LogoutIcon from '@heroicons/react/outline/LogoutIcon';

import { MAIN_MENU_OPTIONS, NAVIGATOR } from '../../utils/constants';

import { LogOutModal } from '../common/Modal/LogOutModal';
import Modal from '../common/Modal/Modal';

const MainMenuScreen = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const history = useHistory();
  const handleRedirect = (nextScreen: string) => history.push(nextScreen, { from: NAVIGATOR.main });

  const redirectAction = () => history.push(NAVIGATOR.sign_in);

  return (
    <div className="no-scroll overflow-y-scroll flex flex-col flex-1 items-center justify-center h-screen">
      <button
        className="border rounded-xl text-xs hover:opacity-80 bg-red-500 absolute top-0 right-1 py-1 px-2 my-2 text-white flex flex-row items-center"
        onClick={() => setIsOpenModal(true)}
      >
        <LogoutIcon className="w-6 h-6 text-white" />
        <p className="px-2">Salir</p>
      </button>
      <h1 className="mb-10 text-2xl font-encode-bold uppercase">Menu Principal</h1>
      <div className="flex flex-row flex-wrap gap-1">
        {React.Children.toArray(
          MAIN_MENU_OPTIONS.map(({ nextScreen, title, Icon }) => (
            <button
              className="shadow-xl border border-black rounded-lg bg-white py-2 px-4 m-2 flex flex-1 flex-col items-center justify-center hover:bg-black hover:bg-opacity-20"
              onClick={() => handleRedirect(nextScreen)}
            >
              <Icon className="text-black" aria-hidden="true" />
              <p className="text-black py-2 text-xl">{title}</p>
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
