const initialState = {
    users:[
    { id: 1, name: "Mohamed Allaoui", email: "allaoui@gmail.com" },
    { id: 2, name: "Hind Benanni", email: "benani@gmail.com" },
    ]
};
const reducer =(state =initialState,action )   =>{
    switch (action.type){
        case "Add_User":
            return {...state,users:[...state.users,action.payload]}
        case "Update_User":
            const user =state.users.find((u)=>u.id===parseInt(action.payload.id))
            if(user){
                user.name=action.payload.name
                user.email=action.payload.email
            }
            return state 
        case"Delete_User" :
            return {...state,user:[...state.users.filter((u)=>u.id!==parseInt(action.payload))]}  
        default:
            return state
    }
} 
export default reducer
