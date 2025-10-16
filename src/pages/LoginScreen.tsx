// import Input from "../components/Input"

import { Link } from "react-router"
import Input from "../components/Input"

const LoginScreen = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[375px] h-[812px] bg-[#F7F8F9] border-2 border-[hsl(0,0%,92%)] px-[20px] py-[40px] flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className="w-[188px] h-[69px] text-[28px] text-[#1D2226] font-rubik font-medium leading-9">Signin to your PopX account</h1>
                    <h2 className="w-[232px] h-[48px] text-[#1D2226] opacity-60 leading-[26px] text-[18px] font-rubik">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
                </div>
                <div className="flex flex-col gap-[14px]">
                    <Input label="Email Address" placeholder="Enter email address" />
                    <Input label="Password" placeholder="Enter password" />
                    <Link to={"/profile"}><button className="w-[335px] h-[46px] mt-[14px] bg-[#CBCBCB] rounded-[6px] text-[16px] text-white font-rubik cursor-pointer">Login</button></Link>
                </div>

            </div>
        </div>
    )
}

export default LoginScreen