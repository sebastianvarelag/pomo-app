"use client";

import { useState } from "react"
import { PauseIcon } from "../../../public/icons/PauseIcon"
import { SettingsIcon } from "../../../public/icons/SettingsIcon"
import { SkipIcon } from "../../../public/icons/SkipIcon"
import { Button } from "./Button"
import { Modal } from "./Modal"
import { ModalSettingsContent } from "./ModalSettingsContent";
import { PlayIcon } from "../../../public/icons/PlayIcon";
import { useAppSelector } from "@/redux/hooks";

export const Controls = () => {

  const {isRunning} = useAppSelector(state => state.timer);

  const [showModal, setShowModal] = useState(false)

  const openModal = () =>{
    setShowModal(true)
  }

  return (
    <div className="flex w-full h-auto justify-center items-center">
      <div className="flex w-fit justify-around text-sm md:text-lg font-bold gap-x-6">  
        <Button openModal={openModal}>
          <SettingsIcon/>
        </Button>
        
        {isRunning ? 
                  <Button>
                    <PauseIcon/>
                  </Button>
                  :
                  <Button>
                    <PlayIcon/>
                  </Button>
        }
        <Button>
          <SkipIcon/>
        </Button>
      </div>
      <Modal isVisible={showModal} title="Settings" onClose={() => setShowModal(false)}>
        <ModalSettingsContent/>
      </Modal>
    </div>
  )
}
