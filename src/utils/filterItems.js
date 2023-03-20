export function filterItems(query, dataset) {
	if (query === "") {
		return dataset;
	}
	// return items.filter((item) => item.title.indexOf(query) === 0);
	return dataset.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
}