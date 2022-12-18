import axios from "axios";
import { DATA_ACTIONTYPE } from "../../reducers/Data.reducer";
import { note } from "../../reducers/Data.reducer.types";



type getNotesProps = {
    
    dataDispatch: (args: DATA_ACTIONTYPE) => void;

};

type newNotesProps = {
  
	title: string;
	content: string;
	color: string;
	labelList: Array<string>;

	isPinned: boolean | false;

    dataDispatch: (args: DATA_ACTIONTYPE) => void;

};
type updateNoteProps = {
  _id:string,
	title: string;
	content: string;
	color: string;
	labelList: Array<string>;

	isPinned: boolean | false;

    dataDispatch: (args: DATA_ACTIONTYPE) => void;

};

type deleteNoteProps = {
  _id:string,
	

    dataDispatch: (args: DATA_ACTIONTYPE) => void;

};

type notelist = {
    notes: Array<note>
    userId: string
    _id:string

}


export async function getNotes({dataDispatch}:getNotesProps) {
		const { data } = await axios.get<notelist>(
			"https://notes-cipher.kumaraswamya.repl.co/notes",
		);
    if (data) {
        console.log(data.notes)
        dataDispatch({ type: "LOAD_NOTES", payload: data.notes})
    }
	}


export async function addNewNote({title,content,color,isPinned,labelList,dataDispatch}:newNotesProps) {
		const { data } = await axios.post<note>(
			"https://notes-cipher.kumaraswamya.repl.co/notes",
				{
					
						title,
						content, 
						color,
						labelList,
						isPinned
					}

		);
    if (data) {
     
     console.log(data)
       
    }
	
}
    

export async function updateNote({title,content,color,isPinned,labelList,_id,dataDispatch}:updateNoteProps) {
		const { data } = await axios.post<note>(
			`https://notes-cipher.kumaraswamya.repl.co/notes/${_id}`,
				{
					_id,
						title,
						content, 
						color,
						labelList,
						isPinned
					}

		);
    if (data) {
     
     console.log(data)
       	dataDispatch({
			type: "UPDATE_NOTE",
			payload: data,
		});
    }
	
}
    export async function deleteNote({_id,dataDispatch}:deleteNoteProps) {
		const { data } = await axios.delete<boolean>(
			`https://notes-cipher.kumaraswamya.repl.co/notes/${_id}`,
				

        );
       
        if (data) {
   	dataDispatch({
			type: "DELETE_NOTE",
			payload: { _id:_id },
		});
        return data
  
        }
}
	

    export async function updatePin({_id,dataDispatch}:deleteNoteProps) {
		const { data } = await axios.put<boolean>(
			`https://notes-cipher.kumaraswamya.repl.co/notes/${_id}`,
				

        );
       
        if (data) {

	dataDispatch({	type: "CHANGE_PIN_STATE",
	payload: { _id: _id }});
        return data
  
        }
}


