export interface CampaignList {
  campaign: Campaign[];
}

export interface Campaign {
  id: number;
  name: string;
  slug: string;
  image: string;
  shortDescription: string;
  details?: string;
}

export interface PaginatedCampaigns {
  next: any;
  itemsOnPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  previous: any;
  count: number;
  totalPages: number;
  currentPage: number;
  data: Campaign[];
}

export interface CompleteCampaign {
  id: number;
  image: string;
  name: string;
  slug: string;
  shortDescription: string;
  policy: Policy;
  details: string;
  isActive: boolean;
}

export interface Policy {
  id: number;
  slug: string;
}
