// import React from "react";
import css from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  
        return (
            <div className={css.buttons}>
                {options.map((option) => (
                    <button className={css.button}
                        key={option}
                        onClick={() =>
                            onLeaveFeedback(option)
                        }>
                        {option}</button>
                ))}
            </div>
        );
    }
   