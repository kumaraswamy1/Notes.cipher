import { NoteCard } from "../components/NoteCard";
import { useData } from "../context/Data.provider";

export const Notes = () => {
	const {
		dataState: { note },
	} = useData();

	return (
		<div className="p-10   ">
			<h1 className="text-white text-4xl p-6 mx-auto sm:m-2">All Notes</h1>
			<div className="flex m-10 flex-wrap flex-row">
				{note.length === 0 ? (
					<p className="text-white">Your notes will appear here</p>
				) : (
					note.map((item) => <NoteCard note={item} />)
				)}
			</div>
		</div>
	);
};
