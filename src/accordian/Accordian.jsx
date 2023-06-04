import React, { useState } from 'react';
import { questions } from './Api';
import { MyAccordian } from './MyAccordian';

export const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
        <div className=' w-[1840px] h-[960px] bg-blue-300 relative py-32 px-[600px] flex flex-row'>
            <section className='w-[500px] border-2 border-black h-[800px]  items-center justify-center p-8 bg-white absolute  rounded-md text-xl'>
                <h1 className='bg-blue-500 px-12 py-2 text-lg font-bold'>react interview question and answer</h1>
                {data.map((element) => {
                    //const { id, question, answer } = element;
                    return (<MyAccordian key={element.id} {...element} />);
                })}
            </section>
        </div>
    )
}
