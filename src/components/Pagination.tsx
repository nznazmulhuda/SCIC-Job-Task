import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { DataContext } from "../context/data.context";

export default function PaginationControlled() {
	const [totalCount, setTotalCount] = React.useState(0);
	const { data, setPage: pageNumber } = React.useContext(DataContext);
	const [page, setPage] = React.useState(1);
	const [isPage, setIsPage] = React.useState(true);

	React.useEffect(() => {
		if (data.length < 9) {
			setIsPage(false);
		} else {
			setIsPage(true);
			axios
				.get("/data/totalCount")
				.then((res) => setTotalCount(Math.ceil(res.data.totalData / 9)));
		}
	}, [data]);

	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
		pageNumber(value);
	};

	return (
		<Stack spacing={1}>
			{isPage && (
				<Pagination count={totalCount} page={page} onChange={handleChange} />
			)}
		</Stack>
	);
}
