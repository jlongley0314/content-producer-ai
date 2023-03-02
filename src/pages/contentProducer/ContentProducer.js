import React, { useState } from "react";
import { Paper } from "@mui/material";
import Controls from "../../components/shared/muiControls/Controls";
import * as appData from "../../constants/appData";
import { COLORS } from "../../constants";
import { OpenAIApi, Configuration } from "openai";
import AppHeader from "../../components/featured/AppHeader";

function ContentProducer() {
  const [selectedContextType, setSelectedContextType] = useState("");
  const [contextCriteria, setcontextCriteria] = useState("");
  const [returnedResults, setreturnedResults] = useState("");

  const onSelectContextType = (event) => {
    const id = event.target.value;
    setSelectedContextType(id);
  };
  const onSelectContextCriteria = (event) => {
    const id = event.target.value;
    setcontextCriteria(id);
  };

  const handleSubmitBtn = () => {
    const strPrompt = contextCriteria + " " + selectedContextType;

    const configuration = new Configuration({
      //organization: "YOUR_ORG_ID",
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion({
        // engine: 'davinci',
        model: "text-davinci-003",
        prompt: strPrompt,
        max_tokens: 100,
        temperature: 0.9,
        top_p: 1,
        presence_penalty: 0,
        frequency_penalty: 0,
      })
      .then((response) => {
        setreturnedResults(response.data.choices[0].text);
      });
  };

  return (
    <>
      <AppHeader />
      <Paper
        elevation={8}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          flex: 1,
          marginRight: "40px",
          marginLeft: "40px",
          marginTop: "20px",
          height: "1000px",
        }}
      >
        <div style={{ marginTop: "30px" }}>
          <Controls.Select
            variant="outlined"
            name="contentType"
            label="Content Type"
            value={selectedContextType}
            onChange={onSelectContextType}
            size="small"
            options={appData.getContextTypes()}
            style={{
              width: "800px",
              margin: "10px",
              backgroundColor: COLORS.white,
            }}
          />
        </div>
        <div>
          <Controls.Input
            variant="outlined"
            name="contentCriteria"
            label="Enter Content Criteria"
            value={contextCriteria}
            onChange={onSelectContextCriteria}
            size="small"
            multiline
            disabled={false}
            rows={5}
            style={{
              width: "800px",
              margin: "10px",
              backgroundColor: COLORS.white,
            }}
          />
        </div>
        <div>
          <Controls.Button
            variant="contained"
            color="primary"
            size="large"
            text="GENERATE ANSWER"
            type="button"
            onClick={() => handleSubmitBtn()}
            style={{ width: "800px", margin: "10px" }}
          />
        </div>
        <div>
          <Controls.Input
            variant="outlined"
            name="searchResults"
            label="Results appear here"
            value={returnedResults}
            //onChange={onSelectContextCriteria}
            size="small"
            multiline
            disabled={true}
            rows={10}
            style={{
              width: "800px",
              margin: "10px",
              backgroundColor: COLORS.white,
            }}
          />
        </div>
      </Paper>
    </>
  );
}

export default ContentProducer;
