export type note = {
	_id: string;
	title: string;
	content: string;
	color: string;
	labelList: Array<string>;

	isPinned: boolean | false;
};
export type intialState = {
	note: Array<note>;
};

export type tagName = {
	tagName: string;
	id: string;
};

export type payloadId = {
	_id: string;
};
