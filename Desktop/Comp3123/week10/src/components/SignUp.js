import React, { useRef } from 'react';

export default function SignUp() {
    const firstnameRef = useRef();  // Create ref for firstname
    const lastnameRef = useRef();   // Create ref for lastname

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent form default submission

        const data = {
            fnm: firstnameRef.current.value,  // Access the value of firstnameRef
            lnm: lastnameRef.current.value,   // Access the value of lastnameRef
        };

        console.log(data);  // Log the data from the inputs
    };

    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                First Name:
                <input
                    type="text"
                    ref={firstnameRef}  // Use the useRef hook here
                    placeholder="Enter first name"
                /><br/>
                Last Name:
                <input
                    type="text"
                    ref={lastnameRef}  // Use the useRef hook here
                    placeholder="Enter last name"
                /><br/>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}

