import styles from "./Paginator.module.scss"
import React, { useState } from "react";

type PropsType = {
    onPageChanges: (pageNumber: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({ onPageChanges,
    currentPage,
    pageSize,
    totalUsersCount,
    portionSize = 10 }) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    let pages: Array<number> = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.paginator}>
            <div className={styles.button}>
                {portionNumber > 1 &&
                    <button onClick={() => { setPortionNumber(portionNumber - 1) }}>
                        previous
                    </button>
                }
            </div>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(data => {
                    return (
                        <span
                            className={`${styles.page_number} ${currentPage === data && styles.selectedPage}`}
                            onClick={(e) => { onPageChanges(data) }}>
                            {data}
                        </span>)
                })}
            <div className={styles.button}>
                {portionNumber < portionCount &&
                    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>
                        next
                    </button>
                }
            </div>
        </div >
    )
}

export default Paginator;