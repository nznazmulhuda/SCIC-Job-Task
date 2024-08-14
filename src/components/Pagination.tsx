import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled() {
	const [page, setPage] = React.useState(1);
	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
		console.log(value);
	};

	return (
		<Stack spacing={1}>
			<Pagination count={10} page={page} onChange={handleChange} />
		</Stack>
	);
}
