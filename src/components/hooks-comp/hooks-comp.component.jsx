import React, { useState, useEffect } from 'react';
import './hooks-comp.styles.scss';
import CardHooks from "./card-hooks/card-hooks.component";

const HooksComp = () => {
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState({ username: 'Username origin 0', address: {street:'add street origin 0'} });
    const [searchQuery, setSearchQuery] = useState('Kamren');
    const [usersTable, setUsersTable] = useState([]);
    /*
        useEffect(() => {
            const fetchFunc = async () => {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
                );
                const resJson = await response.json();
                setUser(resJson[0]);
            };
            fetchFunc();
        }, [searchQuery]);
    */
    useEffect(() => {
        fetch(`./local-datas/men/json-data-items-men.json`)
            .then(resp1 => resp1.json())
            .then(users1 => {
                console.log('users1 resp =', users1);
                // console.log('users1.filter((elt)=>elt.username=', searchQuery, ') =',
                //     users1.filter((elt) => (elt.username === searchQuery)));
                console.log('users1[0].username =', users1[0].username);
                console.log('user.username =', user.username);
                const selectUser = users1.filter((elt) => (elt.username === searchQuery));
                console.log('selectUser =', selectUser);
                if (selectUser.length > 0) {
                    setUsersTable(selectUser)
                } else {
                    console.log('no corresp => selectUser =', selectUser);
                    setUsersTable([{ username: 'Def', address: {street: 'Add Street def' }}]);
                    // console.log('no corresp => usersTable =', usersTable);
                }
            })
            /* local error message */
            .catch(error => {
                console.error('Problem with your fetch operation for json-data-items-men.json, in the list of items : error ='
                    , error);
            });
    }, [user,searchQuery]);

    const fct1 = () => {
        setUser({ username: usersTable[0].username, address: usersTable[0].address });
        console.log('usersTable[0].username=', usersTable[0].username, '; setUser=> user =', user);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log('button clicked, usersTable = ', usersTable);

        usersTable.length > 0
            ?
            fct1()
            :
            console.log('no setUser=> user =', user);
    }
    return (
        <div className="div-container">
            <h1>testing HOOKS : </h1>
            <label>Enter user:</label>
            <input placeholder="user pls"
                type='search'
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
            />
            {user ? (
                <div>
                    <h1>name = </h1>
                    {user.username}
                    <h1> address = </h1>
                    {user.address.street}
                    <CardHooks>
                        <h1>my Card</h1>
                        <div className="div-button">
                            <button className="button1"
                                onClick={(e) => handleClick(e)}
                            >
                                Click me !
                            </button>
                        </div>
                    </CardHooks>
                </div>
            ) : (
                    <h1>No user found</h1>
                )}
        </div>
    );
}

export default HooksComp;
