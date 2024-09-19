import { setSkip } from "@/redux/features/timerSlice";
import { useAppDispatch } from "@/redux/hooks";

type propsModal = {
	onClose: () => void;
};

export const ModalConfirmContent = ({ onClose }: propsModal) => {
  
  const dispatch = useAppDispatch();

	return (
		<>
			<p className="text-lg font-semibold text-gray-400">
				Are you sure you want to skip this round?
			</p>
			<div className="flex justify-end border-t-2 gap-x-4 border-gray-300 mt-4 pt-4 text-white font-bold">
				<button
					className={`h-12 bg-[#dc4f4f] px-6 hover:opacity-70 relative overflow-hidden`}
          onClick={() => {onClose(); dispatch(setSkip(false))}}
				>
					NO
				</button>
				<button
					className={`h-12 bg-[#4fdc7e] px-6 hover:opacity-70 relative overflow-hidden`}
          onClick={() => {onClose(); dispatch(setSkip(true))}}
				>
      		YES
				</button>
			</div>
		</>
	);
};
