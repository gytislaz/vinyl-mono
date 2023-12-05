export enum recordsType {
   WISHLIST = 'collection/folders/6575551/releases',
   COLLECTION = 'collection/folders/6576124/releases'
}

export interface Records {
  pagination?: Pagination;
  releases?:   Release[];
}

export interface Pagination {
  page?:     number;
  pages?:    number;
  per_page?: number;
  items?:    number;
  urls?:     Urls;
}

export interface Urls {
}

export interface Release {
  id?:                number;
  instance_id?:       number;
  date_added?:        Date;
  rating?:            number;
  basic_information: BasicInformation;
  folder_id?:         number;
}

export interface BasicInformation {
  id?:           number;
  master_id?:    number;
  master_url?:   string;
  resource_url?: string;
  thumb?:        string;
  cover_image?:  string;
  title?:        string;
  year?:         number;
  formats?:      Format[];
  artists:      Artist[];
  labels?:       Label[];
  genres?:       string[];
  styles?:       string[];
}

export interface Artist {
  name?:         string;
  anv?:          string;
  join?:         string;
  role?:         string;
  tracks?:       string;
  id?:           number;
  resource_url?: string;
}

export interface Format {
  name?:         string;
  qty?:          string;
  descriptions?: string[];
  text?:         string;
}

export interface Label {
  name?:             string;
  catno?:            string;
  entity_type?:      string;
  entity_type_name?: string;
  id?:               number;
  resource_url?:     string;
}
