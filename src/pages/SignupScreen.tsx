import { Link } from 'react-router'
import Input from '../components/Input'
import RadioInput from '../components/RadioInput'

const SignupScreen = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[375px] h-[812px] bg-[#F7F8F9] border-2 border-[hsl(0,0%,92%)] relative pl-[20px] pt-[40px] flex flex-col justify-between pb-[30px]">
                <div className='flex flex-col gap-[22px]'>
                    <h1 className='w-[188px] h-[69px] text-[28px] font-rubik text-[#1D2226] leading-9 font-medium'>Create your PopX account</h1>
                    <div className='flex flex-col gap-[20px]'>
                        <Input label="Full Name" placeholder="Enter full name" />
                        <Input label='Phone number' placeholder='Enter phone number' />
                        <Input label='Email Address' placeholder='Enter email address' />
                        <Input label='Password' placeholder='Enter password' />
                        <Input label='Company name' placeholder='Enter company name' />
                    </div>
                    <RadioInput />
                </div>

                <Link to={"/profile"}><button className="w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] text-[16px] text-white font-rubik cursor-pointer">Create Account</button></Link>
            </div>

        </div>
    )
}

export default SignupScreen