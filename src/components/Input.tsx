
type InputProps = {
    label: string;
    placeholder: string;
}

const Input = ({ label, placeholder }: InputProps) => {
    return (
        <div className='w-[335px] h-[49px] relative'>
            <div className="w-fit h-[17px] bg-[#F7F8F9] opacity-100 z-10 absolute flex items-center left-[9px] px-2">
                <label htmlFor="" className="w-fit h-[15px] text-[13px] font-rubik opacity-100 flex items-center text-[#6C25FF] ">{label}</label>
            </div>
            <input type="text" placeholder={placeholder} className="w-full h-[40px] pl-3 border-[1px] border-[#CBCBCB] rounded-md text-sm outline-none absolute bottom-0" />
        </div>
    )
}

export default Input