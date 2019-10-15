import React from "react";
import { CommonHelper } from "../helpers";
import "../assets/styles/carousel-history-table.scss";
export const CaraouselHistoryTable = props => {
  const { updateHistory = [] } = props;
  if (updateHistory.length === 0) {
    return <section className="message">No Record Found</section>;
  }
  const sortedHistory = updateHistory.reverse();
  return (
    <section className="update-history-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>No. Of Slides</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {sortedHistory.map((data, index) => {
            const { noOfSlides = "", createdAt = "" } = data;
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{noOfSlides}</td>
                <td>{CommonHelper.formatDate(createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
