export const handleSearch = (
  event,
  { search, setIsSearching, setFoundedItems, todos }
) => {
  event.preventDefault();
  searchData(search, setIsSearching, setFoundedItems, todos);
};

const searchData = (searchText, setIsSearching, setFoundedItems, todos) => {
  setIsSearching(true);
  const items = todos.filter(({ title }) => title.includes(searchText));
  setFoundedItems(items);
};
