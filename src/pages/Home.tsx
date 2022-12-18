import { NewNote } from "../components/NewNote";
import { NoteCard } from "../components/NoteCard";
import { useData } from "../context/Data.provider";
import { PinnedNotes } from "./PinnedNotes";

export const Home = () => {
	const {
		dataState: { note },
	} = useData();
	const notPinnedNotes = note.filter((note) => !note.isPinned);
	return (
		<div className="p-10   ">
			<h1 className="text-white text-4xl p-6 mx-auto sm:m-2">Notes.cipher</h1>
			<NewNote />
			<div className="flex m-10 flex-wrap flex-row">
				<PinnedNotes />
				{note.length === 0 ? (
					<p className="text-white">Your notes will appear here</p>
				) : (
					notPinnedNotes.map((item) => <NoteCard note={item} />)
				)}
			</div>
		</div>
	);
};
