import { NewNote } from "../components/NewNote";
import { NoteCard } from "../components/NoteCard";
import { useData } from "../context/Data.provider";

export const PinnedNotes = () => {
	const {
		dataState: { note },
		dataDispatch,
	} = useData();
	const pinnedNotes = note.filter((note) => note.isPinned);
	return (
		<div className="p-10   ">
			<h1 className="text-white text-4xl p-6 mx-auto sm:m-2">Pinned Notes</h1>
			<div className="flex m-10 flex-wrap flex-row">
				{note.length === 0 ? (
					<p className="text-white">Your notes will appear here</p>
				) : (
					pinnedNotes.map((item) => <NoteCard note={item} />)
				)}
			</div>
		</div>
	);
};
