import { Button } from "./Button"
import { Switch } from "./Switch"

export const ModalSettingsContent = () => {

  return (
    <div>
      <h2 className="text-xl pb-2 border-b-2 border-gray-300 mb-2">Timer (Minutes)</h2>
      <form>
        <div className="flex w-full gap-x-5">
          <div className="flex flex-col grow">
            <label className="text-gray-500 font-bold">Pomodoro:</label>
            <input 
              type="number" 
              name="pomodoroTime" 
              id="Pomodoro"
              className="bg-gray-200 w-full h-[40px] focus:outline-none p-4 rounded-lg mt-2"
              />
          </div>
          <div className="flex flex-col grow">
            <label className="text-gray-500 font-bold">Short Break:</label>
            <input 
              type="number" 
              name="pomodoroTime" 
              id="Pomodoro"
              className="bg-gray-200 w-full h-[40px] focus:outline-none p-4 rounded-lg mt-2"
              />
          </div>
          <div className="flex flex-col grow">
            <label className="text-gray-500 font-bold">Long Break</label>
            <input 
              type="number" 
              name="pomodoroTime" 
              id="Pomodoro"
              className="bg-gray-200 w-full h-[40px] focus:outline-none p-4 rounded-lg mt-2"
              />
          </div>
        </div>
        <div className="flex w-full justify-between mt-5">
          <label className="text-gray-500 font-bold">Auto start pomodoros</label>
          <Switch/>
        </div>
        <div className="flex w-full justify-between mt-5">
          <label className="text-gray-500 font-bold">Auto start breaks</label>
          <Switch/>
        </div>
        <div className="flex justify-end border-t-2 border-gray-300 mt-4 pt-4 text-white font-bold">
          <Button backgroundColor="#dc4f4f" height="12" paddingX="4">
            <span>OK</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
