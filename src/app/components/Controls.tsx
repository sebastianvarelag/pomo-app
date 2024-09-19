"use client";

import { useState } from "react"
import { PauseIcon } from "../../../public/icons/PauseIcon"
import { SettingsIcon } from "../../../public/icons/SettingsIcon"
import { SkipIcon } from "../../../public/icons/SkipIcon"
import { Button } from "./Button"
import { Modal } from "./Modal"
import { ModalSettingsContent } from "./ModalSettingsContent";
import { PlayIcon } from "../../../public/icons/PlayIcon";

interface controlsProps {
  ticking: boolean;
  toggleTime: () => void;
}

export const Controls = ({ticking, toggleTime}: controlsProps) => {
  const [showModal, setShowModal] = useState(false)
  const [showModalConfirm, setShowModalConfirm] = useState(false)

  const openModal = () =>{
    setShowModal(true)
  }

  const openModalConfirm = () =>{
    setShowModalConfirm(true)
  }

  return (
    <div className="flex w-full h-auto justify-center items-center">
      <div className="flex w-fit justify-around text-sm md:text-lg font-bold gap-x-6">  
        <Button openModal={openModal}>
          <SettingsIcon/>
        </Button>
        
        <Button toggleTime={toggleTime}>
          {
            ticking
              ? 
              <PauseIcon/>
              : 
              <PlayIcon/>
          }
          </Button>
        <Button openModal={openModalConfirm}>
          <SkipIcon/>
        </Button>
      </div>
      <Modal isVisible={showModal} title="Settings" onClose={() => setShowModal(false)}>
        <ModalSettingsContent onClose={() => setShowModal(false)}/>
      </Modal>

      <Modal isVisible={showModalConfirm} title="Are you sure?" onClose={() => setShowModalConfirm(false)}>
        <h1>si</h1>
      </Modal>
    </div>
  )
}
