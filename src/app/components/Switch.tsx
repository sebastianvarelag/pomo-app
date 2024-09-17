
export const Switch = () => {
  return (
    <label className="relative inline-block w-[60px] h-[34px]">
      <input type="checkbox" name="toggle" className="opacity-0 w-0 h-0"/>
      <span className="absolute cursor-pointer inset-0 bg-gray-300 transition delay-[0.3s] rounded-[34px] before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 before:bg-white before:transition before:delay-[0.3s] before:rounded-[50%]"></span>
    </label>
  )
}