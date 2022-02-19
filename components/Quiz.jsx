import { useState } from "react";

const QuizBody = ({ question_data, isHidden, setIsHidden, getNewQuestionHandler }) => {

    const handleClick = () =>{
        if (isHidden) {
            setIsHidden(false)
        } else{
            setIsHidden(true)
        }
    }

    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className="w-full max-w-xl p-3">
                <h1 className="font-bold text-5xl text-center text-indigo-700">
                    ბლიცები
                </h1>
                <div className="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
                    <div>
                        <p className="text-2xl font-bold">
                            {question_data.text}
                        </p>
                        <p className="text-2xl font-bold my-4 text-green-600 transition ease-in-out delay-150">
                            { isHidden || question_data.answer }
                        </p>
                        <div className="mt-6 flow-root">
                            <button onClick={getNewQuestionHandler} className="mx-2 float-right bg-blue-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
                                შემდეგი
                            </button>
                            <button onClick={handleClick} className="mx-2 float-right bg-green-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
                                {isHidden ? 'მანახე' : 'დამალე'} პასუხი 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default QuizBody;