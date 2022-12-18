import { payloadId, intialState, note } from "./Data.reducer.types";

export type DATA_ACTIONTYPE =
	| { type: "ADD_NOTE"; payload: note }
	| { type: "LOAD_NOTES"; payload: Array<note> }
	| { type: "UPDATE_NOTE"; payload: note }
	| { type: "DELETE_NOTE"; payload: payloadId }
	| { type: "CHANGE_PIN_STATE"; payload: payloadId };

export const dataReducer = (
	state: intialState,
	{ type, payload }: DATA_ACTIONTYPE
) => {
	switch (type) {
		case "LOAD_NOTES":
			return {
				...state,
				note: payload,
			};
		case "ADD_NOTE":
			return {
				...state,
				note: [
					...state.note,
					{
						_id: payload._id,
						title: payload.title,
						content: payload.content,
						color: payload.color,
						labelList: [],
						isPinned: false,
					},
				],
			};
		case "UPDATE_NOTE":
			return {
				...state,
				note: state.note.map((updateNote) =>
					updateNote._id === payload._id ? { ...payload } : { ...updateNote }
				),
			};
		case "DELETE_NOTE":
			return {
				...state,
				note: state.note.filter((note) => note._id !== payload._id),
			};
		case "CHANGE_PIN_STATE":
			return {
				...state,
				note: state.note.map((note) =>
					note._id === payload._id
						? { ...note, isPinned: !note.isPinned }
						: note
				),
			};

		default:
			return state;
	}
};
