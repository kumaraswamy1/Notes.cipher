import { useState } from "react";
import { useData } from "../context/Data.provider";
import { addNewNote } from "../services/scores/scores";

export const NewNote = () => {
	const { dataDispatch } = useData();

	const intialNote = {
		_id: "",
		title: "",
		content: "",
		color: "",
		labelList: [],
		isPinned: false,
	};

	const [notes, setNotes] = useState(intialNote);
	const saveNote = () => {
		addNewNote({
			title: notes.title,
			content: notes.content,
			color: notes.color,
			labelList: notes.labelList,
			isPinned: notes.isPinned,
			dataDispatch,
		});
		dataDispatch({
			type: "ADD_NOTE",
			payload: notes,
		});
	};
	const colors = [
		"bg-orange-700",
		"bg-blue-700",
		"bg-green-700",
		"bg-lime-700",
		"bg-cyan-700",
		"bg-pink-700",
	];

	return (
		<div className="flex flex-col  ">
			<div className="flex flex-col  justify-center items-center">
				<input
					value={notes.title}
					className="  outline-0  md:w-96 w-64 rounded-t-xl  border   text-sm   block  p-2.5 bg-gray-700 placeholder-gray-400 text-white border-b-1 border-slate-500 border-x-0 border-t-0 "
					onChange={(e) => {
						setNotes({ ...notes, title: e.target.value });
					}}
					placeholder="Title"
					width="auto"
				/>
				<textarea
					className=" block p-2.5 md:md:w-96  w-64 text-sm    border    bg-gray-700 placeholder-gray-400 text-white   border-b-1 border-slate-500 border-x-0 border-t-0 outline-0 "
					value={notes.content}
					onChange={(e) => {
						setNotes({ ...notes, content: e.target.value });
					}}
					placeholder="content ..."
				/>
				<div className=" block p-2.5 md:w-96 w-64  text-sm   rounded-b-xl   bg-gray-700  ">
					{colors.map((color) => (
						<input
							className={`${color}  w-2 h-2 md:w-6 md:h-6 p-4 m-2 rounded-full`}
							onClick={() => {
								setNotes({ ...notes, color: color });
							}}
						/>
					))}

					<button
						disabled={notes.content !== "" ? false : true}
						className="m-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
						onClick={() => {
							saveNote();
						}}
					>
						Save
					</button>
				</div>{" "}
			</div>
		</div>
	);
};
