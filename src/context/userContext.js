import { createContext, useState } from "react";

const UserContext = createContext({
    users:[],
    editUser: {},
    addUser: () => {},
    deleteUser: () => {},
    editUserHandler: () => {},
    updateUserHandler: () => {}
});

export const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { 
            id:"1", 
            name:"Naveen", 
            email:"Naveen@gmail.com", 
            gender:"male",
            status:'Active' 
        }
    ]);
    const [editUser, setEditUser] = useState({});


    const addUser = (user) => {
        setUsers([...users, user]);
    }

    const deleteUser = (id) => {
        let del = window.confirm("Are you sure?");
        if(del === true){
            const filterUser = users.filter((user) => user.id !== id);
            setUsers([...filterUser]);
        }
    }

    const editUserHandler = (id) => {
        const editUser = users.filter(user => user.id === id)
        setEditUser(...editUser);
    }

    const updateUserHandler = (editUser) => {
        setUsers(users.map(user => user.id === editUser.id ? editUser : user));
    }

    const context = { users, editUser, addUser, deleteUser, editUserHandler, updateUserHandler }
    return (
        <>
            <UserContext.Provider value={context}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContext;