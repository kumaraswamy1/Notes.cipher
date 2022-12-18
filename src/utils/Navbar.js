import {
	AiOutlinePushpin,
	AiFillDatabase,
	AiOutlineHome,
} from "react-icons/ai";

export const menus = [
	{
		name: "Home",
		link: "",
		icon: AiOutlineHome,
		end: true,
	},
	{
		name: "Notes",
		link: "notes",
		icon: AiFillDatabase,
	},
	{
		name: "Pinned ",
		link: "pinnedNotes",
		icon: AiOutlinePushpin,
	},
];
