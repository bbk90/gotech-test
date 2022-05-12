import {Box, FormControl, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography} from "@mui/material";
import {useState} from "react";

const Question = ({
    id: questionId, 
    title, 
    isRequired, 
    options, 
    type,
    addAnswersHandle}) => {

    const [textValue, setTextValue] = useState('');

    const onChangeHandle = ({target: {value}}) => {
        setTextValue(value);
        addAnswersHandle(questionId, value);
    };

    const onSelfInputChange = ({target: {value}}) => {
        addAnswersHandle(questionId, value);
    };

    return (
        <Paper variant="outlined" sx={{margin: '10px 0'}}>
            <Box sx={{padding: '20px'}}>
                <Typography sx={{marginBottom: '10px'}}>{title} {isRequired ?
                    <span style={{color: 'red'}}>*</span> : null}</Typography>
                <FormControl sx={{width: '100%'}}>
                    {type === "multiple" && 
                        <RadioGroup onChange={onChangeHandle}>
                            {options.map(option => {
                                return (
                                    <Box key={option.id}>
                                        <FormControlLabel
                                            value={option.title}
                                            control={<Radio size="small" required={isRequired}/>}
                                            label={(<Box sx={{display: 'flex'}}>
                                                <Box sx={{marginRight: '20px'}}>{option.title}</Box>
                                                {option.input && (<TextField fullWidth onChange={onSelfInputChange}
                                                                             variant="standard"/>)}
                                            </Box>)}
                                        />
                                    </Box>)
                            })}
                        </RadioGroup>}
                    {type === "text" && 
                        <TextField
                            variant="standard"
                            value={textValue}
                            onChange={onChangeHandle}
                            placeholder="Your answer"
                        />}
                </FormControl>
            </Box>
        </Paper>
    );
};

export default Question;