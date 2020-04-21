// import React from "react";

const InitialState ={
	Data:false,
	Totals:false,
	About:null,
	Validation:[],
	Categories:[],
	States:[],
	UPdates:[],
	inProgress:[],
	Search:{
		Min:200,
		Max:100000,
		Country:"Australia"
	}
}

const UI = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
			// Fetch Initial Meta Data
			case "STORE_DATA":{
				return {...state, Data:action.payload}
				// eslint-disable-next-line 
				break
			}	

			// Store Jobs Data
			case "STORE_ABOUT":{
				return {...state, Totals:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "STORE_VALIDATION":{
				return {...state, Validation:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "STORE_CATS":{
				return {...state, Categories:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "STORE_STATES":{
				return {...state, States:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "STORE_UPDATES":{
				return {...state, UPdates:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "STORE_PROGRESS":{
				return {...state, inProgress:action.payload}
				// eslint-disable-next-line 
				break
			}
			
			

			case "STORE_TOTALS":{
				return {...state, About:action.payload}
				// eslint-disable-next-line 
				break
			}
			





			case "STORE_MIN":{
				return {...state, Search:{...state.Search, Min:action.payload}}
				// eslint-disable-next-line 
				break
			}
			case "STORE_COUNTRY":{
				return {...state, Search:{...state.Search, Country:action.payload}}
				// eslint-disable-next-line 
				break
			}
			
			case "STORE_UI":{
			return {...state, UI:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "UI_SET":{
			return {...state, UI_SET:action.payload}
				// eslint-disable-next-line 
				break
			}
		}
		return state;
	}
export default UI;	