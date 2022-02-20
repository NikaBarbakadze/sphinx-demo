import Head from 'next/head'
import { useState } from 'react'
import QuizBody from '../components/Quiz'
import getRndInteger from '../helpers/getRndNumber'

export default function Home({question_data}) {

  const [questionData, setQuestionData] = useState(question_data);
  const [isHidden, setIsHidden] = useState(true);


  const getNewQuestionHandler = () => {
    let rndNumber = getRndInteger(1, 1449)

    setQuestionData(getNewQuestion(rndNumber));
  }

    async function getNewQuestion(rndNumber) {
      const req = await fetch(`https://sphinx-project-demo-default-rtdb.europe-west1.firebasedatabase.app/questions_list/${rndNumber}.json`);
      const data =  await req.json();
      setQuestionData(data);
      setIsHidden(true);
    }

  return (
    <>
      <Head>
        <title>ბლიცები</title>
        <link
            rel="preload"
            href="/fonts/FiraGo-Bold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/FiraGo-Regular.woff2"
            as="font"
            crossOrigin=""
          />
      </Head>
      <main className='antialiased text-gray-700 bg-gray-100'>
        <QuizBody question_data={questionData} isHidden={isHidden} setIsHidden={setIsHidden} getNewQuestionHandler={getNewQuestionHandler}/>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  let rndNumber = getRndInteger(1, 1449)

  const req = await fetch(`https://sphinx-project-demo-default-rtdb.europe-west1.firebasedatabase.app/questions_list/${rndNumber}.json`);
  const data =  await req.json();

  return {
      props: { question_data: data}
  }
}