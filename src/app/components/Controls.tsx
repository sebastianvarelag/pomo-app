import { PauseIcon } from "../../../public/icons/PauseIcon"
import { SettingsIcon } from "../../../public/icons/SettingsIcon"
import { SkipIcon } from "../../../public/icons/SkipIcon"
import { Button } from "./Button"

export const Controls = () => {
  return (
    <div className="flex w-full h-auto justify-center items-center">
      <div className="flex w-fit justify-around text-sm md:text-lg font-bold gap-x-6">  
        <Button>
          <SettingsIcon/>
        </Button>
        <Button>
          <PauseIcon/>
        </Button>
        <Button>
          <SkipIcon/>
        </Button>
      </div>
    </div>
  )
}
