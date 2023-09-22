import { Link } from "react-router-dom"
import { GradientBackground, StyledButton } from "../Components/StyledElements/StyledElements"


const FirstPage = () => {

    return (
        <div >
            <GradientBackground>

                <div className="text-center mx-6 pt-40">
                    <h1 className="text-5xl text-white  styled-font">Welcome to Task Manager</h1>
                    <h3 className="text-3xl text-white my-6 styled-font2">Keep everything in the same place—even if your team isn’t. <br /> Bring a fresh perspective to the task at hand.</h3>
                </div>

                <Link to={'/'}>
                    <StyledButton className="flex">
                        <p className="styled-font text-white  text-2xl mx-auto my-auto">Go To Home</p>
                    </StyledButton>
                </Link>
               
<div className=" absolute bottom-0 inset-x-0">
<p className="pb-4 text-center text-white styled-font">Copyright © 2023 Ruhul Muazzam Rafat</p>
    
    </div>         
            </GradientBackground>
        </div>
    )
}

export default FirstPage