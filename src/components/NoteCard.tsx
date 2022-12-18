import { useState } from "react";
import { AiFillDelete, AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import { useData } from "../context/Data.provider";
import { deleteNote, updatePin } from "../services/scores/scores";

import { EditNote } from "./EditNote";

export const NoteCard = ({ note }: any) => {
	const [showModal, setShowModal] = useState(false);

	const handleOpen = () => {
		setShowModal(true);
	};

	const { dataDispatch } = useData();
	const DeleteNote = () => {
		deleteNote({ _id: note._id, dataDispatch });
	};
	const PinNote = () => {
		updatePin({ _id: note._id, dataDispatch });
	};

	return (
		<>
			<div
				className={`${note.color} group md:md:w-96  w-64 border border-gray-700 m-5   rounded-lg shadow-md     `}
			>
				<div
					onClick={handleOpen}
					key={note.id}
					className="
								m-5 max-w-sm p-6    "
				>
					<h1 className="mb-2 text-2xl font-bold tracking-tight text-white">
						{note.title}
					</h1>

					<p className="text-white">{note.content}</p>
				</div>
				<div
					className="  items-center  lg:top-2 lg:right-1  top-8 right-1/4
					 hidden group-hover:block"
				>
					<button
						className="text-gray-50 align-middle p-2"
						onClick={() => {
							PinNote();
						}}
					>
						{note.isPinned ? (
							<AiFillPushpin size={28} />
						) : (
							<AiOutlinePushpin size={28} />
						)}
					</button>
					<button
						className="align-middle p-2"
						onClick={() => {
							DeleteNote();
						}}
					>
						<AiFillDelete size={28} className={"text-gray-400 text-center"} />
					</button>
				</div>

				{showModal && (
					<EditNote
						note={note}
						isVisible={showModal}
						setshowModal={setShowModal}
					/>
				)}
			</div>
		</>
	);
};
