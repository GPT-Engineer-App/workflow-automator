import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [stages, setStages] = useState([]);

  const addStage = () => {
    setStages([...stages, { type: "text", content: "" }]);
  };

  const updateStage = (index, type, content) => {
    const updatedStages = [...stages];
    updatedStages[index] = { type, content };
    setStages(updatedStages);
  };

  const deleteStage = (index) => {
    const updatedStages = stages.filter((_, i) => i !== index);
    setStages(updatedStages);
  };

  const executeWorkflow = () => {
    // TODO: Implement the logic to execute the workflow
    console.log("Executing workflow with stages:", stages);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Workflow Automation App
      </Heading>
      <VStack spacing={4} align="stretch">
        {stages.map((stage, index) => (
          <Box key={index} borderWidth={1} borderRadius="md" p={4}>
            <Flex justify="space-between" align="center" mb={2}>
              <Text fontWeight="bold">Stage {index + 1}</Text>
              <Button size="sm" leftIcon={<FaTrash />} onClick={() => deleteStage(index)}>
                Delete
              </Button>
            </Flex>
            <Input placeholder="Enter stage type (text or file)" value={stage.type} onChange={(e) => updateStage(index, e.target.value, stage.content)} mb={2} />
            {stage.type === "text" ? (
              <Textarea placeholder="Enter text content" value={stage.content} onChange={(e) => updateStage(index, stage.type, e.target.value)} />
            ) : (
              <Input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  // TODO: Handle file upload and update stage content
                  console.log("Selected file:", file);
                }}
              />
            )}
          </Box>
        ))}
        <Button leftIcon={<FaPlus />} onClick={addStage}>
          Add Stage
        </Button>
      </VStack>
      <Button mt={8} colorScheme="blue" onClick={executeWorkflow}>
        Execute Workflow
      </Button>
    </Box>
  );
};

export default Index;
