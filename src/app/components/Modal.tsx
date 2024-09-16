import { MouseEvent } from "react";

type modalProps ={
  children: React.ReactNode;
  title: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Modal = ({isVisible, onClose, children, title}: modalProps) => {

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
      <div className='w-[400px] flex flex-col'>
        <button 
          className='text-gray-500 font-extrabold text-xl place-self-end absolute mr-3 mt-2'
          onClick={() => onClose()}
        >
          X
        </button>
        <div className='bg-white p-2 rounded text-black'>
          <h2 className="text-xl text-gray-500 font-bold pb-2 ml-2 mt-1 border-b-2 border-gray-300">{title}</h2>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
