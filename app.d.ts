type WhoDidntPaginate<T extends object> = {
  users: T[];
  big_list: boolean;
  page_size: number;
  next_max_id: string;
  has_more: boolean;
  should_limit_list_of_followers: boolean;
  use_clickable_see_more: boolean;
  show_spam_follow_request_tab: boolean;
  follow_ranking_token: string;
  status: string;
};
