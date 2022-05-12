import Question from "../Question/Question";
import {Box} from "@mui/material";

const QuestionsBlock = ({questions, addAnswersHandle}) => {
    return (
        <Box>
            {questions.map((question) => {
                return (
                    <Question
                        key={question.id}
                        addAnswersHandle={addAnswersHandle}
                        {...question}
                    />
                )
            })}
        </Box>
    );
};

export default QuestionsBlock;