import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails(props) {

  const c = props.cohort;

  return (
    <div className={styles.box}>

      <h3
        style={{
          color: c.currentStatus === "Ongoing" ? "green" : "blue"
        }}
      >
        {c.cohortCode}
      </h3>

      <dl>
        <dt>Technology</dt>
        <dd>{c.technology}</dd>

        <dt>Start Date</dt>
        <dd>{c.startDate}</dd>

        <dt>Current Status</dt>
        <dd>{c.currentStatus}</dd>

        <dt>Coach</dt>
        <dd>{c.coach}</dd>

        <dt>Trainer</dt>
        <dd>{c.trainer}</dd>
      </dl>

    </div>
  );
}

export default CohortDetails;