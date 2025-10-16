
const ProfileScreen = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[375px] h-[812px] bg-[#F7F8F9] border-2 border-[hsl(0,0%,92%)] flex flex-col pb-[36px] justify-between">
                <div>
                    <h1 className='text-[18px] font-rubik bg-white w-full px-[15px] pt-[27px] pb-[19px] shadow-xs'>Account Settings</h1>
                    <div className='pt-[30px] pb-[20px] px-[20px] flex flex-col gap-[30px] border-b-2 border-dashed border-[#CBCBCB]'>
                        <div className='flex gap-[20px]'>
                            <div className='relative'>
                                <img src="/profile.png" alt="" className='w-[76px] h-[76px]' />
                                <img src="/cam.png" alt="" className='w-[21px] h-[23px] absolute bottom-1 -right-1' />
                            </div>
                            <div>
                                <h1 className='text-[15px] font-rubik font-medium'>Marry Doe</h1>
                                <h1 className='text-[14px] font-rubik font-light'>Marry@Gmail.com</h1>
                            </div>
                        </div>
                        <h1 className='text-[14px]'>
                            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                        </h1>
                    </div>
                </div>

                <hr className='border-b-2 border-dashed border-[#CBCBCB]' />
            </div>
        </div>
    )
}

export default ProfileScreen