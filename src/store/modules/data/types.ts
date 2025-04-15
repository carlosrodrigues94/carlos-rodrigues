import { PortfolioData } from "../../../types";

export interface PortfolioState {
  data: PortfolioData;
  loading: boolean;
  error: string | null;
}
