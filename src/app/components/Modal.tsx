import { MouseEvent } from "react";

type modalProps ={
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({isVisible, onClose, children}: modalProps) => {

  if(!isVisible) return null;

  const handleClose = (event: MouseEvent<HTMLDivElement>) =>{
    const {id} = event.target as HTMLButtonElement
    if(id === 'wrapper') onClose();
  }

  return (
    <div 
      className='fixed inset-0 w-full h-full bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      id="wrapper"
      onClick={handleClose}
      >
      <div className='w-[600px] flex flex-col'>
        <button 
          className='text-white text-xl place-self-end'
          onClick={() => onClose()}
        >
          X
        </button>
        <div className='bg-white p-2 rounded text-black'>
          {children}
        </div>
      </div>
    </div>
  )
}
