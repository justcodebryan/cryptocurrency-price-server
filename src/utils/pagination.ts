// Prepare for pagination
// Work In Progress
export default class Pagination {
  page: number
  pageSize: number
  total: number

  constructor(page: number, pageSize: number, total: number) {
    this.page = page
    this.pageSize = pageSize
    this.total = total
  }

  get startIndex(): number {
    return (this.page - 1) * this.pageSize
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.pageSize, this.total)
  }

  get hasPrevPage(): boolean {
    return this.page > 1
  }

  get hasNextPage(): boolean {
    return this.endIndex < this.total
  }
}
