import React from 'react'
import { ProCard } from './Card'
import { p1,p2,p3,p4 } from '../assets'
const Projects = () => {
  return (
    <div className='container mx-auto min-h-screen dark:bg-black '>
        <h1 className='text-center text-4xl text-white'>PROJECTS</h1>
      <div className="slider h-auto p-5  flex justify-between overflow-x-scroll scrollbar-none md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProCard title={'FAKE ADVERTISMENT DETECTION'} 
        content={`Developed a Fake Advertisement Detection system using Logistic Regression, achieving high accuracy in distinguishing deceptive content through feature engineering and classification techniques.`}
        img={p1}
        link={`https://github.com/dinu3509/LAPML/blob/master/Fake%20Advertisements%20using%20%20Logistic%20Regression/main.ipynb`}
        ></ProCard>

        <ProCard title={'HANDWRITTEN DIGIT RECOGNITION'} 
        content={`Built a Handwritten Digit Recognition system using Logistic Regression, leveraging the MNIST dataset to classify digits with high accuracy through feature scaling and multiclass classification techniques.`}
        img={p2}
        link={`https://github.com/dinu3509/LAPML/blob/master/Digit%20Recognition%20using%20LR/main.ipynb`}
        ></ProCard>

        <ProCard title={'MUSHROOM CLASSIFICATION'} 
        content={`Built a Mushroom Classification system using Decision Trees, achieving 99.02% accuracy with Gini and 96.37% with entropy. Tuned model depth for optimal performance and visualized tree structure for feature insights.`}
        img={p3}
        link={`https://github.com/dinu3509/LAPML/blob/master/Decision%20Tree%20Classification%20for%20Mushroom/main.ipynb`}
        ></ProCard>

        <ProCard title={'STOCK PRICE PREDICTION'} 
        content={`Implemented a Stock Price Prediction model using Linear Regression, analyzing trends across different timeframes to forecast future prices with a focus on historical data patterns and market indicators.`}
        img={p4}
        link={`https://github.com/dinu3509/LAPML/blob/master/Stock%20Price%20Prediction%20Using%20Linear%20Regression/lr.ipynb`}
        ></ProCard>

      </div>
    </div>
  )
}

export default Projects
