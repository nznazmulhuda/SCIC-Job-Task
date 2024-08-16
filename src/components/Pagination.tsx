import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { DataContext } from "../context/data.context";

export default function PaginationControlled() {
	const [totalCount, setTotalCount] = React.useState(0);
	const {
		data,
		setPage: pageNumber,
		category,
		maxPrice,
		minPrice,
		query,
		sortBy,
	} = React.useContext(DataContext);
	const [page, setPage] = React.useState(1);

	React.useEffect(() => {
		if (category || maxPrice || minPrice || query || sortBy) {
			setTotalCount(Math.ceil(data.length / 9));
			return;
		} else {
			axios
				.get("/data/totalCount")
				.then((res) => setTotalCount(Math.ceil(res.data.totalData / 9)))
				.catch((err) => console.error(err));
		}
	}, [category, data.length, maxPrice, minPrice, query, sortBy]);

	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
		pageNumber(value);
	};

	return (
		<Stack spacing={1}>
			<Pagination count={totalCount} page={page} onChange={handleChange} />
		</Stack>
	);
}
