import styled from "styled-components"
import "./Navbar.css"

function Navbar(){

    const FullbarDiv=styled.div`
        background-color:#e4be00;
        /* color:#e8e8e8; */
         display: flex;
         justify-content: space-between;
    `;
    return(
        <>
        <FullbarDiv>
        <div className="left">
            <h3>Technical Details</h3>
            <h3>Extra Curricular</h3>
            <h3>About</h3>
        </div>
        <div><h3>Contact</h3></div>
        </FullbarDiv>
        </>
    )
}
export default Navbar