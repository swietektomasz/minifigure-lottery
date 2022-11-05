const BASE_URL = "https://rebrickable.com/api/v3/lego/";

export const getMinifigs = () =>
  fetch(`${BASE_URL}minifigs/?in_theme_id=246&page=1`, {
    headers: { Authorization: "key 913d12d30b68288a7e2fcffe7e4f0f06" },
  }).then((data) => data.json().then((figs) => figs.results));
