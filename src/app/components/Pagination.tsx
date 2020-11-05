import React from "react";
import { CharacterParams, CharacterObject } from "../models/models";
import { v4 as uuidv4 } from "uuid";

interface PaginationProps {
  pageCount: CharacterObject["count"];
  currentPage: CharacterParams["currentPage"];
  onNextOrPreviousRequest: (direction: string) => void;
  onSpecificNumberClick: (page: number) => void;
}
export function Pagination({
  pageCount,
  onNextOrPreviousRequest,
  onSpecificNumberClick,
  currentPage,
}: PaginationProps) {
  function getPaginationLinks(currentPage: number, lastPage: number) {
    const array = [
      1,
      currentPage - 3 >= 2 && "previous",
      currentPage - 2 > 0 && currentPage - 2,
      currentPage - 1 > 0 && currentPage - 1,
      currentPage,
      currentPage + 1 < lastPage && currentPage + 1,
      currentPage + 2 < lastPage && currentPage + 2,
      lastPage - currentPage >= 4 && "next",
      lastPage,
    ].filter(Boolean);
    return [...new Set(array)];
  }
  return (
    <nav
      className={"navigation d-flex justify-content-center align-self-center"}
      aria-label="Page navigation example"
    >
      <ul className="pagination pagination-lg flex-wrap d-flex justify-content-center align-items-end m-0">
        <li
          key={uuidv4()}
          onClick={
            currentPage > 1
              ? () => {
                  onNextOrPreviousRequest("previous");
                }
              : () => {}
          }
          className="page-item"
        >
          <p
            className="page-link d-flex justify-content-center"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </p>
        </li>
        {getPaginationLinks(currentPage, pageCount).map((pageNumber) => {
          if (pageNumber === "previous" || pageNumber === "next") {
            return (
              <li key={uuidv4()} className={`page-item disabled inactive`}>
                <p className={`page-link d-flex justify-content-center`}>...</p>
              </li>
            );
          } else {
            return (
              <li
                key={uuidv4()}
                onClick={() => {
                  onSpecificNumberClick(Number(pageNumber));
                }}
                className={`page-item  ${
                  Number(pageNumber) === currentPage && "active"
                }`}
              >
                <p
                  className={`page-link d-flex justify-content-center ${
                    Number(pageNumber) === currentPage && "active"
                  } `}
                >
                  {Number(pageNumber)}
                </p>
              </li>
            );
          }
        })}
        <li
          onClick={
            currentPage !== pageCount
              ? () => {
                  onNextOrPreviousRequest("next");
                }
              : () => {}
          }
          className="page-item"
        >
          <p
            className="page-link d-flex justify-content-center"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </p>
        </li>
      </ul>
    </nav>
  );
}
