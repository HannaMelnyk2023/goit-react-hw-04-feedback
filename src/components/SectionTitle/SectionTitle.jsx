// import React from "react";
import css from "./SectionTitle.module.css";
export default function SectionTitle ({ title, children }) {
        return (
            <section className={css.section}>
                <h2>{title}</h2>
                {children}
            </section>
        );
    }
