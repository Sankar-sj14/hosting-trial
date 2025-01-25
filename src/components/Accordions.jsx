import React from 'react'
import '../accordian.css';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Accordions = () => {
  return (
    <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="accordion-trigger">Question</AccordionTrigger>
            <AccordionContent className="accordion-content">
              Answer
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    </div>
  )
}

export default Accordions