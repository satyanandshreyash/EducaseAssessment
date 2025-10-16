import React from 'react'

const RadioInput = () => {
    const [isAgency, setIsAgency] = React.useState<string | null>(null);
    return (
        <div className="w-[132px] h-[47px]">
            <h1 className="text-[13px] font-rubik">Are you an Agency?</h1>
            <div className="mt-[10px] flex gap-[23px] items-center">
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        id="yes"
                        name="agency"
                        value="yes"
                        checked={isAgency === 'yes'}
                        onChange={() => setIsAgency('yes')}
                        className="accent-[#6C25FF] w-[22px] h-[22px]"
                    />
                    <label htmlFor="yes" className="font-rubik text-[13px]">
                        Yes
                    </label>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        id="no"
                        name="agency"
                        value="no"
                        checked={isAgency === 'no'}
                        onChange={() => setIsAgency('no')}
                        className="accent-[#6C25FF] w-[22px] h-[22px]"
                    />
                    <label htmlFor="no" className="font-rubik text-[13px]">
                        No
                    </label>
                </div>
            </div>
        </div>
    )
}

export default RadioInput