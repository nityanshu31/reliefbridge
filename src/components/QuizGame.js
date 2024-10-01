import React, { useState, useEffect } from 'react';

// 15 questions per level
const quizData = {
  easy: [
    { question: 'What is the primary focus of the National Disaster Management Authority (NDMA) in India?', options: ['Disaster Relief', 'Disaster Preparedness', 'Disaster Prevention'], answer: 'Disaster Preparedness' },
    { question: 'Which Indian state has the highest number of COVID-19 cases?', options: ['Maharashtra', 'Delhi', 'Karnataka'], answer: 'Maharashtra' },
    { question: 'What is the role of the Indian Police Service (IPS) in disaster management?', options: ['Conducting Relief Operations', 'Creating Disaster Policies', 'Providing Medical Aid'], answer: 'Conducting Relief Operations' },
    { question: 'Which of the following is a common symptom of COVID-19?', options: ['Headache', 'Fever', 'Stomach Ache'], answer: 'Fever' },
    { question: 'What is the full form of NDRF?', options: ['National Disaster Response Force', 'National Disaster Relief Force', 'National Disaster Recovery Force'], answer: 'National Disaster Response Force' },
    { question: 'Who is responsible for managing emergency medical services in India?', options: ['Ministry of Health', 'Ministry of Home Affairs', 'Ministry of Defense'], answer: 'Ministry of Health' },
    { question: 'Which Indian state is known for frequent floods?', options: ['Gujarat', 'Kerala', 'Rajasthan'], answer: 'Kerala' },
    { question: 'What does the acronym COVID-19 stand for?', options: ['Coronavirus Disease 2019', 'Coronavirus Disease 2020', 'Corona Virus 2019'], answer: 'Coronavirus Disease 2019' },
    { question: 'In which city is the National Institute of Disaster Management located?', options: ['New Delhi', 'Mumbai', 'Bengaluru'], answer: 'New Delhi' },
    { question: 'Which Indian disaster management authority is tasked with managing earthquakes?', options: ['NDMA', 'NDRF', 'IMD'], answer: 'NDMA' },
  ],
  medium: [
    { question: 'Which Indian organization is responsible for the implementation of disaster management policies at the state level?', options: ['State Disaster Management Authority', 'NDRF', 'NDMA'], answer: 'State Disaster Management Authority' },
    { question: 'What is the primary purpose of the "Aapda Mitra" scheme?', options: ['Disaster Relief', 'Disaster Preparedness Training', 'Emergency Medical Services'], answer: 'Disaster Preparedness Training' },
    { question: 'Which Indian state has the most comprehensive disaster management system?', options: ['Uttarakhand', 'Bihar', 'West Bengal'], answer: 'Uttarakhand' },
    { question: 'What are the responsibilities of the National Disaster Response Force (NDRF)?', options: ['Disaster Recovery', 'Disaster Preparedness', 'Disaster Response'], answer: 'Disaster Response' },
    { question: 'What is the name of the Indian government’s initiative for disaster management training for community members?', options: ['Disaster Management Training Program', 'National Disaster Management Program', 'Community-Based Disaster Risk Reduction'], answer: 'Community-Based Disaster Risk Reduction' },
    { question: 'Which of the following is NOT a component of India’s disaster management framework?', options: ['Mitigation', 'Preparedness', 'Economic Development'], answer: 'Economic Development' },
    { question: 'What is the role of the Indian Red Cross Society during disasters?', options: ['Providing Relief Supplies', 'Implementing Disaster Management Policies', 'Conducting Disaster Research'], answer: 'Providing Relief Supplies' },
    { question: 'Which act governs disaster management in India?', options: ['Disaster Management Act, 2005', 'National Disaster Management Act, 2005', 'Disaster Response Act, 2005'], answer: 'Disaster Management Act, 2005' },
    { question: 'Which organization in India is responsible for early warning of natural disasters?', options: ['IMD', 'NDRF', 'NDMA'], answer: 'IMD' },
    { question: 'Which Indian city is known for its cyclone preparedness and management strategies?', options: ['Chennai', 'Kolkata', 'Visakhapatnam'], answer: 'Visakhapatnam' },
  ],
  hard: [
    { question: 'What was the focus of the National Policy on Disaster Management 2009 in India?', options: ['Preparedness and Mitigation', 'Response and Recovery', 'Policy and Legislation'], answer: 'Preparedness and Mitigation' },
    { question: 'Which Indian institution conducts research and provides training on disaster management?', options: ['National Institute of Disaster Management', 'Indian Institute of Technology', 'Indian Institute of Public Health'], answer: 'National Institute of Disaster Management' },
    { question: 'During the COVID-19 pandemic, which organization was responsible for managing the nationwide lockdown in India?', options: ['Ministry of Home Affairs', 'Ministry of Health and Family Welfare', 'NDMA'], answer: 'Ministry of Home Affairs' },
    { question: 'Which Indian state has a specialized flood management authority?', options: ['Assam', 'Uttarakhand', 'Kerala'], answer: 'Assam' },
    { question: 'What is the primary purpose of the "Integrated Coastal Zone Management" project in India?', options: ['Coastal Erosion Control', 'Disaster Preparedness', 'Flood Management'], answer: 'Coastal Erosion Control' },
    { question: 'What is the role of the Disaster Management Plan at the district level in India?', options: ['Guiding Local Disaster Response', 'Implementing National Policies', 'Setting Up National Disaster Reserves'], answer: 'Guiding Local Disaster Response' },
    { question: 'What are the main objectives of the "National Action Plan on Climate Change" in India?', options: ['Mitigation and Adaptation', 'Response and Relief', 'Policy and Research'], answer: 'Mitigation and Adaptation' },
    { question: 'What is the name of the system used for managing health emergencies in India?', options: ['Emergency Medical Response System', 'National Health Emergency Management System', 'Integrated Disease Surveillance Program'], answer: 'Integrated Disease Surveillance Program' },
    { question: 'In the context of disaster management in India, what does the acronym EWS stand for?', options: ['Early Warning System', 'Emergency Warning Service', 'Environmental Warning System'], answer: 'Early Warning System' },
    { question: 'Which Indian government body is responsible for research on natural hazards and climate change?', options: ['Indian Meteorological Department', 'National Institute of Disaster Management', 'Central Water Commission'], answer: 'Indian Meteorological Department' },
  ]
};

const QuizGame = () => {
  const [level, setLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [certificateViewed, setCertificateViewed] = useState(false); // New state to track whether certificate is viewed

  // Timer logic
  useEffect(() => {
    if (level !== null && !showResult) {
      const interval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          handleNextQuestion(); // Move to next question when time runs out
        }
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval on component unmount or when timer changes
    }
  }, [timer, level, showResult]);

  // Select level
  const handleLevelSelect = (selectedLevel) => {
    setLevel(selectedLevel);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setTimer(30);
    setSelectedOption(null);
    setShowCorrectAnswer(false);
    setCertificateViewed(false); // Reset certificate view state
  };

  // Handle answer click
  const handleAnswerClick = (option) => {
    setSelectedOption(option);
    const correctAnswer = quizData[level][currentQuestion].answer;

    // Check if the selected answer is correct
    if (option === correctAnswer) {
      setScore(score + 1);
    }

    setShowCorrectAnswer(true);

    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };

  // Move to the next question
  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData[level].length) {
      setCurrentQuestion(nextQuestion);
      setTimer(30);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
    } else {
      setShowResult(true);
    }
  };

  // Move to the previous question
  const handlePreviousQuestion = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
      setTimer(30);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
    }
  };

  // Reset quiz
  const handleReset = () => {
    setLevel(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setTimer(30);
    setSelectedOption(null);
    setShowCorrectAnswer(false);
    setCertificateViewed(false); // Reset certificate view state
  };

  // Download certificate
  const handleDownloadCertificate = () => {
    // Logic to download certificate
    alert('Downloading certificate...');
    setCertificateViewed(true);
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center'
    },
    quizContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    question: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginTop: '20px'
    },
    optionButton: {
      padding: '10px 20px',
      backgroundColor: '#f0f0f0',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    selectedOption: {
      backgroundColor: '#d3d3d3'
    },
    correctOption: {
      backgroundColor: '#4CAF50',
      color: '#fff'
    },
    incorrectOption: {
      backgroundColor: '#F44336',
      color: '#fff'
    },
    button: {
      padding: '10px 20px',
      margin: '20px 0',
      backgroundColor: '#2196F3',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    downloadButton: {
      backgroundColor: '#4CAF50'
    },
    resetButton: {
      backgroundColor: '#F44336'
    },
    timer: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333'
    }
  };

  return (
    <div style={styles.container}>
      {level === null ? (
        <div style={styles.quizContainer}>
          <h1>Select Level</h1>
          <button style={styles.button} onClick={() => handleLevelSelect('easy')}>Easy</button>
          <button style={styles.button} onClick={() => handleLevelSelect('medium')}>Medium</button>
          <button style={styles.button} onClick={() => handleLevelSelect('hard')}>Hard</button>
        </div>
      ) : (
        <div style={styles.quizContainer}>
          {!showResult ? (
            <>
              <h2 style={styles.question}>{quizData[level][currentQuestion].question}</h2>
              <div style={styles.options}>
                {quizData[level][currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    style={{
                      ...styles.optionButton,
                      ...(selectedOption === option && styles.selectedOption),
                      ...(showCorrectAnswer && option === quizData[level][currentQuestion].answer && styles.correctOption),
                      ...(showCorrectAnswer && selectedOption === option && selectedOption !== quizData[level][currentQuestion].answer && styles.incorrectOption)
                    }}
                    onClick={() => handleAnswerClick(option)}
                    disabled={showCorrectAnswer}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div style={styles.timer}>Time left: {timer} seconds</div>
              <div>
                {currentQuestion > 0 && <button onClick={handlePreviousQuestion}>Previous</button>}
                <button onClick={handleNextQuestion}>Next</button>
              </div>
            </>
          ) : (
            <div>
              <h2>Your Score: {score}</h2>
              <div>
                {certificateViewed ? (
                  <p>Thank you for playing! You have already downloaded your certificate.</p>
                ) : (
                  <>
                    {score >= 7 && (
                      <>
                        <div>
                          <h3>Congratulations!</h3>
                          <p>You have successfully completed the Rescue Riddle with an excellent score!</p>
                        </div>
                        <button style={{ ...styles.button, ...styles.downloadButton }} onClick={handleDownloadCertificate}>
                          Download Certificate
                        </button>
                      </>
                    )}
                    <button style={{ ...styles.button, ...styles.resetButton }} onClick={handleReset}>
                      Play Again
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizGame;
