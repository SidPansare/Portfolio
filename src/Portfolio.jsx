import styled from 'styled-components'
import profilepic from './images/sidblazer.jpg';
import Navbar from './Navbar.jsx'
//#efd300;
function Portfolio(){

    const HeadingDiv=styled.div`
        margin:1rem;
        margin-left: 1rem;
        padding-top:1rem;
        /* margin-top: 3rem; */
        /* border:2px solid red; */
        display:flex;
    `;
    const ProfileImage=styled.img`
        border: 1px solid black;
        max-height: 200px;
        max-width: 150px;
        margin:1rem;
        /* margin-left: 2rem;
        margin-top: 2rem; */
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
    `;
    const NameHeadingDiv=styled.div`
        background-color: #2b2b2b;
        /* border:1px solid yellow; */
        margin:auto;
        /* padding:1rem; */
    `;
    const SidPansare=styled.p`
        color: #e8e8e8;
        /* border:1px solid green; */
        text-align: center;
        /* padding:.5rem; */
        margin:0px;
        font-size:48px;
    `;
    const Designation=styled.p`
         /* border:1px solid blue; */
         text-align: center;
         /* padding:.5rem; */
         color: #e4be00;
         margin:0px;
         font-size:28px;
    `;
    const TopBg=styled.div`
        background-color: #2b2b2b;
        text-align: center;
    `;


    return(
        <>
        <div>
            <TopBg>
                <HeadingDiv>
                <ProfileImage src={profilepic} alt='Sid Picture' />
                <NameHeadingDiv>
                    <SidPansare>
                        SIDDHARTH PANSARE
                    </SidPansare>
                    <Designation>
                        Cyber Security Analyst
                    </Designation>
                </NameHeadingDiv>
                </HeadingDiv>
                <Navbar />
                    
                
            </TopBg>
        </div>
        </>
    )
}
export default Portfolio