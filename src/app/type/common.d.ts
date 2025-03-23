interface PaginationParams {
    page: number;
    limit: number;
    filter?: string;
  }
  
  interface PaginatedResponse<T> {
    data: T[];
    total: number;
    error: Error | null;
  }