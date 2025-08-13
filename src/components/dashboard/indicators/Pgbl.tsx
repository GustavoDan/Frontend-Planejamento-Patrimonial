const Pgbl = () => {
    return (
        <div className="bg-[#1B1B1B] rounded-[2rem] flex flex-col gap-2 font-workSans text-base text-[#D9D9D9] py-3 px-9 w-full font-bold">
            <div className="flex flex-col gap-4">
                <span className="text-lg text-[#DADADA]">PGBL</span>
                <div className="flex flex-col text-nowrap items-center justify-center">
                    <span className="text-[#5BD64D] text-4xl">R$ 100.000</span>
                    <span className="text-[#949494] text-base font-medium">
                        Aporte anual: R$0,00
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Pgbl;
