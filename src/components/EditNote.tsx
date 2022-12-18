import { useState } from "react";
import { useData } from "../context/Data.provider";

import { note } from "../reducers/Data.reducer.types";
import { updateNote } from "../services/scores/scores";

type setShowModalType = {
	setshowModal: any;
	isVisible: boolean;
	note: note;
};
export const EditNote = ({
	setshowModal,
	note,
	isVisible,
}: setShowModalType) => {
	const { dataDispatch } = useData();

	const [notes, setNotes] = useState(note);
	console.log(note);
	const saveNote = () => {
		updateNote({
			_id: note._id,
			title: notes.title,
			content: notes.content,
			color: notes.color,
			labelList: notes.labelList,
			isPinned: notes.isPinned,
			dataDispatch,
		});
		setshowModal(false);
	};
	const handleClose = (e: any) => {
		if (e.target.id === "wrapper") {
			setshowModal(false);
		}
	};

	const colors = [
		"bg-orange-700",
		"bg-blue-700",
		"bg-green-700",
		"bg-lime-700",
		"bg-cyan-700",
		"bg-pink-700",
	];

	if (!isVisible) return null;
	return (
		<div
			id="wrapper"
			className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex justify-center items-center  "
			onClick={(e) => handleClose(e)}
		>
			<div className="flex flex-col w-[600px]">
				<input
					value={notes.title}
					className="  outline-0 md:md:w-96  w-64  rounded-t-xl bg-gray-50 border  text-gray-900 text-sm   block  p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white border-b-1 border-slate-500 border-x-0 border-t-0 "
					onChange={(e) => {
						setNotes({ ...notes, title: e.target.value });
					}}
					placeholder="Title"
					width="auto"
				/>
				<textarea
					className=" block p-2.5 md:md:w-96  w-64  text-sm text-gray-900 bg-gray-50  border  focus:ring-blue-500  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  border-b-1 border-slate-500 border-x-0 border-t-0 outline-0 "
					value={notes.content}
					onChange={(e) => {
						setNotes({ ...notes, content: e.target.value });
					}}
					placeholder="content ..."
				/>
				<div
					className="  p-2.5 md:md:w-96  w-64 text-sm bg-gray-50  rounded-b-xl   dark:bg-gray-700  "
					placeholder="Here is a sample placeholder"
				>
					{colors.map((color) => (
						<input
							className={`${color}  w-6 h-6 p-4 m-2 rounded-full`}
							onClick={() => {
								setNotes({ ...notes, color: color });
							}}
						/>
					))}

					<button
						disabled={notes.content !== "" ? false : true}
						className="m-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={() => {
							saveNote();
						}}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};
