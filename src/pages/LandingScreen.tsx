import { Link } from "react-router"

const LandingScreen = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[375px] h-[812px] bg-[#F7F8F9] border-2 border-[hsl(0,0%,92%)]">
                <div className="flex flex-col gap-2.5 ml-[20px] mt-[549px] w-min">
                    <h1 className="text-[28px] font-rubik font-medium text-[#1D2226] w-[231px] h-[33px]">Welcome to PopX</h1>
                    <div className="w-[232px] h-[48px]">
                        <h2 className="text-left font-normal text-[18px] leading-[26px] font-rubik tracking-[0px] text-[#1D2226] opacity-60 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
                    </div>

                </div>
                <div className="mx-[20px] mt-[29px] flex flex-col gap-2.5">
                    <Link to={"/signup"}><button className="text-[#FFFFFF] font-rubik font-medium text-[16px] text-center w-full bg-[#6C25FF] h-[46px] rounded-[6px] opacity-100 cursor-pointer">Create Account</button></Link>
                    <Link to={"/login"} ><button className="text-[#1D2226] font-rubik font-medium text-[16px] text-center w-full bg-[#6C25FF4B] h-[46px] rounded-[6px] opacity-100 cursor-pointer">Already Registered? Login</button></Link>
                </div>
            </div>
        </div>
    )
}

export default LandingScreen