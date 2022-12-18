// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { useData } from "../context/Data.provider";
// export const Tags = ({ noteId }: any) => {
// 	const { dataState, dataDispatch } = useData();

// 	const [playlistName, setPlaylistName] = useState("");
// 	const [toggle, setToggle] = useState(true);
// 	const createLabel = async (e: any) => {
// 		if (e.key === "Enter" && playlistName !== "") {
// 			e.preventDefault();
// 			dataDispatch({
// 				type: "CREATE_LABEL",
// 				payload: { tagName: playlistName, id: uuidv4() },
// 			});
// 		}
// 	};
// 	const togglePlaylist = (label: any) => {
// 		dataDispatch({
// 			type: "UPDATE_LABEL",
// 			payload: { label, noteId: noteId },
// 		});
// 	};
// 	// const checkplaylist = (playlistItem) => {
// 	// 	return state.playlists?.filter((item) => item.name === playlistItem)?.[0];
// 	// };
// 	// const checkVideo = (playlistItem) => {
// 	// 	const playlist = checkplaylist(playlistItem);

// 	// 	return playlist?.videos?.find(({ _id }) => _id === playlistVideo);
// 	// };

// 	return (
// 		<div>
// 			<button
// 				className="text-white"
// 				onClick={() => {
// 					setToggle(!toggle);
// 				}}
// 				id="dropdownDefault"
// 				data-dropdown-toggle="dropdown"
// 				type="button"
// 			>
// 				add
// 			</button>

// 			<div
// 				id="dropdown"
// 				className={`${
// 					toggle ? "hidden" : "visible"
// 				} fixed  bg-white rounded shadow   bg-opacity-10 backdrop-blur-sm flex justify-center items-center`}
// 			>
// 				<form className={toggle ? "hidden" : "visible"}>
// 					{" "}
// 					<div>
// 						<div className="relative">
// 							<input
// 								value={playlistName}
// 								className="bg-gray-50 border rounded mb-4 border-gray-300 text-gray-900 text-sm block w-full pl-10 p-2.5 "
// 								type="text"
// 								onChange={(e) => setPlaylistName(e.target.value)}
// 								onKeyDown={createLabel}
// 							/>
// 						</div>
// 						<div className="flex  flex-col justify-center">
// 							{dataState.tags.map((item) => (
// 								<>
// 									<div className="flex flex-row items-center">
// 										<input
// 											value={item.tagName}
// 											id="checked-checkbox"
// 											type="checkbox"
// 											className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
// 											onChange={() => togglePlaylist(item.id)}
// 										/>
// 										<label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
// 											{item.tagName}
// 										</label>
// 									</div>
// 								</>
// 							))}
// 						</div>
// 					</div>
// 				</form>

// 				<></>
// 			</div>
// 		</div>
// 	);
// };
