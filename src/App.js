import {Box, CircularProgress, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import QuestionsBlock from "./components/QuestionsBlock/QuestionsBlock";

const App = () => { 

    const [isLoading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const res = await axios.get('http://localhost:3001/questionnaires/12345');
            setQuestions(res.data.questions);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    const addAnswersHandle = (id, answer) => {
        const newAnswer = {id, answer};
        const isExist = answers.findIndex(answer => answer.id === id);
        let newAnswers = [];
        if (isExist < 0) {
            newAnswers = [...answers, newAnswer];
        } else {
            newAnswers = answers.map((answer) => answer.id === id ? newAnswer : answer)
        }
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('onsubmit', answers);
    };

    if(error) {
        return <Typography>{error}</Typography>
    };

    return (
        <div className="App">
            {isLoading ?  
                <Box sx={{paddingTop: "80px", textAlign: "center"}}><CircularProgress/></Box> 
                :
                <form onSubmit={handleSubmit}>
                    <Header/>
                    <QuestionsBlock
                        questions={questions}
                        addAnswersHandle={addAnswersHandle}
                        />
                    <Footer/>
                </form>
            }
        </div>
    );
};

export default App;
