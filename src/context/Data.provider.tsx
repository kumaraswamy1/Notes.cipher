import { createContext, useContext, useReducer } from "react";
import { dataReducer, DATA_ACTIONTYPE } from "../reducers/Data.reducer";
import { intialState } from "../reducers/Data.reducer.types";

type DataContextValue = {
	dataState: intialState;
	dataDispatch: (args: DATA_ACTIONTYPE) => void;
};

export const DataContext = createContext<DataContextValue>(
	{} as DataContextValue
);

export function DataProvider(props: React.PropsWithChildren<{}>) {
	const { children } = props;
	const intialDataState: intialState = {
		note: [],
		// tags: [],
	};
	const [dataState, dataDispatch] = useReducer(dataReducer, intialDataState);

	return (
		<DataContext.Provider value={{ dataState, dataDispatch }}>
			{children}
		</DataContext.Provider>
	);
}

export function useData() {
	return useContext(DataContext);
}
