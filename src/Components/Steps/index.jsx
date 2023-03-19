import React, { useState } from "react";
import { useCategoryContext } from "../../Context/CartContext";
import {
  Circle,
  Label,
  StepItem,
  SubStep,
  SubStepCircle,
  SubStepContainer,
  SubStepLabel,
  UserFlow,
} from "./style";

export default function Steps() {
  const {
    state: { categories },
  } = useCategoryContext();


// function to create array Of Objects from selected categories
// and add subSteps for each category
  const selectedCategories = categories.map((category) => {
    return {
      label: category.value,
      subSteps: [
        { label: "الموقع" },
        { label: "التقويم" },
        { label: "تفاصيل" },
      ],
    };
  });

  // add the array of selected categories to steps arr as a step
  const steps = [
    { label: "إختيار التصنيفات" },
    { label: "معلومات الوحدات" },
    selectedCategories,
    { label: "نتائج الإضافة" },
  ];

  console.log("categories", categories);

  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <UserFlow>
      <div>
        {steps.map((step, index) =>
        // if the data type ia array then display the selected categories with the sup Steps for each category
          Array.isArray(step) ? (
            step.map((category, catIndex)=>(    
              
              <>
            <StepItem key={index}>
            <Circle
              isActive={activeStep === index+catIndex}
              onClick={() => handleStepClick(index+catIndex)}
            >
              {index+catIndex + 1}
            </Circle>
            <Label>تصنيف {catIndex+1} {category.label}</Label>

          </StepItem>
          {activeStep === index+catIndex && category.subSteps && (
          <SubStepContainer>
              {category.subSteps.map((subStep, subIndex) => (
                <SubStep key={subIndex}>
                  <SubStepCircle isActive={false}>
                    {`${subIndex + 1}`}
                  </SubStepCircle>
                  <SubStepLabel>{subStep.label}</SubStepLabel>
                </SubStep>
              ))}
            </SubStepContainer>)}
              </>
            ))
            
          ) : (
            <StepItem key={index}>
              <Circle
                isActive={activeStep === index}
                onClick={() => handleStepClick(index)}
              >
                {index + 1}
              </Circle>
              <Label>{step.label}</Label>
            </StepItem>
          )
        )}
      </div>
    </UserFlow>
  );
}
// {activeStep === index+catIndex && category.subSteps && (
//   // <SubStepContainer>
//   //   {category.subSteps.map((subStep, subIndex) => (
//   //     <SubStep key={subIndex}>
//   //       <SubStepCircle isActive={false}>
//   //         {`${subIndex + 1}`}
//   //       </SubStepCircle>
//   //       <SubStepLabel>{subStep.label}</SubStepLabel>
//   //     </SubStep>
//   //   ))}
//   // </SubStepContainer>
// // )}