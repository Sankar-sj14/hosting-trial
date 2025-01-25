import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Footer = () => {
  return (
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>
      Answer1
    </AccordionContent>
    <AccordionTrigger>Question 2</AccordionTrigger>
    <AccordionContent>
      Answer2
    </AccordionContent>
    <AccordionTrigger>Question 3</AccordionTrigger>
    <AccordionContent>
      Answer3
    </AccordionContent>
    <AccordionTrigger>Question 4</AccordionTrigger>
    <AccordionContent>
      Answer4
    </AccordionContent>
  </AccordionItem>
</Accordion>

  )
}

export default Footer