class Book {
  constructor(
    title,
    author,
    ISBN,
    pubYear,
    pageNumber,
    currentPage,
    currentStatus
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.pubYear = pubYear;
    this.pageNumber = pageNumber;
    this.currentPage = currentPage;
    this.currentStatus = currentStatus;
  }

  updateCurrentPage(currentPage) {
    this.currentPage = currentPage;
  }
  updateReadingStatus(currentStatus) {
    this.currentStatus = currentStatus;
  }
}

export default Book; 
