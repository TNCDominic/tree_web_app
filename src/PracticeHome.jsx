import React from "react";
import { theme } from "./constant/theme"
import {Box} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import TopNavBar from "./components/side_navbar";
import { useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Carousel from 'react-material-ui-carousel'
import './css/PracticeHome.css'


const shuffleArray = (array) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  };

const switchChoiceValues = (object) => {
    const choices = ['Choice_0', 'Choice_1', 'Choice_2', 'Choice_3'];
    const randomizedChoices = shuffleArray(choices);
    const switchedObject = {...object};

    randomizedChoices.forEach((choice, index) => {
        switchedObject[choice] = object[choices[index]]
    })

    return switchedObject
}

function PracticeHome(){
    const [disabledInd, setdisabledInd] = useState([]);
    const [selectedQs, setselectedQs] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./ISA_QBank_2024Dec.json', {
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
                const data = await response.json();
                return data
            } catch (error) {
                console.log(error)
            }
        };

        const getRandomObjects = async () => {
            try {
                const jsonData = await fetchData();
                
                const jsonKeys = Object.keys(jsonData)
                const selectedObjects = [];
                const dataLength = jsonKeys.length;
                const selectedIndices = [];
        
                while (selectedObjects.length < 10){
                    const randomIndex = Math.floor(Math.random() * dataLength);
                    var questionName = `Question ${randomIndex+1}`
                    if (!selectedIndices.includes(randomIndex)) {
                        selectedIndices.push(randomIndex);
                        selectedObjects.push(switchChoiceValues(jsonData[questionName]));
                    }
                }
                return selectedObjects

            } catch (error){
                console.log(error)
            }

        }

        getRandomObjects().then(
            (result)=>{setselectedQs(result)}
            ).catch(
                (error)=>{console.log(error)}
                )      
    }, [])

    const isMobile = window.innerWidth <= 767;

    var navButtonsProps = {};
    if (isMobile) {
      navButtonsProps={style:{display:'none'}};
    }

    function Button({item_i, q_no, value, handleClick}){
        return(
            <button 
            value={value}
            className='q_choice' 
            disabled={disabledInd.includes(q_no)}
            onClick={(e) => handleClick(e)}
            style={{
                background:
                q_no < history.length
                ? history[q_no].selected_ind == value
                    ? history[q_no].correct == true
                        ? "#6D8C0040"
                        : "#AA180340"
                    : "white"
                : "white"
            }}>
                {item_i}
            </button>
            )
    }


    function MC_container(props){
        const { _, count } = props;

        const handleClick = (event) => {
            var histories = [...history];
            var answered_qs = [...disabledInd];

            answered_qs.push(count);
            setdisabledInd(answered_qs);
            if (props.item.Answer === event.target.innerText){
                histories.push({'selected_ind': event.target.value, 'correct':true})
            } else {
                histories.push({'selected_ind': event.target.value, 'correct':false})
            }
            setHistory(histories)
        };

        return (
            <div>
                <h1>Question {count+1}</h1>
                <h2>{props.item.Question}</h2>   
                <Grid container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={{xs:2, md:3}} 
                    columns={{xs:4, sm:8, md:12}}>
                    {
                        [props.item.Choice_0, props.item.Choice_1, props.item.Choice_2, props.item.Choice_3].map(
                            (item_i, key) => (
                                <Grid item key={key} xs={2} sm={4} md={6}>
                                    <Button item_i={item_i} q_no={count} value={key} handleClick={handleClick}/>
                                </Grid>
                            )
                        )
                    }

                </Grid>
            </div>
        )
    }

    return (
        <>
        <ThemeProvider theme={theme}>
            <TopNavBar  title={"Practice"}/>
            <Box sx={{ height:"fit-content", 
                       minHeight:"80vh",
                       margin:'3%',
                       padding:"2%",
                       border:'5px solid', 
                       borderColor:'primary.light',
                       backgroundColor: 'primary.blogTextbg',
                       borderRadius: '20px' }}>

                <div>
                    {selectedQs ? (
                        <Carousel 
                            className="carousel" 
                            autoPlay={false} 
                            animation="slide"     
                            indicatorContainerProps={{
                                style: {
                                    marginTop: '50px', 
                                }
                            }}
                            indicatorIconButtonProps={{
                                style: {
                                    outline:"none"
                                }
                            }}
                            navButtonsProps={navButtonsProps}
                            >
                            {
                                selectedQs.map((item, count) => (
                                    <MC_container key={count} item={item} count={count}/>
                                ))
                            }
                        </Carousel>
                        ) : (<p>Loading data...</p>)
                    }
                </div>
            </Box>
        </ThemeProvider>
        </>
    )
}

export default PracticeHome