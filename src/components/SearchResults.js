// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
// import { styled } from '@mui/system';

// const Card = styled('div')({
//     border: '1px solid #ddd',
//     borderRadius: '5px',
//     padding: '20px',
//     margin: '10px',
//     textAlign: 'center',
// });

// const CustomDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialog-paper': {
//         backgroundColor: '#f5f5f5',
//         borderRadius: '12px',
//         padding: theme.spacing(2),
//     },
// }));

// const StyledButton = styled(Button)({
//     backgroundColor: '#1976d2',
//     color: '#fff',
//     '&:hover': {
//         backgroundColor: '#1565c0',
//     },
// });

// const SearchResults = () => {
//     const [results, setResults] = useState([]);
//     const [error, setError] = useState(null);
//     const [dialogOpen, setDialogOpen] = useState(false);
//     const [selectedUser, setSelectedUser] = useState(null);

//     const query = new URLSearchParams(useLocation().search).get('q');

//     useEffect(() => {
//         // Perform fetch request to backend API
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`http://127.0.0.1:8000/api/search?q=${query}`);
//                 if (!response.ok) {
//                     throw new Error('No results found');
//                 }
//                 const data = await response.json();
//                 setResults(data.results);
//             } catch (err) {
//                 setError(err.message);
//             }
//         };

//         if (query) {
//             fetchData();
//         }
//     }, [query]);

//     const handleDialogOpen = (user) => {
//         setSelectedUser(user);
//         setDialogOpen(true);
//     };

//     const handleDialogClose = () => {
//         setDialogOpen(false);
//         setSelectedUser(null);
//     };

//     return (
//         <div>
//             {error ? (
//                 <p>{error}</p>
//             ) : results.length > 0 ? (
//                 results.map((user, index) => (
//                     <Card key={index}>
//                         <h2>{user.first_name} {user.last_name}</h2>
//                         <p>{user.address}</p>
//                         <StyledButton onClick={() => handleDialogOpen(user)}>
//                             Fetch Details
//                         </StyledButton>
//                     </Card>
//                 ))
//             ) : (
//                 <p>Loading...</p>
//             )}

//             {dialogOpen && selectedUser && (
//                 <CustomDialog open={dialogOpen} onClose={handleDialogClose}>
//                     <DialogTitle>User Details</DialogTitle>
//                     <DialogContent>
//                         <p>First Name: {selectedUser.first_name}</p>
//                         <p>Last Name: {selectedUser.last_name}</p>
//                         <p>Address: {selectedUser.city}</p>
//                         <p>Phone Number: {selectedUser.contact_number}</p>
//                     </DialogContent>
//                     <DialogActions>
//                         <StyledButton onClick={handleDialogClose}>Close</StyledButton>
//                     </DialogActions>
//                 </CustomDialog>
//             )}
//         </div>
//     );
// };

// export default SearchResults;



import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { styled } from '@mui/system';

const Card = styled('div')({
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
});

const CustomDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        backgroundColor: '#f5f5f5',
        borderRadius: '12px',
        padding: theme.spacing(2),
    },
}));

const StyledButton = styled(Button)({
    backgroundColor: '#1976d2',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#1565c0',
    },
});

const SearchResults = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const query = new URLSearchParams(useLocation().search).get('q');

    useEffect(() => {
        // Perform fetch request to backend API
        const fetchData = async () => {
            try {
                const response = await fetch(`https://user-search-girman.onrender.com/api/search/?q=${query}`);
                
                if (!response.ok) {
                    throw new Error('No results found');
                }
                const data = await response.json();
                setResults(data.results);
            } catch (err) {
                setError(err.message);
            }
        };

        if (query) {
            fetchData();
        }
    }, [query]);

    const handleDialogOpen = (user) => {
        setSelectedUser(user);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        setSelectedUser(null);
    };

    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : results.length > 0 ? (
                results.map((user, index) => (
                    <Card key={index}>
                        <h2>{user.first_name} {user.last_name}</h2>
                        <p>{user.address}</p>
                        <StyledButton onClick={() => handleDialogOpen(user)}>
                            Fetch Details
                        </StyledButton>
                    </Card>
                ))
            ) : (
                <p>Loading...</p>
            )}

            {dialogOpen && selectedUser && (
                <CustomDialog open={dialogOpen} onClose={handleDialogClose}>
                    <DialogTitle>User Details</DialogTitle>
                    <DialogContent>
                        <p>First Name: {selectedUser.first_name}</p>
                        <p>Last Name: {selectedUser.last_name}</p>
                        <p>Address: {selectedUser.city}</p>
                        <p>Phone Number: {selectedUser.contact_number}</p>
                    </DialogContent>
                    <DialogActions>
                        <StyledButton onClick={handleDialogClose}>Close</StyledButton>
                    </DialogActions>
                </CustomDialog>
            )}
        </div>
    );
};

export default SearchResults;
