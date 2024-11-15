// // src/components/Home.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/system';

// // Styled components for layout
// const Container = styled('div')({
//     textAlign: 'center',
//     marginTop: '20%',
// });

// const Input = styled('input')({
//     width: '50%',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     marginTop: '20px',
// });

// const Navbar = styled('div')({
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '20px',
//     backgroundColor: '#F5F5F5',
//     position: 'fixed',
//     width: '100%',
//     top: '0',
//     zIndex: 1000,
// });

// const NavLink = styled('a')({
//     textDecoration: 'none',
//     fontSize: '16px',
//     color: '#333',
//     fontWeight: 'bold',
//     '&:hover': {
//         color: '#007BFF',
//     },
// });

// // Function to convert strings to title case
// const toTitleCase = (str) => {
//     return str
//         .toLowerCase()  // Convert entire string to lowercase
//         .replace(/\b\w/g, (char) => char.toUpperCase());  // Capitalize the first letter of each word
// };

// const Home = () => {
//     const [query, setQuery] = useState('');
//     const navigate = useNavigate();

//     // Handle search on pressing Enter
//     const handleSearch = (e) => {
//         if (e.key === 'Enter' && query.trim()) {
//             // Normalize and navigate to the search page
//             const normalizedQuery = toTitleCase(query.trim());
//             navigate(`/search?q=${normalizedQuery}`);
//         }
//     };

//     return (
//         <div>
//             {/* Navigation Bar */}
//             <Navbar>
//                 <NavLink href="https://girmantech.com" target="_blank">Website</NavLink>
//                 <NavLink href="https://www.linkedin.com/company/girmantech" target="_blank">LinkedIn</NavLink>
//                 <NavLink href="mailto:contact@girmantech.com">Contact</NavLink>
//             </Navbar>

//             {/* Main Content */}
//             <Container>
//                 <h1>Welcome to Girman Technologies</h1>
//                 <Input
//                     type="text"
//                     placeholder="Search users..."
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     onKeyPress={handleSearch}
//                 />
//             </Container>
//         </div>
//     );
// };

// export default Home;

// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

// Styled components for layout
const Container = styled(Box)({
    textAlign: 'center',
    marginTop: '25vh', // Centers the search box vertically a bit higher
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const Input = styled('input')({
    width: '50%', // Slightly wider search input
    padding: '12px 16px', // More padding for a prominent look
    fontSize: '16px',
    borderRadius: '8px', // Increased border radius for a softer look
    border: '1px solid #ccc',
    marginTop: '20px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow to make it pop
});

// const Navbar = styled(Box)({
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '15px 5%',
//     backgroundColor: '#FFFFFF',
//     borderBottom: '1px solid #ddd',
//     position: 'fixed',
//     width: '100%',
//     top: 0,
//     zIndex: 1000,
// });

const Navbar = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px 10%',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #ddd',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
});

const Logo = styled(Box)({
    display: 'flex',
    alignItems: 'center',
});

const NavLink = styled('a')({
    marginLeft: '10 px',
    textDecoration: 'none',
    fontSize: '16px',
    color: '#333',
    fontWeight: 'bold',
    '&:hover': {
        color: '#007BFF',
    },
});

// Function to convert strings to title case
const toTitleCase = (str) => {
    return str
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Home = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    // Handle search on pressing Enter
    const handleSearch = (e) => {
        if (e.key === 'Enter' && query.trim()) {
            const normalizedQuery = toTitleCase(query.trim());
            navigate(`/search?q=${normalizedQuery}`);
        }
    };

    return (
        <Box>
            {/* Navigation Bar */}
            <Navbar>
                <Logo>
                    <img 
                        src="https://girmantech.com/Logo2.svg" 
                        alt="Girman Logo" 
                        style={{ height: '35px', marginRight: '10px' }} // Adjusted logo size
                    />
                    {/* <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333' }}>
                        Girman
                    </Typography> */}
                </Logo>
                
                <Box display="flex" gap={4}>
                    <NavLink href="/">Search</NavLink>
                    <NavLink href="https://girmantech.com" target="_blank">Website</NavLink>
                    <NavLink href="https://www.linkedin.com/company/girmantech" target="_blank">LinkedIn</NavLink>
                    <NavLink href="mailto:contact@girmantech.com">Contact</NavLink>
                </Box>
            </Navbar>

            {/* Main Content */}
            <Container>
                <Box display="flex" alignItems="center" style={{ marginBottom: '20px' }}>
                    <img
                        src="https://raw.githubusercontent.com/MohamamdAzam/Survey_App_Front/refs/heads/main/logo1.jpg"
                        alt="Girman Logo"
                        style={{ height: '100px', marginRight: '50px' }} // Reduced size for main logo
                    />
                    <Typography variant="h4" style={{ fontWeight: 'bold', color: '#333', fontSize: ' 100px' }}>
                        Girman
                    </Typography>
                </Box>
                
                <Input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleSearch}
                />
            </Container>
        </Box>
    );
};

export default Home;


