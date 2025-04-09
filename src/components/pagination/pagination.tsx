import { FC } from 'react'
import styles from './pagination.module.scss'

export const Pagination: FC<{
  currentPage: number
  totalPages: number
  onClickPage: (page: number) => void
}> = ({ currentPage, totalPages, onClickPage }) => {
  const currentPageIndex = currentPage + 1

  return (
    <div>
      {currentPageIndex >= 2 && (
        <button
          className={styles.paginationButton}
          onClick={() => onClickPage(currentPage - 1)}
        >
          {currentPageIndex - 1}
        </button>
      )}

      <button className={styles.paginationButtonSelected}>
        {currentPageIndex}
      </button>

      {currentPageIndex < totalPages && (
        <button
          className={styles.paginationButton}
          onClick={() => onClickPage(currentPage + 1)}
        >
          {currentPageIndex + 1}
        </button>
      )}
    </div>
  )
}
