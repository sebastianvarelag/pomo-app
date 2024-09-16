"use client";

import { useState } from "react"
import { PauseIcon } from "../../../public/icons/PauseIcon"
import { SettingsIcon } from "../../../public/icons/SettingsIcon"
import { SkipIcon } from "../../../public/icons/SkipIcon"
import { Button } from "./Button"
import { Modal } from "./Modal"

export const Controls = () => {

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
        <Button>
          <PauseIcon/>
        </Button>
        <Button>
          <SkipIcon/>
        </Button>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <h1>Hola</h1>
      </Modal>
    </div>
  )
}
