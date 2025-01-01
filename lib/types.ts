import * as yup from "yup";

export type ImageType = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
};
export interface FieldConfig {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  componentType?: "input" | "textarea" | "select" | "checkbox" | "file";
  rows?: number;
  validation?: yup.StringSchema<string> | any;
  options?: Array<{ label: string; value: string }> | string[];
  isMulti?: boolean;
  defaultValue?: string | string[];
}

export interface ChartDatasetType {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

export interface TableWrapperComponentProps<T> {
  title: string;
  description?: string;
  buttonText?: string;
  buttonAction?: () => void;
  buttonDisplay?: boolean;
  tableData: {
    columns: string[];
    data: T[];
    props: ReadonlyArray<keyof T>;
  };
  actions?: boolean;
  actionTexts?: string[];
  actionFunctions?: Array<(item: T) => void>;
  topContent?: React.ReactNode;
  loading?: boolean;
  enablePagination?: boolean;
  page?: number;
  setPage?: (newPage: number) => void;
  totalPages?: number;
}

export enum IconType {
  Edit = "edit",
  Delete = "delete",
  Add = "add",
  Send = "send",
}

export type ProductMetrics = {
  product: string;
  repositories: string[];
  repositoryType: string;
  bugs: number[];
  vulnerabilities: number[];
  cyclomaticComplexity: number[];
  codeSmells: number[];
  coverage: number[];
  duplicatedLinesDensity: number[];
  reliabilityRating: string[];
  reopenedIssues: number[];
  securityHotspots: number[];
  securityRating: string[];
  frameworkUpgrade: boolean;
  bugsComputation: number[];
  vulnerabilitiesComputation: number[];
  cyclomaticComplexityComputation: number[];
  codeSmellsComputation: number[];
  coverageComputation: number[];
  duplicatedLinesDensityComputation: number[];
  reliabilityRatingComputation: string[];
  reopenedIssuesComputation: number[];
  securityHotspotsComputation: number[];
  securityRatingComputation: string[];
  semanticScore: number[];
  average: number[];
  finalAverage: number;
};

export interface ApiCallParams {
  url: string;
  method: HttpMethod;
  body?: Record<string, unknown> | FormData;
  cache?: RequestCache;
  authorization?: string;
}

export type ApiResponse<T> = {
  message: string;
  code: number;
  data: ApiResult<T> | null;
  subCode: string;
  errors: any;
};

export type ApiResult<T> = {
  results: T[];
  lowerBound: number;
  upperBound: number;
  pageIndex: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
};

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type domainType = "Backend" | "Frontend" | "ML & Data";

export interface EngineersType {
  name: string;
  jobLevel:
    | "Executive"
    | "NSS"
    | "Team Lead"
    | "Intern"
    | "Senior"
    | "Engineering Manager"
    | "Head of Engineering";
  domain: domainType[];
  id: string;
  updatedAt: string;
  createdAt: string;
}

export type UseFetchHookReturnType = {
  data: ApiResult<EngineersType> | null;
  loading: boolean;
  error: string | null;
};

export type DeleteResponse = {
  message: string;
  code: number;
  data: boolean;
  subCode: string;
  errors: any;
};

export enum ModalActionType {
  Add = "add",
  Edit = "edit",
  Delete = "delete",
}

export type Members = {
  name: string;
  jobLevel: string;
  domain: domainType[];
  id: string;
};

export type CreateRecordType = Omit<Members, "id">;

export type UseModalActionsProps<T, U> = {
  selectedItem: T | null;
  createRecord: (values: U) => Promise<void>;
  updateRecord: (id: string, values: U) => Promise<void>;
  deleteData: (id: string) => Promise<void>;
  refetch: () => void;
  creating: boolean;
  updating: boolean;
  deleting: boolean;
  errorCreating: string | null;
  errorUpdating: string | null;
  errorDeleting: string | null;
};

export type RepositoryType = {
  name: string;
  url: string;
  type: string;
  sonarQubeKey: string;
  description: string;
  semanticScoreComputation: number;
  frameworkUpgradeComputation: number;
  id: string;
  updatedAt: string;
  createdAt: string;
};

export type ProductType = {
  name: string;
  members: Members[];
  repositories: RepositoryType[];
  id: string;
  updatedAt: string;
  createdAt: string;
};

export type CreateRepositoryType = Omit<
  RepositoryType,
  "id" | "updatedAt" | "createdAt"
>;

export type CreateProductRepositoryType = Omit<
  RepositoryType,
  | "updatedAt"
  | "createdAt"
  | "semanticScoreComputation"
  | "frameworkUpgradeComputation"
>;

export type CreateProductType = Omit<
  ProductType,
  "id" | "updatedAt" | "createdAt" | "members" | "repositories"
> & {
  members: Members[];
  repositories: CreateProductRepositoryType[];
};

export interface MemberType {
  name: string;
  jobLevel: string;
  domain: string;
  id: string;
}

export interface ProductTeamRepositoryType {
  name: string;
  id: string;
  url: string;
  type: string;
  description: string;
  sonarQubeKey: string;
}

export interface ProductGroupType {
  groupName: string;
  supervisors: MemberType[];
  productTeams: ProductType[];
  id: string;
  updatedAt: string;
  createdAt: string;
}

export type CreateProductGroup = Omit<
  ProductGroupType,
  "id" | "updatedAt" | "createdAt"
>;
