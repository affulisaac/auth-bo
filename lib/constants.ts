import {
  ArchiveBoxIcon,
  ClipboardDocumentCheckIcon,
  FolderIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import * as yup from "yup";
import { FieldConfig, ProductMetrics } from "./types";

export const BRAND_NAME: string = "Hubtel CCI TOOL";

export const BRAND_DESCRIPTION: string =
  "Hubtel CCI TOOL is a tool for managing engineers, products, CCIs and more.";

export const BRAND_URL: string = "";

export const BRAND_IMAGE: string = "https://dev-docs.hubtel.com/logo.png";

export const navigation = [
  { name: "All Engineers", href: "/all-engineers", icon: UserGroupIcon },
  { name: "Product Groups", href: "/product-groups", icon: FolderIcon },
  { name: "Products", href: "/products", icon: ClipboardDocumentCheckIcon },
  { name: "Repositories", href: "/repositories", icon: ArchiveBoxIcon },
  // {
  //   name: "Code Quality Roadmap",
  //   href: "/code-quality-roadmap",
  //   icon: ShieldCheckIcon,
  // },
];

export const userNavigation = [{ name: "Sign out", href: "/api/auth/signout" }];
export const metrics = [
  { id: 1, name: "CCI Table", href: "/cci-table", initial: "T" },
  { id: 2, name: "CCI Metrics", href: "/cci-metrics", initial: "M" },
  { id: 3, name: "CCI Trends", href: "/cci-trends", initial: "T" },
];

export const domains = ["Frontend", "Backend", "ML & Data"];
export const products = ["Hubtel Pay", "Hubtel Merchant", "Hubtel Checkout"];
export const teams = ["Frontend Team", "Backend Team", "ML & Data Team"];
export const repos = [
  {
    name: "Hubtel Pay",
    domain: "Frontend",
    url: "https://example.com/repo1",
    sonarqubeprojectkey: "hubtel-pay",
  },

  {
    name: "Hubtel Pay",
    domain: "Backend",
    url: "https://example.com/repo4",
    sonarqubeprojectkey: "hubtel-pay",
  },
  {
    name: "Hubtel Merchant",
    domain: "Backend",
    url: "https://example.com/repo5",
    sonarqubeprojectkey: "hubtel-merchant",
  },
  {
    name: "Hubtel Checkout",
    domain: "Backend",
    url: "https://example.com/repo6",
    sonarqubeprojectkey: "hubtel-checkout",
  },
];

export const employees: {
  name: string;
  domain: "Frontend" | "Backend" | "ML & Data";
  email: string;
}[] = [
  {
    name: "Emmanuel Odame",
    domain: "Frontend",
    email: "emmanuel@hubtel.com",
  },
  {
    name: "Gideon Ninsau",
    domain: "Frontend",
    email: "gideon@hubtel.com",
  },
  {
    name: "Tony Baidoo",
    domain: "Frontend",
    email: "tony@hubtel.com",
  },
  {
    name: "Isaac Afful",
    domain: "Frontend",
    email: "isaac@hubtel.com",
  },
  {
    name: "Kennedy Lodonu",
    domain: "Backend",
    email: "kennedy@hubtel.com",
  },
  {
    name: "Wise Doho",
    domain: "Backend",
    email: "wise@hubtel.com",
  },
  {
    name: "Whitson Dzimah",
    domain: "Backend",
    email: "whitson@hubtel.com",
  },
];

export const productGroups: {
  name: string;
  products: string[];
  supervisors: string[];
}[] = [
  {
    name: "Hubtel Pay",
    products: ["Hubtel Pay", "Hubtel Merchant", "Hubtel Checkout"],
    supervisors: ["Emmanuel Odame", "Gideon Ninsau"],
  },
  {
    name: "Hubtel Merchant",
    products: ["Hubtel Pay", "Hubtel Merchant", "Hubtel Checkout"],
    supervisors: ["Tony Baidoo", "Isaac Afful"],
  },
  {
    name: "Hubtel Checkout",
    products: ["Hubtel Pay", "Hubtel Merchant", "Hubtel Checkout"],
    supervisors: ["Kennedy Lodonu", "Wise Doho"],
  },
];

export const productMetrics: ProductMetrics[] = [
  {
    product: "Product A",
    repositories: [
      "https://github.com/company/product-a-repo1",
      "https://github.com/company/product-a-repo2",
      "https://github.com/company/product-a-repo3",
    ],
    repositoryType: "Monorepo",
    bugs: [3, 2, 3],
    vulnerabilities: [1, 0, 2],
    cyclomaticComplexity: [12, 8, 5],
    codeSmells: [10, 4, 1],
    coverage: [85.6, 88.3, 82.9],
    duplicatedLinesDensity: [2.4, 1.9, 3.8],
    reliabilityRating: ["A", "A", "B"],
    reopenedIssues: [1, 0, 1],
    securityHotspots: [2, 1, 2],
    securityRating: ["A", "A", "B"],
    frameworkUpgrade: true,
    bugsComputation: [3, 2, 3],
    vulnerabilitiesComputation: [1, 0, 2],
    cyclomaticComplexityComputation: [12, 8, 5],
    codeSmellsComputation: [10, 4, 1],
    coverageComputation: [85.6, 88.3, 82.9],
    duplicatedLinesDensityComputation: [2.4, 1.9, 3.8],
    reliabilityRatingComputation: ["A", "A", "B"],
    reopenedIssuesComputation: [1, 0, 1],
    securityHotspotsComputation: [2, 1, 2],
    securityRatingComputation: ["A", "A", "B"],
    semanticScore: [90, 93, 85],
    average: [88, 89, 87],
    finalAverage: 88.3,
  },
  {
    product: "Product B",
    repositories: [
      "https://github.com/company/product-b-repo1",
      "https://github.com/company/product-b-repo2",
    ],
    repositoryType: "Multirepo",
    bugs: [6, 6],
    vulnerabilities: [2, 3],
    cyclomaticComplexity: [15, 15],
    codeSmells: [12, 13],
    coverage: [78.3, 81.2],
    duplicatedLinesDensity: [4.5, 5.9],
    reliabilityRating: ["B", "B"],
    reopenedIssues: [2, 2],
    securityHotspots: [4, 3],
    securityRating: ["B", "B"],
    frameworkUpgrade: false,
    bugsComputation: [6, 6],
    vulnerabilitiesComputation: [2, 3],
    cyclomaticComplexityComputation: [15, 15],
    codeSmellsComputation: [12, 13],
    coverageComputation: [78.3, 81.2],
    duplicatedLinesDensityComputation: [4.5, 5.9],
    reliabilityRatingComputation: ["B", "B"],
    reopenedIssuesComputation: [2, 2],
    securityHotspotsComputation: [4, 3],
    securityRatingComputation: ["B", "B"],
    semanticScore: [80, 85],
    average: [76, 80],
    finalAverage: 78,
  },
  {
    product: "Product C",
    repositories: [
      "https://github.com/company/product-c-repo1",
      "https://github.com/company/product-c-repo2",
      "https://github.com/company/product-c-repo3",
      "https://github.com/company/product-c-repo4",
    ],
    repositoryType: "Monorepo",
    bugs: [1, 2, 1, 1],
    vulnerabilities: [0, 1, 0, 1],
    cyclomaticComplexity: [10, 12, 10, 8],
    codeSmells: [5, 6, 5, 4],
    coverage: [92.1, 91.5, 92.3, 93.0],
    duplicatedLinesDensity: [1.9, 2.0, 1.8, 1.7],
    reliabilityRating: ["A", "A", "A", "A"],
    reopenedIssues: [1, 1, 1, 1],
    securityHotspots: [2, 2, 1, 1],
    securityRating: ["A", "A", "A", "A"],
    frameworkUpgrade: true,
    bugsComputation: [1, 2, 1, 1],
    vulnerabilitiesComputation: [0, 1, 0, 1],
    cyclomaticComplexityComputation: [10, 12, 10, 8],
    codeSmellsComputation: [5, 6, 5, 4],
    coverageComputation: [92.1, 91.5, 92.3, 93.0],
    duplicatedLinesDensityComputation: [1.9, 2.0, 1.8, 1.7],
    reliabilityRatingComputation: ["A", "A", "A", "A"],
    reopenedIssuesComputation: [1, 1, 1, 1],
    securityHotspotsComputation: [2, 2, 1, 1],
    securityRatingComputation: ["A", "A", "A", "A"],
    semanticScore: [94, 95, 94, 96],
    average: [93, 94, 93, 95],
    finalAverage: 93.75,
  },
];

export const cciTableHeadings: string[] = [
  "Product",
  "Repositories",
  "Repository Type",
  "Bugs",
  "Vulnerabilities",
  "Cyclomatic Complexity",
  "Code Smells",
  "Coverage",
  "Duplicated Lines Density",
  "Reliability Rating",
  "Reopened Issues",
  "Security Hotspots",
  "Security Rating",
  "Framework Upgrade",
  "Bugs Computation",
  "Vulnerabilities Computation",
  "Cyclomatic Complexity Computation",
  "Code Smells Computation",
  "Coverage Computation",
  "Duplicated Lines Density Computation",
  "Reliability Rating Computation",
  "Reopened Issues Computation",
  "Security Hotspots Computation",
  "Security Rating Computation",
  "Semantic Score",
  "Average",
  "Final Average",
];

export const cciTableFields: string[] = [
  "product",
  "repositories",
  "repositoryType",
  "bugs",
  "vulnerabilities",
  "cyclomaticComplexity",
  "codeSmells",
  "coverage",
  "duplicatedLinesDensity",
  "reliabilityRating",
  "reopenedIssues",
  "securityHotspots",
  "securityRating",
  "frameworkUpgrade",
  "bugsComputation",
  "vulnerabilitiesComputation",
  "cyclomaticComplexityComputation",
  "codeSmellsComputation",
  "coverageComputation",
  "duplicatedLinesDensityComputation",
  "reliabilityRatingComputation",
  "reopenedIssuesComputation",
  "securityHotspotsComputation",
  "securityRatingComputation",
  "semanticScore",
  "average",
  "finalAverage",
];

const jobLevels = [
  "Executive",
  "NSS",
  "Team Lead",
  "Intern",
  "Senior",
  "Engineering Manager",
  "Head of Engineering",
];

export const EMPLOYEE_FORM_FIELDS: FieldConfig[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter the name of the employee",
    validation: yup.string().required("Name is required"),
    componentType: "input",
  },
  {
    name: "jobLevel",
    label: "Job Level",
    placeholder: "Select the job level of the employee",
    validation: yup.string().oneOf(jobLevels).required("Job Level is required"),
    componentType: "select",
    options: jobLevels,
  },
  {
    name: "domain",
    label: "Domain",
    placeholder: "Select the domain of the employee",
    validation: yup.array().min(1, "At least one domain is required"),
    componentType: "select",
    options: domains,
    isMulti: true,
  },
];

export const REPO_FORM_FIELDS: FieldConfig[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter the name of the repository",
    validation: yup.string().required("Name is required"),
    componentType: "input",
  },
  {
    name: "url",
    label: "URL",
    placeholder: "Enter the URL of the repository",
    validation: yup
      .string()
      .url("Invalid URL format")
      .required("URL is required"),
    componentType: "input",
    type: "url",
  },
  {
    name: "type",
    label: "Type",
    placeholder: "Enter the type of the repository",
    validation: yup.string().oneOf(domains).required("Type is required"),
    componentType: "select",
    options: domains,
  },
  {
    name: "sonarQubeKey",
    label: "SonarQube Key",
    placeholder: "Enter the SonarQube key of the repository",
    validation: yup.string().required("SonarQube key is required"),
    componentType: "input",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter a description of the repository",
    validation: yup.string().required("Description is required"),
    componentType: "input",
  },
  {
    name: "semanticScoreComputation",
    label: "Semantic Score Computation",
    placeholder: "Enter the semantic score computation value",
    validation: yup
      .number()
      .min(0, "Value cannot be negative")
      .required("Semantic score computation is required"),
    componentType: "input",
    type: "number",
  },
  {
    name: "frameworkUpgradeComputation",
    label: "Framework Upgrade Computation",
    placeholder: "Enter the framework upgrade computation value",
    validation: yup
      .number()
      .min(0, "Value cannot be negative")
      .required("Framework upgrade computation is required"),
    componentType: "input",
    type: "number",
  },
];
